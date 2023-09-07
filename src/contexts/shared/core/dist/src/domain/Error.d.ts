export declare abstract class Error {
    protected readonly message: string;
    protected readonly code: number;
    protected readonly timestamp: string;
    constructor(message: string, code: number);
    getCode(): number;
    getMessage(): string;
}
//# sourceMappingURL=Error.d.ts.map