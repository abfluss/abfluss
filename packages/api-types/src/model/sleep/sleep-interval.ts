/*
 * Package @abfluss/api-types
 * Source https://abfluss.github.io/abfluss/
 */

import { Schema } from 'jsonschema';

/**
 * Sleep interval {@link SleepIntervalSchema}
 */
export interface ISleepInterval {
    sleepWakeState: number;
    offsetFromStart: number;
    longInterruption: boolean;
}

/**
 * Schema for {@link ISleepInterval}
 */
export const SLEEP_INTERVAL_SCHEMA: Schema = {
    id: '/SleepInterval',
    properties: {
        longInterruption: {
            type: 'boolean',
        },
        offsetFromStart: {
            type: 'number',
        },
        sleepWakeState: {
            type: 'number',
        },
    },
    type: 'object',
};
