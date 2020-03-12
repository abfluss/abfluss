/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { FlowApiClient } from '@abfluss/api-client';
import { Arguments, MiddlewareFunction } from 'yargs';
export const createSigninMiddleware: (client: FlowApiClient) => MiddlewareFunction = (client: FlowApiClient): MiddlewareFunction => {
    return (argv: Arguments & { email: string, password: string }): Promise<Response> => {
        return client.signin(argv.email, argv.password).then((val: any): any => {
            console.log('JJ', val);
            return val;
        });
    };
};
