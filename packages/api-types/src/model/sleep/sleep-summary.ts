/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";
import {
    INightSleep,
    NightSleepSchema,
} from "./night-sleep";
import {
    ISleepEvaluationData,
    SleepEvaluationDataSchema,
} from "./sleep-evaluation-data";
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
export const SleepSummarySchema: Schema = {
    id: "/SleepSummary",
    properties: {
        date: {
            type: "string",
        },
        nightSleep: NightSleepSchema,
        sleepEvaluationData: SleepEvaluationDataSchema,
    },
    type: "object",
};
