/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";
import {
    ActivityTimelineIconsSchema,
    IActivityTimelineIcons,
} from "./activity-timeline-icons";
import {
    HeartRateSummarySchema,
    IHeartRateSummary,
} from "./heart-rate-summary";
import {
    IStartEndTimePair,
    StartEndTimePairSchema,
} from "./start-end-time-pair";
import {
    ITimeValuePair,
    TimeValuePairSchema,
} from "./time-value-pair";

export interface IActivityGraphData {
    heartRateTimelineSamples: ITimeValuePair[];
    heartRateSummary: IHeartRateSummary;
    activityZoneLimits: number[];
    activityTimelineSamples: ITimeValuePair[];
    activityTimelineIcons: IActivityTimelineIcons[];
    lastSync: number;
    trainingTimelineList: IStartEndTimePair[];
}

export const ActivityGraphDataSchema: Schema = {
    id: "/ActivityGraphData",
    properties: {
        activityTimelineIcons: {
            items: ActivityTimelineIconsSchema,
            type: "array",
        },
        activityTimelineSamples: {
            items: TimeValuePairSchema,
            type: "array",
        },
        activityZoneLimits: {
            items: {
                type: "number",
            },
            maxItems: 7,
            minItems: 1,
            type: "array",
        },
        heartRateSummary: HeartRateSummarySchema,
        heartRateTimelineSamples: {
            items: TimeValuePairSchema,
            type: "array",
        },
        highSessionTimelineList: { type: "array" },
        lastSync: { type: "number" },
        trainingTimelineList: {
            items: StartEndTimePairSchema,
            type: "array",
        },
    },
    type: "object",
};
