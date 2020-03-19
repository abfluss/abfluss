/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { cliModule } from './cli-module';
import { FlowApiClient } from '@abfluss/api-client';
import chalk = require('chalk');
import { FlowDate } from '@abfluss/util';
import * as fs from 'fs';
import * as path from 'path';
const DATE_REGEX: RegExp = /^[0-9]+\-([0-9]|1[0-2])\-([0-9]|([1-2][0-9])|(3[0-1]))$/;
const dateTransformer: (inp: string) => string = (inp: string): string => {
    if (inp.length == 0) {
        return '';
    }
    const testResult: boolean = DATE_REGEX.test(inp);
    return testResult ? chalk.green(inp) : chalk.red(inp);
}
const dateValidator: (inp: string) => boolean = (inp: string): boolean => {
    return DATE_REGEX.test(inp);
}
export const downloadDate = (apiClient: FlowApiClient): Promise<void> => {
    return cliModule([{
        message: 'The day to download',
        name: 'date',
        transformer: dateTransformer,
        type: 'input',
        validator: dateValidator,
    }]).then((resp: { date: string }): void | Promise<void> => {
        return apiClient
            .getActivityTimelineForDay(FlowDate.fromString(resp.date))
            .then((val): void => {
                console.log(val);
            })
    });
};
export const testFile = (filePath: string): Promise<boolean> => {
    return new Promise((resolve: (value: boolean) => void, reject: (err?: any) => void): void => {
        fs.access(filePath, fs.constants.W_OK, (err?: any) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};
export const promiseAccess = (filePath: string, mode: number): Promise<boolean> => {
    return new Promise((resolve: (value: boolean) => void, reject: (err?: any) => void): void => {
        fs.access(filePath, mode, (err?: any) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
};
export const promiseStat = (filePath: string): Promise<fs.Stats> => {
    return new Promise((resolve: (value: fs.Stats) => void, reject: (err?: any) => void): void => {
        fs.stat(filePath, { bigint: false }, (err: any, stats: fs.Stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    });
};

export const isFolder = (filePath: string): Promise<boolean> => {
    return promiseStat(filePath)
        .then((stats: fs.Stats): boolean => {
            return stats.isDirectory();
        })
        .catch(() => {
            return false;
        })
}

export const getExistingParent = async (filePath: string): Promise<string> => {
    let currentNormalizedPath = path.normalize(filePath);
    while (true) {
        const dirName: string = path.dirname(currentNormalizedPath);
        if (dirName !== '') {
            throw new Error('No parent');
        }
        if (await testFile(dirName)) {
            return dirName;
        } else {
            currentNormalizedPath = dirName;
        }
    }
};
export const selectOutputDir = (): Promise<string> => {
    return cliModule([{
        default: './',
        filter: (inp: string): string => {
            return path.normalize(inp);
        },
        message: 'Specify your output directory',
        name: 'outputDir',
        type: 'input',
        validate: async (inp: string): Promise<true | string> => {
            const normalizedPath: string = path.normalize(inp);
            if (await promiseAccess(normalizedPath, fs.constants.R_OK)) {
                if (await isFolder(normalizedPath)) {
                    return true;
                }
                return 'The specified path is not an accessible directory!';
            }
            return true;
        },
    }])
        .then((resp: { outputDir: string }): string => {
            return resp.outputDir;
        });
};

export const downloadHeartrate = (apiClient: FlowApiClient): Promise<void> => {
    return cliModule([{
        choices: [{
            name: 'Download Date Range',
            type: 'choice',
            value: 'dateRange',
        }, {
            name: 'Download Date',
            type: 'choice',
            value: 'date',
        }, {
            type: 'separator',
        }, {
            name: 'Cancel',
            type: 'choice',
            value: 'cancel',
        }],
        message: 'What do you want to do?',
        name: 'command',
        type: 'list',
    }]).then((resp: { command: string }): void | Promise<void> => {
        switch (resp.command) {
            case 'dateRange':
                return downloadHeartrate(apiClient);
            case 'date':
                return downloadDate(apiClient);
            case 'cancel':
            default:
                return;
        }
    });
};
