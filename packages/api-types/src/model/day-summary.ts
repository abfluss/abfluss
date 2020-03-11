/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";
import { DayDataSchema, IDayData } from "./day-data";

export interface IDaySummary {
    [key: string]: IDayData;
}
export const DaySummarySchema: Schema = {
    additionalProperties: false,
    id: "/ActivityTimeline",
    patternProperties: {
        // the property name will be passed to new RegExp(prop), so backslashes
        // have to be escaped.
        "^[0-9]{4,4}\-[0-9]{1,2}\-[0-9]{1,2}$": DayDataSchema,
    },
    type: "object",
};
