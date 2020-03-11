/*!
 * Source https://github.com/abfluss/abfluss Package: api-types
 */

import { Schema } from 'jsonschema';
import { DAY_DATA_SCHEMA, IDayData } from './day-data';

export interface IDaySummary {
    [key: string]: IDayData;
}
export const DAY_SUMMARY_SCHEMA: Schema = {
    additionalProperties: false,
    id: '/ActivityTimeline',
    patternProperties: {
        // the property name will be passed to new RegExp(prop), so backslashes
        // have to be escaped.
        '^[0-9]{4,4}\-[0-9]{1,2}\-[0-9]{1,2}$': DAY_DATA_SCHEMA,
    },
    type: 'object',
};
