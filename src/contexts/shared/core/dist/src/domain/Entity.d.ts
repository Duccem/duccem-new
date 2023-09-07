import { BaseObject } from './BaseObject';
import { Primitives } from './Types/Primitives';
import { Uuid } from './ValueObjects/generics/Uuid';
import { DateValueObject } from './ValueObjects/primitives/DateValueObject';
export declare abstract class Entity extends BaseObject {
    id?: Uuid;
    createdAt?: DateValueObject;
    updatedAt?: DateValueObject;
    constructor(data: Primitives<Entity>);
}
//# sourceMappingURL=Entity.d.ts.map