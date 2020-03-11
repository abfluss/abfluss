/*!
 * Source https://github.com/abfluss/abfluss Package: api-types
 */

import { expect } from 'chai';
import * as jsonschema from 'jsonschema';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';
import * as sinon from 'sinon';
import * as flowApiValidator from './flow-api-validator';
import { DAY_SUMMARY_SCHEMA } from './model';

describe('FlowApiValidator', (): void => {
    describe('validateTimelineSummaryPromise()', (): void => {
        let stub1: sinon.SinonStub;
        const testObj: any = {
            test: 1,
            test2: 'asdf',
        };
        const testData: any = {
            test: '2135135',
            test2: 'asdf',
        };
        before((): void => {
            stub1 = sinon.stub(flowApiValidator.FlowApiValidator, 'validateTimelineSummary').returns(testObj);
        });
        after((): void => {
            stub1.restore();
        });
        it('should returnvalidateTimelineSummary hello world', (): Promise<void> =>
            flowApiValidator.FlowApiValidator.validateTimelineSummaryPromise(testData)
                .then((data: jsonschema.ValidatorResult): void => {
                    expect(testObj).to.deep.equal(data);
                    expect(stub1.callCount).to.equal(1);
                    expect(stub1.getCall(0).args).to.deep.equal([testData]);
                }));
    });
    describe('validateTimelineSummary()', (): void => {
        let stub1: sinon.SinonStub;
        let stubInstance: sinon.SinonStubbedInstance<jsonschema.Validator>;
        const testObj: any = {
            test: 1,
            test2: 'asdf',
        };
        before((): void => {
            stubInstance = sinon.createStubInstance(jsonschema.Validator);
            stubInstance.validate.returns(false as any);
            stub1 = sinon.stub(jsonschema, 'Validator').returns(stubInstance);
        });
        after((): void => {
            stub1.restore();
        });
        it('should returnvalidateTimelineSummary hello world', (): void => {
            expect(flowApiValidator.FlowApiValidator.validateTimelineSummary(testObj))
                .to.equal(false, 'Must return false');
            expect(stub1.callCount).to.equal(1);
            expect(stubInstance.addSchema.callCount).to.equal(1);
            expect(stubInstance.addSchema.getCall(0).args.length).to.equal(1);
            expect(stubInstance.addSchema.getCall(0).args[0]).to.deep.equal(DAY_SUMMARY_SCHEMA);
            expect(stubInstance.validate.callCount).to.equal(1);
            expect(stubInstance.validate.getCall(0).args).to.deep.equal([testObj, DAY_SUMMARY_SCHEMA]);
        });
    });
});
