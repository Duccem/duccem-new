"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const BaseObject_1 = require("./BaseObject");
const Uuid_1 = require("./ValueObjects/generics/Uuid");
const DateValueObject_1 = require("./ValueObjects/primitives/DateValueObject");
class Entity extends BaseObject_1.BaseObject {
    constructor(data) {
        super();
        this.id = data.id ? new Uuid_1.Uuid(data.id) : Uuid_1.Uuid.random();
        this.createdAt = data.createdAt ? new DateValueObject_1.DateValueObject(data.createdAt) : DateValueObject_1.DateValueObject.today();
        this.updatedAt = data.updatedAt ? new DateValueObject_1.DateValueObject(data.createdAt) : null;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map