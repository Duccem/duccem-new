"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseObject = void 0;
class BaseObject {
    withOutNulls() {
        return Object.fromEntries(Object.entries(this.toPrimitives()).filter(([_, v]) => v != null));
    }
    static toArray(entities) {
        return entities.map((e) => e.toPrimitives());
    }
}
exports.BaseObject = BaseObject;
//# sourceMappingURL=BaseObject.js.map