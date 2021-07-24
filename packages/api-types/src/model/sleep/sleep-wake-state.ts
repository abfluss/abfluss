/*
 * Package @abfluss/api-types
 * Source https://abfluss.github.io/abfluss/
 */

import { SleepWakeStateType } from './sleep-wake-state-type';

/**
 * Sleep Wake State Information
 * @since 2.4.0
 */
export interface ISleepWakeState {
    /**
     * Long interuption
     */
    longInterruption: boolean;
    /**
     * Offset from start of sleep
     */
    offsetFromStart: number;
    /**
     * Sleep Wakte State described in {@link SleepWakeStateType}
     */
    sleepWakeState: SleepWakeStateType;
}
