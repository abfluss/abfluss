/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { FlowApiClient } from '@abfluss/api-client';
import PromptUI = require('inquirer/lib/ui/prompt');
import * as chalk from 'chalk';
import { cliModule } from './cli-module';
import { downloadHeartrate } from './download-heartrate-handler';

interface ILoginInfo {
    email: string;
    password: string;
}
export class CliApp {
    public static mainMenu(apiClient: FlowApiClient): Promise<void> {
        return cliModule([{
            choices: [{
                name: 'Download Heartrate',
                type: 'choice',
                value: 'downloadHeartrate',
            }, {
                type: 'separator',
            }, {
                name: 'Exit CLI',
                type: 'choice',
                value: 'exit',
            }],
            message: 'What do you want to do?',
            name: 'command',
            type: 'list',
        }]).then((resp: { command: string }) => {
            switch (resp.command) {
                case 'exit':
                    process.exit(0);
                    break;
                case 'downloadHeartrate':
                    return downloadHeartrate(apiClient)
                        .then(() => CliApp.mainMenu(apiClient));
                default:
                    return CliApp.mainMenu(apiClient);
            }
        });
    }
    public static start(): void {
        const testModule: Promise<ILoginInfo> & { ui: PromptUI } = cliModule([
            {
                message: 'Your flow.polar.com email address',
                name: 'email',
                type: 'input',
                validate: (inp: string): boolean => {
                    return /\W+/.test(inp);
                },
            },
            {
                message: 'Your flow.polar.com password',
                name: 'password',
                type: 'password',
            },
        ]);

        testModule.then((loginInfo: ILoginInfo): Promise<FlowApiClient> => {
            const apiClient: FlowApiClient = new FlowApiClient();
            console.log('Signin in as: ' + chalk.bold.green(loginInfo.email));
            return apiClient
                .signin(loginInfo.email, loginInfo.password)
                .catch((err: any) => {
                    console.log(chalk.red('\rCouldn\'t sign in as: ' + chalk.bold(loginInfo.email)));
                    process.exit(1);
                })
                .then((): FlowApiClient => {
                    console.log('\rSigned in as: ' + chalk.bold.green(loginInfo.email));
                    return apiClient;
                });
        }).then((apiClient: FlowApiClient): Promise<void> => {
            return CliApp.mainMenu(apiClient);
        });
    }
}
