/*
 * Package @abfluss/api-types
 * Source https://abfluss.github.io/abfluss/
 */

import { Schema } from 'jsonschema';
import { ACTIVITY_GRAPH_DATA_SCHEMA, IActivityGraphData } from './activity-graph-data';
import { IMiniGraphData, MINI_GRAPH_DATA_SCHEMA } from './mini-graph-data';

export interface IDayData {
    activityGraphData: IActivityGraphData;
    miniGraphData: IMiniGraphData;
}

export const DAY_DATA_SCHEMA: Schema = {
    properties: {
        activityGraphData: ACTIVITY_GRAPH_DATA_SCHEMA,
        dataPanelData: {
            type: 'object',
        },
        miniGraphData: MINI_GRAPH_DATA_SCHEMA,
    },
    type: 'object',
};
