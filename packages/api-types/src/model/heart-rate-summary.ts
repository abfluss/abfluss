/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";

export interface IHeartRateSummary {
    dayMaximum: number;
    dayMaximumDateTime: number;
    dayMinimum: number;
    dayMinimumDateTime: number;
    nightMinimum: number;
    nightMinimumDateTime: number;
}

export const HeartRateSummarySchema: Schema = {
    properties: {
        dayMaximum: { type: "number" },
        dayMaximumDateTime: { type: "number" },
        dayMinimum: { type: "number" },
        dayMinimumDateTime: { type: "number" },
        nightMinimum: { type: "number" },
        nightMinimumDateTime: { type: "number" },
    },
    type: "object",
};
