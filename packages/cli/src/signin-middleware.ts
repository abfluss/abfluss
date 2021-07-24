/*
 * Package @abfluss/cli
 * Source https://abfluss.github.io/abfluss/
 */

import { FlowApiClient } from '@abfluss/api-client';
import { Arguments, MiddlewareFunction } from 'yargs';
export const createSigninMiddleware: (client: FlowApiClient) => MiddlewareFunction = (client: FlowApiClient): MiddlewareFunction => {
    return (argv: Arguments & { email: string; password: string }): Promise<Response> => {
        console.log('Middleware called');
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */
        return client.signin(argv.email, argv.password).then((val: any): any => {
            console.log('JJ', val);
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
            return val;
        });
    };
};
