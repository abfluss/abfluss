/*!
 * Source https://github.com/abfluss/abfluss Package: api-types
 */

import { expect } from 'chai';
import 'mocha';
import * as index from './index';

describe('index', (): void => {
    it('should contain FlowApiValidator', (): void => {
        // tslint:disable-next-line:no-unused-expression
        expect(index.ACTIVITY_GRAPH_DATA_SCHEMA).to.exist;
    });
});
