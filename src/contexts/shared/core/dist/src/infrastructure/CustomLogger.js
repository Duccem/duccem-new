"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const date_fns_1 = require("date-fns");
const fs_1 = require("fs");
const path_1 = require("path");
const Logger_1 = require("../domain/Logger");
class CustomLogger extends Logger_1.Logger {
    log(message) {
        this.print(message, Logger_1.Color.SUCCESS, Logger_1.LogTypes.LOG);
    }
    error(message, stack) {
        this.print(message, Logger_1.Color.ERROR, Logger_1.LogTypes.ERROR);
        this.print(stack, Logger_1.Color.ERROR, Logger_1.LogTypes.ERROR);
    }
    warn(message) {
        this.print(message, Logger_1.Color.WARNING, Logger_1.LogTypes.WARNING);
    }
    debug(message) {
        this.print(message, Logger_1.Color.INFO, Logger_1.LogTypes.INFO);
    }
    verbose(message) {
        this.print(message, Logger_1.Color.INFO, Logger_1.LogTypes.INFO);
    }
    request(message) {
        this.print(message, Logger_1.Color.IMPORTANT, Logger_1.LogTypes.REQUEST);
    }
    response(message) {
        this.print(message, Logger_1.Color.SUCCESS, Logger_1.LogTypes.RESPONSE);
    }
    writeLog(message) {
        const dateFile = (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd');
        const file = (0, fs_1.createWriteStream)((0, path_1.join)(process.cwd(), `logs/${dateFile}.log`), { flags: 'a' });
        file.write(message + '\n');
    }
    color(message, color) {
        return color + message + Logger_1.Decorator.RESET;
    }
    date() {
        const current = new Date();
        return (0, date_fns_1.format)(current, Logger_1.FormatDates.ISO);
    }
    print(message, color, type) {
        const tailMessage = `${type} ${this.date()}`;
        const logMessage = `${this.color(tailMessage, color)} ${message}`;
        console.log(logMessage);
        if (this.writeInFile)
            this.writeLog(this.sanitize(logMessage));
    }
    sanitize(message) {
        for (const color of Object.values(Logger_1.Color)) {
            message = message.split(color).join('');
        }
        for (const decorator of Object.values(Logger_1.Decorator)) {
            message = message.split(decorator).join('');
        }
        return message;
    }
}
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=CustomLogger.js.map