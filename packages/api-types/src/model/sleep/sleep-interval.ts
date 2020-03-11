/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";

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
export const SleepIntervalSchema: Schema = {
    id: "/SleepInterval",
    properties: {
        longInterruption: {
            type: "boolean",
        },
        offsetFromStart: {
            type: "number",
        },
        sleepWakeState: {
            type: "number",
        },
    },
    type: "object",
};
