/*
 * Package @abfluss/util
 * Source https://abfluss.github.io/abfluss/
 */

import { expect } from 'chai';
import 'mocha';
import * as testObject from './flow-date';
interface ITestDay {
    from: testObject.FlowDate;
    to: testObject.FlowDate;
    date: Date;
    str: string;
    day: number;
    month: number;
    year: number;
}
const testDays: ITestDay[] = [
    {
        date: new Date(1929, 0, 1),
        day: 1,
        from: new testObject.FlowDate(1929, 1, 1),
        month: 1,
        str: '1929-01-01',
        to: new testObject.FlowDate(1929, 1, 2),
        year: 1929,
    },
    {
        date: new Date(2001, 1, 28),
        day: 28,
        from: new testObject.FlowDate(2001, 2, 28),
        month: 2,
        str: '2001-02-28',
        to: new testObject.FlowDate(2001, 3, 1),
        year: 2001,
    },
    {
        date: new Date(2000, 1, 28),
        day: 28,
        from: new testObject.FlowDate(2000, 2, 28),
        month: 2,
        str: '2000-02-28',
        to: new testObject.FlowDate(2000, 2, 29),
        year: 2000,
    },
    {
        date: new Date(2011, 11, 31),
        day: 31,
        from: new testObject.FlowDate(2011, 12, 31),
        month: 12,
        str: '2011-12-31',
        to: new testObject.FlowDate(2012, 1, 1),
        year: 2011,
    },
    {
        date: new Date(2049, 10, 30),
        day: 30,
        from: new testObject.FlowDate(2049, 11, 30),
        month: 11,
        str: '2049-11-30',
        to: new testObject.FlowDate(2049, 12, 1),
        year: 2049,
    },
];
describe('flow-date.ts', (): void => {
    describe('static method', (): void => {
        describe('fromString()', (): void => {
            testDays.forEach((testDate: ITestDay): void => {
                it('it should parse correctly', (): void => {
                    const tDate: testObject.FlowDate = testObject.FlowDate.fromString(testDate.str);
                    expect(tDate.day).to.equal(testDate.day);
                    expect(tDate.month).to.equal(testDate.month);
                    expect(tDate.year).to.equal(testDate.year);
                });
            });
        });
        describe('toDateArray(FlowDate,FlowDate)', (): void => {
            const date1: testObject.FlowDate = new testObject.FlowDate(2019, 2, 24);
            const date2: testObject.FlowDate = new testObject.FlowDate(2019, 3, 2);
            const resultDates: testObject.FlowDate[] = [
                new testObject.FlowDate(2019, 2, 24),
                new testObject.FlowDate(2019, 2, 25),
                new testObject.FlowDate(2019, 2, 26),
                new testObject.FlowDate(2019, 2, 27),
                new testObject.FlowDate(2019, 2, 28),
                new testObject.FlowDate(2019, 3, 1),
                new testObject.FlowDate(2019, 3, 2),
            ];
            it('should work for dates forwards', (): void => {
                const result: testObject.FlowDate[] = testObject.FlowDate.toDateArray(date1, date2);
                expect(result).to.contain.deep.equal(resultDates);
            });
            it('should work for dates backwards', (): void => {
                const result: testObject.FlowDate[] = testObject.FlowDate.toDateArray(date2, date1);
                expect(result).to.contain.deep.equal(resultDates.reverse());
            });
            it('should work for equal dates', (): void => {
                const result: testObject.FlowDate[] = testObject.FlowDate.toDateArray(date1, date1);
                expect(result).to.contain.deep.equal([date1]);
            });
        });
    });
    describe('class methods', (): void => {
        describe('get date', (): void => {
            testDays.forEach((testDate: ITestDay): void => {
                it(`should parse ${testDate.date.toString()} from ${testDate.from.toString()}`, (): void => {
                    expect(testDate.from.date.getTime()).to.equal(testDate.date.getTime());
                });
            });
        });
        describe('nextDay()', (): void => {
            testDays.forEach((testDate: ITestDay): void => {
                it(`it should skip correctly from ${testDate.from.toString()}` + ` to ${testDate.to.toString()}`, (): void => {
                    const calculatedDate: testObject.FlowDate = testDate.from.nextDay();
                    expect(calculatedDate.day).to.equal(testDate.to.day);
                    expect(calculatedDate.month).to.equal(testDate.to.month);
                    expect(calculatedDate.year).to.equal(testDate.to.year);
                });
            });
        });
        describe('previousDay()', (): void => {
            testDays.forEach((testDate: ITestDay): void => {
                it(`it should skip correctly from ${testDate.from.toString()}` + ` to ${testDate.to.toString()}`, (): void => {
                    const calculatedDate: testObject.FlowDate = testDate.to.previousDay();
                    expect(calculatedDate.day).to.equal(testDate.from.day);
                    expect(calculatedDate.month).to.equal(testDate.from.month);
                    expect(calculatedDate.year).to.equal(testDate.from.year);
                });
            });
        });
        describe('toString()', (): void => {
            testDays.forEach((testDate: ITestDay): void => {
                it(`should format ${testDate.date.toString()} to ${testDate.str}`, (): void => {
                    expect(testDate.from.toString()).to.equal(testDate.str);
                });
            });
        });
    });
});
