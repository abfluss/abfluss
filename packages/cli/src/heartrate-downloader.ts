/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { FlowDate } from '@abfluss/util';
import * as chalk from 'chalk';
import { sleep } from './util';
export class HeartRateDownloader {

    public async downloadRange(startdate: string | FlowDate,
        enddate: string | FlowDate,
        samples: number,
        throttle: number = 5000): Promise<void> {
        const convStartDate: FlowDate = (startdate instanceof FlowDate) ? startdate : FlowDate.fromString(startdate);
        const convEndDate: FlowDate = (enddate instanceof FlowDate) ? enddate : FlowDate.fromString(enddate);
        const downloadDates: FlowDate[] = FlowDate.toDateArray(convStartDate, convEndDate);
        // tslint:disable-next-line:no-console
        for (let i: number = 0; i < downloadDates.length; i++) {
            const downloadDate: FlowDate = downloadDates[i];
            if (i > 0) {
                await sleep(throttle);
            }
            this.download(downloadDate, samples);
        }
    }

    public async download(downloadDate: FlowDate, samples: number): Promise<void> {
        console.log(chalk.italic('Downloading:') + ' ' + chalk.red.bold(downloadDate.toString()));

    }
}
