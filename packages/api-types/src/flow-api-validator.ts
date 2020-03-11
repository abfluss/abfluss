/*!
 * Source https://github.com/abfluss/abfluss Package: api-types
 */

import * as jsonschema from 'jsonschema';
import { DAY_SUMMARY_SCHEMA, IDaySummary } from './model';

export class FlowApiValidator {
    public static validateTimelineSummary(data: IDaySummary | any): jsonschema.ValidatorResult {
        const val: jsonschema.Validator = new jsonschema.Validator();
        val.addSchema(DAY_SUMMARY_SCHEMA);
        return val.validate(data, DAY_SUMMARY_SCHEMA);
    }

    public static validateTimelineSummaryPromise(data: IDaySummary | any): Promise<jsonschema.ValidatorResult> {
        return new Promise((resolve: (value: jsonschema.ValidatorResult) => void, reject: (err?: any) => void): void => {
            const result: jsonschema.ValidatorResult = FlowApiValidator.validateTimelineSummary(data);
            resolve(result);
        });
    }
}
