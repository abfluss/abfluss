/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";
import {
    ISleepSummary,
    SleepSummarySchema,
} from "./sleep-summary";

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
export const SleepNearbySchema: Schema = {
    id: "/SleepNearby",
    properties: {
        nextNight: SleepSummarySchema,
        previousNights: {
            items: SleepSummarySchema,
            type: "array",
        },
    },
    type: "object",
};
