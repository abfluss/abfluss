/*
 * Package @abfluss/cli
 * Source https://abfluss.github.io/abfluss/
 */

import { HeartRateDownloader } from './heartrate-downloader';

export const heartrateHandler = (argv: { [key: string]: string }): void => {
    console.log('Handler called', argv);
    const dateRegex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
    if (!dateRegex.test(argv.startdate)) {
        throw new Error('The provided startDate does not seem valid');
    }
    const samples: number = argv.samples && typeof argv.samples === 'number' ? argv.samples : 1000;
    const throttle: number | undefined = argv.throttle && typeof argv.throttle === 'number' ? argv.throttle : undefined;
    const app: HeartRateDownloader = new HeartRateDownloader();
    if (argv.enddate) {
        console.log('Start downloading', argv.startdate, argv.enddate, argv.samples, argv.samples);
        if (!dateRegex.test(argv.enddate)) {
            throw new Error('The provided endDate does not seem valid');
        }
        if (argv.startdate.localeCompare(argv.enddate) >= 0) {
            throw new Error('Enddate must be after startdate');
        }
        app.downloadRange(argv.startdate, argv.enddate, samples, throttle);
    } else {
        app.download(argv.startdate, samples);
    }
};
