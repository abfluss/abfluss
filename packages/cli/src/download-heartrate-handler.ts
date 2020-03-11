/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { HeartRateDownloader } from './heartrate-downloader';

export const heartrateHandler = (argv) => {
    console.log('Handler called', argv);
    const dateRegex: RegExp = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
    if (!dateRegex.test(argv.startdate)) {
        throw new Error('The provided startDate does not seem valid');
    }
    const app: HeartRateDownloader = new HeartRateDownloader();
    if (argv.enddate) {
        console.log('Start downloading', argv.startdate, argv.enddate, argv.samples, argv.samples);
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
};
