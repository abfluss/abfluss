/*
 * Package @abfluss/api-client
 * Source https://abfluss.github.io/abfluss/
 */

import { IDaySummary, IHistoryItem, ISleepInterval, ISleepNearby, ISleepReport } from '@abfluss/api-types';
import { FlowDate } from '@abfluss/util';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import qs from 'qs';
import { CookieJar } from 'tough-cookie';
import { URL } from 'url';

export class FlowApiClient {
    private readonly cookieJar: CookieJar;
    private mUserAgent = 'Mozilla/5.0';
    private requestClient: AxiosInstance;
    constructor() {
        this.cookieJar = new CookieJar();
        this.requestClient = axios.create({
            headers: {
                accept: 'application/json',
                'user-agent': this.userAgent,
            },
        });
        axiosCookieJarSupport(this.requestClient);
        this.requestClient.defaults.jar = this.cookieJar;
    }

    public get jar(): CookieJar {
        return this.cookieJar;
    }

    public get userAgent(): string {
        return this.mUserAgent;
    }

    public set userAgent(useragent: string) {
        this.mUserAgent = useragent;
    }

    /**
     *
     * @param mail The mail used to login to flow.polar.com
     * @param password the password used to login to flow.polar.com
     */
    public async signin(mail: string, password: string): Promise<AxiosResponse<unknown>> {
        const data: { [key: string]: string } = {
            email: mail,
            password,
            returnUrl: '/',
        };
        return this.requestClient
            .post<unknown>('https://flow.polar.com/login', {
                data: qs.stringify(data),
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            })
            .catch((err: any): Promise<AxiosResponse<unknown>> => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (err && err.response && err.response.statusCode === 303) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    return Promise.resolve(err.response);
                }
                return Promise.reject(err);
            });
    }

    public getSleep(id: number | string): Promise<ISleepInterval[]> {
        const getSleepUrl: URL = this.createBaseUrl();
        getSleepUrl.pathname = `/api/sleep/${id}`;
        return this.get(getSleepUrl);
    }

    public getSleepNearby(date: FlowDate): Promise<ISleepNearby> {
        const url: URL = this.createBaseUrl();
        url.pathname = '/api/sleep/nights/nearby';
        url.searchParams.set('date', date.toString());
        return this.get(url);
    }

    public getSleepReport(from: FlowDate, to: FlowDate): Promise<ISleepReport[]> {
        return this.requestClient.get(`https://sleep.flow-prd.api.polar.com/api/sleep/report?from=${from.toString()}&to=${to.toString()}`);
    }
    public getHistory(from: FlowDate, to: FlowDate, userId: string, types?: number[]): Promise<IHistoryItem[]> {
        const url: URL = this.createBaseUrl();
        url.pathname = '/api/training/history';
        const reqBody: { [key: string]: number[] | string | undefined } = {
            fromDate: from.toString(),
            sportIds: types,
            toDate: to.toString(),
            userId,
        };
        return this.post(url, reqBody);
    }

    public createBaseUrl(): URL {
        return new URL('https://flow.polar.com/');
    }

    public getActivityTimelineForDay(date: FlowDate, sampleCount = 50000): Promise<IDaySummary> {
        const url: URL = this.createBaseUrl();
        url.pathname = '/api/activity-timeline/load';
        url.searchParams.set('day', date.toString());
        url.searchParams.set('maxSampleCount', sampleCount.toString(10));
        return this.get(url);
    }
    /**
     * Executes a get request
     * @param url url to query
     */
    public get<T>(queryUrl: URL): Promise<T> {
        return this.requestClient.get(queryUrl.toString());
    }
    /**
     * Executes a post request
     * @param url url to request
     * @param body body to send
     */
    public post<T, B>(queryUrl: URL, body: B): Promise<T> {
        return this.requestClient.post(queryUrl.toString(), {
            data: body,
        });
    }
}
