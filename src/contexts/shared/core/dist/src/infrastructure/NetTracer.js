"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetTracer = void 0;
const Logger_1 = require("../domain/Logger");
class NetTracer {
    static method(request) {
        let methodString = request.method;
        switch (methodString) {
            case 'GET':
                methodString = Logger_1.Color.SUCCESS + methodString + Logger_1.Decorator.RESET;
                break;
            case 'POST':
                methodString = Logger_1.Color.WARNING + methodString + Logger_1.Decorator.RESET;
                break;
            case 'PUT':
                methodString = Logger_1.Color.IMPORTANT + methodString + Logger_1.Decorator.RESET;
                break;
            case 'DELETE':
                methodString = Logger_1.Color.ERROR + methodString + Logger_1.Decorator.RESET;
                break;
            default:
                break;
        }
        return methodString;
    }
    static httpVersion(request) {
        const httpVersionString = request.httpVersion;
        return httpVersionString;
    }
    static url(request) {
        let urlString = request.originalUrl;
        urlString = Logger_1.Color.INFO + urlString + Logger_1.Decorator.RESET;
        return urlString;
    }
    static ip(request) {
        const ip = request.ip;
        const formattedIp = Logger_1.Color.SUCCESS + ip + Logger_1.Decorator.RESET;
        return formattedIp;
    }
    static status(response) {
        let statusString = new String(response.statusCode || '-');
        switch (statusString[0]) {
            case '2':
                statusString = Logger_1.Color.SUCCESS + statusString + Logger_1.Decorator.RESET;
                break;
            case '3':
                statusString = Logger_1.Color.INFO + statusString + Logger_1.Decorator.RESET;
                break;
            case '4':
                statusString = Logger_1.Color.WARNING + statusString + Logger_1.Decorator.RESET;
                break;
            case '5':
                statusString = Logger_1.Color.ERROR + statusString + Logger_1.Decorator.RESET;
                break;
        }
        return statusString.toString();
    }
    static responseTime(digits, request, response) {
        digits = digits || 3;
        if (!response._startTime)
            response._startTime = process.hrtime();
        const elapsedTimeInMs = ((response._startTime[0] - request._startTime[0]) * 1e3 + (response._startTime[1] - request._startTime[1]) / 1e6).toFixed(digits);
        return elapsedTimeInMs;
    }
    static lengthResponse(response) {
        const length = response.get('content-length') || '-';
        return length;
    }
    static Request(request, logger) {
        const method = this.method(request);
        const httpVersion = this.httpVersion(request);
        const url = this.url(request);
        const ip = this.ip(request);
        const log = `Requested ${method} ${httpVersion} ${url} from ${ip}`;
        logger.request(log);
    }
    static Response(request, response, logger) {
        const time = this.responseTime(3, request, response);
        const url = this.url(request);
        const status = this.status(response);
        const length = this.lengthResponse(response);
        const ip = this.ip(request);
        const log = `Responded to ${url} requested by ${ip} with status ${status} (${length}) bytes in ${time} miliseconds`;
        logger.response(log);
    }
}
exports.NetTracer = NetTracer;
//# sourceMappingURL=NetTracer.js.map