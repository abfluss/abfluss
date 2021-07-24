/*
 * Package @abfluss/api-types
 * Source https://abfluss.github.io/abfluss/
 */

export interface IHistoryItem {
    calories: number;
    distance: number;
    duration: number;
    hasTrainingTarget: boolean;
    hrAvg: number;
    iconUrl: string;
    id: number;
    note: string;
    recoveryTime: number;
    sportId: number;
    sportName: string;
    startDate: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    swimDistance?: any;
    swimmingPoolUnits: string;
    swimmingSport: boolean;
    trainingLoadHtml?: string;
    trainingLoadProHtml: number;
}
