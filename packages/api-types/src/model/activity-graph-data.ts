/*
 * Package @abfluss/api-types
 * Source https://abfluss.github.io/abfluss/
 */

import { Schema } from 'jsonschema';
import { ACTIVITY_TIMELINE_ICONS_SCHEMA, IActivityTimelineIcons } from './activity-timeline-icons';
import { HEART_RATE_SUMMARY_SCHEMA, IHeartRateSummary } from './heart-rate-summary';
import { IStartEndTimePair, START_END_TIME_PAIR_SCHEMA } from './start-end-time-pair';
import { ITimeValuePair, TIME_VALUE_PAIR_SCHEMA } from './time-value-pair';

export interface IActivityGraphData {
    heartRateTimelineSamples: ITimeValuePair[];
    heartRateSummary: IHeartRateSummary;
    activityZoneLimits: number[];
    activityTimelineSamples: ITimeValuePair[];
    activityTimelineIcons: IActivityTimelineIcons[];
    lastSync: number;
    trainingTimelineList: IStartEndTimePair[];
}

export const ACTIVITY_GRAPH_DATA_SCHEMA: Schema = {
    id: '/ActivityGraphData',
    properties: {
        activityTimelineIcons: {
            items: ACTIVITY_TIMELINE_ICONS_SCHEMA,
            type: 'array',
        },
        activityTimelineSamples: {
            items: TIME_VALUE_PAIR_SCHEMA,
            type: 'array',
        },
        activityZoneLimits: {
            items: {
                type: 'number',
            },
            maxItems: 7,
            minItems: 1,
            type: 'array',
        },
        heartRateSummary: HEART_RATE_SUMMARY_SCHEMA,
        heartRateTimelineSamples: {
            items: TIME_VALUE_PAIR_SCHEMA,
            type: 'array',
        },
        highSessionTimelineList: { type: 'array' },
        lastSync: { type: 'number' },
        trainingTimelineList: {
            items: START_END_TIME_PAIR_SCHEMA,
            type: 'array',
        },
    },
    type: 'object',
};
