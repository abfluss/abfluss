/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { Schema } from "jsonschema";
export interface ITimeValuePair {
    time: number;
    value: number;
}

export const TimeValuePairSchema: Schema = {
    properties: {
        time: {
            type: "integer",
        },
        value: {
            type: "number",
        },
    },
    type: "object",
};
