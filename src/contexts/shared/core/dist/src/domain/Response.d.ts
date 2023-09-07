export declare abstract class Response {
    readonly code: number;
    readonly message: string;
    constructor(message: string, code: number);
    getCode(): number;
    getMessage(): string;
    abstract formatResponse(): any;
}
//# sourceMappingURL=Response.d.ts.map