/*
 * Package @abfluss/api-types
 * Source https://abfluss.github.io/abfluss/
 */

import { Schema } from 'jsonschema';

export const START_END_TIME_PAIR_SCHEMA: Schema = {
    properties: {
        endTime: {
            type: 'number',
        },
        startTime: {
            type: 'integer',
        },
    },
    type: 'object',
};

export interface IStartEndTimePair {
    endTime: number;
    startTime: number;
}
