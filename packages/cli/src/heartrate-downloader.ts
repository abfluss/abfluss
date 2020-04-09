/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { FlowDate } from '@abfluss/util';

export class HeartRateDownloader {

    public downloadRange(startdate: string | FlowDate,
                         enddate: string | FlowDate,
                         samples: number,
                         throttle: number = 5000): void {
        const convStartDate: FlowDate = (startdate instanceof FlowDate) ? startdate : FlowDate.fromString(startdate);
        const convEndDate: FlowDate = (enddate instanceof FlowDate) ? enddate : FlowDate.fromString(enddate);
        const downloadDates: FlowDate[] = FlowDate.toDateArray(convStartDate, convEndDate);
        // tslint:disable-next-line:no-console
        console.log(downloadDates);
        setTimeout((): void => {

        }, throttle);
    }

    public download(startdate: string, samples: number): void {

    }
}
