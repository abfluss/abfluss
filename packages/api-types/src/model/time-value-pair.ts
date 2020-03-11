/*!
 * Source https://github.com/abfluss/abfluss Package: api-types
 */

import { Schema } from 'jsonschema';
export interface ITimeValuePair {
    time: number;
    value: number;
}

export const TIME_VALUE_PAIR_SCHEMA: Schema = {
    properties: {
        time: {
            type: 'integer',
        },
        value: {
            type: 'number',
        },
    },
    type: 'object',
};
