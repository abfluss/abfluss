/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";
import { ActivityGraphDataSchema, IActivityGraphData } from "./activity-graph-data";
import { IMiniGraphData, MiniGraphDataSchema } from "./mini-graph-data";

export interface IDayData {
    activityGraphData: IActivityGraphData;
    miniGraphData: IMiniGraphData;
}

export const DayDataSchema: Schema = {
    properties: {
        activityGraphData: ActivityGraphDataSchema,
        dataPanelData: {
            type: "object",
        },
        miniGraphData: MiniGraphDataSchema,
    },
    type: "object",
};
