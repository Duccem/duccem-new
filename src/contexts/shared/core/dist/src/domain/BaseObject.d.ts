export declare abstract class BaseObject {
    abstract toPrimitives(): any;
    withOutNulls(): {
        [k: string]: unknown;
    };
    static toArray(entities: any[]): Array<any>;
}
//# sourceMappingURL=BaseObject.d.ts.map