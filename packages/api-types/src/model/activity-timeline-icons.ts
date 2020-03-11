/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";

export const ActivityTimelineIconsSchema: Schema = {
    properties: {
        activityTimelineIconType: {
            type: "string",
        },
        distance: {
            type: "integer",
        },
        duration: {
            type: "integer",
        },
        kiloCalories: {
            type: "integer",
        },
        localTime: {
            type: "integer",
        },
        sleepPlus: {
            type: "boolean",
        },
        sportName: {
            type: "string",
        },
        url: {
            type: "string",
        },
    },
    type: "object",
};

export interface IActivityTimelineIcons {
    url: string;
    activityTimelineIconType: string;
    distance: number;
    duration: number;
    kiloCalories: number;
    localTime: number;
    sleepPlus: boolean;
    sportName: string;
}
