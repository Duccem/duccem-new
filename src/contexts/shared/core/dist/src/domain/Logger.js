"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTypes = exports.FormatDates = exports.Decorator = exports.Color = exports.Logger = void 0;
class Logger {
    constructor(writeInFile = false) {
        this.writeInFile = writeInFile;
    }
}
exports.Logger = Logger;
var Color;
(function (Color) {
    Color["NULL"] = "\u001B[30m";
    Color["ERROR"] = "\u001B[31m";
    Color["SUCCESS"] = "\u001B[32m";
    Color["WARNING"] = "\u001B[33m";
    Color["INFO"] = "\u001B[34m";
    Color["SYSTEM"] = "\u001B[35m";
    Color["IMPORTANT"] = "\u001B[36m";
    Color["MESSAGE"] = "\u001B[37m";
})(Color || (exports.Color = Color = {}));
var Decorator;
(function (Decorator) {
    Decorator["RESET"] = "\u001B[0m";
    Decorator["BRIGHT"] = "\u001B[1m";
    Decorator["DIM"] = "\u001B[2m";
    Decorator["UNDERSCORE"] = "\u001B[4m";
    Decorator["BLINK"] = "\u001B[5m";
    Decorator["REVERSE"] = "\u001B[7m";
    Decorator["HIDDEN"] = "\u001B[8m";
})(Decorator || (exports.Decorator = Decorator = {}));
var FormatDates;
(function (FormatDates) {
    FormatDates["ISO"] = "yyyy-MM-dd HH:mm:ss.SSS";
    FormatDates["LARGE"] = "cccc, MMMM Do yyyy, h:mm:ss.SSS a";
    FormatDates["UTC"] = "dd, cccc MMM yyyy HH:mm:ss.SSS";
    FormatDates["CLF"] = "dd/MMM/yyyy:HH:mm:ss.SSS";
})(FormatDates || (exports.FormatDates = FormatDates = {}));
var LogTypes;
(function (LogTypes) {
    LogTypes["LOG"] = "[LOG]";
    LogTypes["ERROR"] = "[ERROR]";
    LogTypes["REQUEST"] = "[REQUEST]";
    LogTypes["RESPONSE"] = "[RESPONSE]";
    LogTypes["WARNING"] = "[WARNING]";
    LogTypes["INFO"] = "[INFO]";
})(LogTypes || (exports.LogTypes = LogTypes = {}));
//# sourceMappingURL=Logger.js.map