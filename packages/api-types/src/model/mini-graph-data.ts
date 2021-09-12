/*
 * Package @abfluss/api-types
 * Source https://abfluss.github.io/abfluss/
 */

import { Schema } from 'jsonschema';
import { ITimeValuePair, TIME_VALUE_PAIR_SCHEMA } from './time-value-pair';

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

export const MINI_GRAPH_DATA_SCHEMA: Schema = {
    properties: {
        calorieReportUrl: { type: 'string' },
        dailyGoalReportUrl: { type: 'string' },
        data: {
            properties: {
                calories: TIME_VALUE_PAIR_SCHEMA,
                dailyGoal: TIME_VALUE_PAIR_SCHEMA,
                date: { type: 'number' },
                distance: TIME_VALUE_PAIR_SCHEMA,
                nightLowHr: TIME_VALUE_PAIR_SCHEMA,
                sleepAverage: TIME_VALUE_PAIR_SCHEMA,
                sleepPlus: { type: 'boolean' },
            },
            type: 'object',
        },
        distanceReportUrl: { type: 'string' },
        sampleDate: { type: 'number' },
        sleepAvgReportUrl: { type: 'string' },
    },
    type: 'object',
};
