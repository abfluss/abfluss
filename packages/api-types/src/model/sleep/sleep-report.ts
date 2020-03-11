import { ISleepWakeState } from "./sleep-wake-state";

/** Response from
 *
 * https://sleep.flow-prd.api.polar.com/api/sleep/report?from=x&to=y
 * @since 2.4.0
 * */
export interface ISleepReport {
    continuityClass: number;
    continuityIndex: number;
    /**
     * format YYYY-mm-dd
     */
    date: string;
    sleepCycles?: number;
    sleepEndOffset: number;
    /**
     * 0000-00-00T00:00:00.000+02:00
     */
    sleepEndTime: string;
    sleepRating?: number;
    sleepScore?: number;
    sleepStartOffset: number;
    sleepStartTime: string;
    sleepWakeStates: ISleepWakeState[];
}
