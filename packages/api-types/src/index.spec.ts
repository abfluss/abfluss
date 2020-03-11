/*!
 * Source https://github.com/donmahallem/FlowApiTypes
 */

import { expect } from "chai";
import "mocha";
import * as index from "./index";

describe("index", () => {
    it("should contain FlowApiValidator", () => {
        // tslint:disable-next-line:no-unused-expression
        expect(index.FlowApiValidator).to.exist;
    });
});
