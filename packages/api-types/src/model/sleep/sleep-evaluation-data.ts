/*!
 * Source https://github.com/abfluss/abfluss Package: api-types
 */

import { Schema } from 'jsonschema';

export interface ISleepEvaluationData {
    asleep: number;
    continuityClass: number;
    continuityIndex: number;
    efficiencyPercent: number;
    longFeedback: string;
    longInterruptionCount: number;
    longInterruptionDuration: number;
    shortFeedback: string;
    shortInterruptionCount: number;
    shortInterruptionDuration: number;
    sleepRatioPercentage: number;
    sleepSpan: number;
    totalInterruptionCount: number;
    totalInterruptionDuration: number;
}

/**
 * Schema for {@link ISleepEvaluationData}
 */
export const SLEEP_EVALUATION_DATA_SCHEMA: Schema = {
    id: '/SleepEvaluationData',
    properties: {
        asleep: {
            type: 'number',
        },
        continuityClass: { type: 'number' },
        continuityIndex: { type: 'number' },
        efficiencyPercent: { type: 'number' },
        longFeedback: {
            type: 'string',
        },
        longInterruptionCount: { type: 'number' },
        longInterruptionDuration: { type: 'number' },
        shortFeedback: {
            type: 'string',
        },
        shortInterruptionCount: { type: 'number' },
        shortInterruptionDuration: { type: 'number' },
        sleepRatioPercentage: { type: 'number' },
        sleepSpan: { type: 'number' },
        totalInterruptionCount: { type: 'number' },
        totalInterruptionDuration: { type: 'number' },
    },
    type: 'object',
};
