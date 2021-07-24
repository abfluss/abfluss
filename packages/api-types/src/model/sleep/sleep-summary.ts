/*
 * Package @abfluss/api-types
 * Source https://abfluss.github.io/abfluss/
 */

import { Schema } from 'jsonschema';
import { INightSleep, NIGHT_SLEEP_SCHEMA } from './night-sleep';
import { ISleepEvaluationData, SLEEP_EVALUATION_DATA_SCHEMA } from './sleep-evaluation-data';
/**
 * See {@link SleepSummarySchema}
 */
export interface ISleepSummary {
    date: string;
    nightSleep: INightSleep;
    sleepEvaluationData: ISleepEvaluationData;
}

/**
 * Schema for {@link ISleepSummary}
 */
export const SLEEP_SUMMARY_SCHEMA: Schema = {
    id: '/SleepSummary',
    properties: {
        date: {
            type: 'string',
        },
        nightSleep: NIGHT_SLEEP_SCHEMA,
        sleepEvaluationData: SLEEP_EVALUATION_DATA_SCHEMA,
    },
    type: 'object',
};
