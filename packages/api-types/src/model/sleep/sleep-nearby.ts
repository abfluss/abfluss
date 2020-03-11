/*!
 * Source https://github.com/abfluss/abfluss Package: api-types
 */

import { Schema } from 'jsonschema';
import {
    ISleepSummary,
    SLEEP_SUMMARY_SCHEMA,
} from './sleep-summary';

/**
 * Schema: {@link SleepNearbySchema}
 */
export interface ISleepNearby {
    nextNight: ISleepSummary;
    previousNights: ISleepSummary[];
}

/**
 * Schema for {@link ISleepNearby}
 */
export const SLEEP_NEARBY_SCHEMA: Schema = {
    id: '/SleepNearby',
    properties: {
        nextNight: SLEEP_SUMMARY_SCHEMA,
        previousNights: {
            items: SLEEP_SUMMARY_SCHEMA,
            type: 'array',
        },
    },
    type: 'object',
};
