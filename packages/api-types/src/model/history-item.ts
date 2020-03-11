/*!
 * Source https://github.com/abfluss/abfluss Package: api-types
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
    swimDistance?: any;
    swimmingPoolUnits: string;
    swimmingSport: boolean;
    trainingLoadHtml?: string;
    trainingLoadProHtml: number;
}
