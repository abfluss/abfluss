/*!
 * Source https://github.com/abfluss/abfluss Package: util
 */

import { expect } from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import * as merger from './summary-merger';

describe('SummaryMerger', (): void => {
    describe('add', (): void => {
        let mergerInstance: merger.SummaryMerger;
        const testData: any = {
            test: 'data',
            testNum: 2,
        };
        beforeEach((): void => {
            mergerInstance = new merger.SummaryMerger();
        });
        describe('(*)', (): void => {
            let generateKeyStub: sinon.SinonStub;
            beforeEach((): void => {
                generateKeyStub = sinon.stub(mergerInstance, 'generateKey');
                generateKeyStub.returns('asdf');
            });

            afterEach((): void => {
                // tslint:disable-next-line:no-unused-expression
                expect(generateKeyStub.alwaysCalledWithExactly(testData)).to.be.true;
                expect(generateKeyStub.callCount).to.equal(2);
                generateKeyStub.restore();
            });

            it('should throw error for duplicate', (): void => {
                generateKeyStub.onCall(1).returns('asdf');
                mergerInstance.add(testData);
                expect(mergerInstance.add.bind(mergerInstance, testData, false)).to.throw();
            });
            it('should not throw error', (): void => {
                generateKeyStub.onCall(1).returns('asdf2');
                mergerInstance.add(testData);
                expect(mergerInstance.add.bind(mergerInstance, testData)).to.not.throw();
            });
        });
        describe('(*,true|false)', (): void => {

            let generateKeyStub: sinon.SinonStub;
            beforeEach((): void => {
                generateKeyStub = sinon.stub(mergerInstance, 'generateKey');
                generateKeyStub.returns('asdf');
            });

            afterEach((): void => {
                expect(generateKeyStub.callCount).to.equal(2);
                generateKeyStub.restore();
            });

            describe('(*,false)', (): void => {
                it('should throw error for duplicate', (): void => {
                    generateKeyStub.onCall(1).returns('asdf');
                    mergerInstance.add(testData, false);
                    expect(mergerInstance.add.bind(mergerInstance, testData, false)).to.throw();
                });
                it('should not throw error', (): void => {
                    generateKeyStub.onCall(1).returns('asdf2');
                    mergerInstance.add(testData, false);
                    expect(mergerInstance.add.bind(mergerInstance, testData, false)).to.not.throw();
                });
            });
            describe('(*,true)', (): void => {
                it('should throw error for duplicate', (): void => {
                    generateKeyStub.onCall(1).returns('asdf');
                    mergerInstance.add(testData, true);
                    expect(mergerInstance.add.bind(mergerInstance, testData, true)).to.not.throw();
                });
                it('should not throw error', (): void => {
                    generateKeyStub.onCall(1).returns('asdf2');
                    mergerInstance.add(testData, true);
                    expect(mergerInstance.add.bind(mergerInstance, testData, true)).to.not.throw();
                });
            });
        });
    });
});
