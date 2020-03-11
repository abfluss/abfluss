/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";
import { ITimeValuePair, TimeValuePairSchema } from "./time-value-pair";

export interface IMiniGraphData {
    calorieReportUrl: string;
    dailyGoalReportUrl: string;
    data: {
        calories: ITimeValuePair;
        dailyGoal: ITimeValuePair;
        date: number;
        distance: ITimeValuePair;
        nightLowHr: ITimeValuePair;
        sleepAverage: ITimeValuePair;
        sleepPlus: boolean;
    };
    distanceReportUrl: string;
    sampleDate: number;
    sleepAvgReportUrl: string;
}

export const MiniGraphDataSchema: Schema = {
    properties: {
        calorieReportUrl: { type: "string" },
        dailyGoalReportUrl: { type: "string" },
        data: {
            properties: {
                calories: TimeValuePairSchema,
                dailyGoal: TimeValuePairSchema,
                date: { type: "number" },
                distance: TimeValuePairSchema,
                nightLowHr: TimeValuePairSchema,
                sleepAverage: TimeValuePairSchema,
                sleepPlus: { type: "boolean" },
            },
            type: "object",
        },
        distanceReportUrl: { type: "string" },
        sampleDate: { type: "number" },
        sleepAvgReportUrl: { type: "string" },
    },
    type: "object",
};
