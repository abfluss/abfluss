/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import * as jsonschema from "jsonschema";
import { DaySummarySchema, IDaySummary } from "./model";

export class FlowApiValidator {
    public static validateTimelineSummary(data: IDaySummary | any): jsonschema.ValidatorResult {
        const val: jsonschema.Validator = new jsonschema.Validator();
        val.addSchema(DaySummarySchema);
        return val.validate(data, DaySummarySchema);
    }

    public static validateTimelineSummaryPromise(data: IDaySummary | any): Promise<jsonschema.ValidatorResult> {
        return new Promise((resolve, reject) => {
            const result: jsonschema.ValidatorResult = FlowApiValidator.validateTimelineSummary(data);
            resolve(result);
        });
    }
}
