export declare abstract class Logger {
    protected readonly writeInFile: boolean;
    constructor(writeInFile?: boolean);
    abstract log(message: any): void;
    abstract error(message: any): void;
    abstract warn(message: any): void;
    abstract debug(message: any): void;
    abstract verbose(message: any): void;
    abstract request(message: any): void;
    abstract response(message: any): void;
}
export declare enum Color {
    NULL = "\u001B[30m",
    ERROR = "\u001B[31m",
    SUCCESS = "\u001B[32m",
    WARNING = "\u001B[33m",
    INFO = "\u001B[34m",
    SYSTEM = "\u001B[35m",
    IMPORTANT = "\u001B[36m",
    MESSAGE = "\u001B[37m"
}
export declare enum Decorator {
    RESET = "\u001B[0m",
    BRIGHT = "\u001B[1m",
    DIM = "\u001B[2m",
    UNDERSCORE = "\u001B[4m",
    BLINK = "\u001B[5m",
    REVERSE = "\u001B[7m",
    HIDDEN = "\u001B[8m"
}
export declare enum FormatDates {
    ISO = "yyyy-MM-dd HH:mm:ss.SSS",
    LARGE = "cccc, MMMM Do yyyy, h:mm:ss.SSS a",
    UTC = "dd, cccc MMM yyyy HH:mm:ss.SSS",
    CLF = "dd/MMM/yyyy:HH:mm:ss.SSS"
}
export declare enum LogTypes {
    LOG = "[LOG]",
    ERROR = "[ERROR]",
    REQUEST = "[REQUEST]",
    RESPONSE = "[RESPONSE]",
    WARNING = "[WARNING]",
    INFO = "[INFO]"
}
//# sourceMappingURL=Logger.d.ts.map