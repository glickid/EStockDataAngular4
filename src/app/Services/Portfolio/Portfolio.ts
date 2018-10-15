import { alert } from '../Alerts/Alert';

export interface portfolio {
    name: string,
    symbol: string,
    pprice: number,
    pdate: string,
    cprice: number,
    dvolume: number,
    dopen: number,
    dayChange: string,
    overallProfit: number,
    alertsArr: alert[]
}