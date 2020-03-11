/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { FlowApiClient } from '@abfluss/api-client';
import * as yargs from 'yargs';
import { HeartRateDownloader } from './heartrate-downloader';
import { createSigninMiddleware } from './signin-middleware';

// tslint:disable-next-line:
const inputArgs: any = yargs((process.argv.slice(2)))
    .command('download heartrate <startdate> [enddate]', 'the serve command', (args: yargs.Argv) => {
        return yargs.option('samples', {
            default: 50000,
            description: 'The number of samples for heartrate to download',
            type: 'number',
        }).option('enddate', {
            demand: false,
            description: 'A date formated like 2019-10-12',
            type: 'string',
        }).option('startdate', {
            demand: true,
            description: 'A date formated like 2019-10-12',
            type: 'string',
        }).option('throttle', {
            default: 1000,
            description: 'The throttle in ms between every request to the flow.polar.com backend',
            type: 'number',
        });

    }, (argv: any): void => {
        const dateRegex: RegExp = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
        if (!dateRegex.test(argv.startdate)) {
            throw new Error('The provided startDate does not seem valid');
        }
        const app: HeartRateDownloader = new HeartRateDownloader();
        if (argv.enddate) {
            if (!dateRegex.test(argv.enddate)) {
                throw new Error('The provided endDate does not seem valid');
            }
            if (argv.startdate.localeCompare(argv.enddate) >= 0) {
                throw new Error('Enddate must be after startdate');
            }
            app.downloadRange(argv.startdate, argv.enddate, argv.samples, argv.samples);
        } else {
            app.download(argv.startdate, argv.samples);
        }
    })
    .option('password', {
        demand: true,
        description: 'The password you use to login to flow.polar.com',
        string: true,
    })
    .option('email', {
        demand: true,
        description: 'The email you use to login to flow.polar.com',
        string: true,
    })
    .middleware(createSigninMiddleware(new FlowApiClient()))
    .demandOption(['email', 'password'], 'Please provide both run and path arguments to work with this tool')
    .help()
    .argv;

// tslint:disable-next-line:no-console
console.log(inputArgs);
