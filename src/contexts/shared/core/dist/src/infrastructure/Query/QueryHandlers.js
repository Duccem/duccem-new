"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHandlers = void 0;
const InternalError_1 = require("../../domain/Errors/InternalError");
class QueryHandlers extends Map {
    constructor(queryHandlers) {
        super();
        queryHandlers.forEach((queryHandler) => {
            this.set(queryHandler.subscribedTo(), queryHandler);
        });
    }
    get(query) {
        const queryHandler = super.get(query.constructor);
        if (!queryHandler) {
            throw new InternalError_1.InternalError(`The query <${query.constructor.name}> hasn't a query handler associated`);
        }
        return queryHandler;
    }
}
exports.QueryHandlers = QueryHandlers;
//# sourceMappingURL=QueryHandlers.js.map