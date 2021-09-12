/*
 * Package @abfluss/cli
 * Source https://abfluss.github.io/abfluss/
 */

import { FlowDate } from '@abfluss/util';

export class HeartRateDownloader {
    public downloadRange(startdate: string | FlowDate, enddate: string | FlowDate, samples: number, throttle = 5000): void {
        const convStartDate: FlowDate = startdate instanceof FlowDate ? startdate : FlowDate.fromString(startdate);
        const convEndDate: FlowDate = enddate instanceof FlowDate ? enddate : FlowDate.fromString(enddate);
        const downloadDates: FlowDate[] = FlowDate.toDateArray(convStartDate, convEndDate);
        // tslint:disable-next-line:no-console
        console.log(downloadDates);
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        setTimeout((): void => {}, throttle);
    }

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function */
    public download(startdate: string, samples: number): void {}
}
