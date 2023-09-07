"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailSender = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const fs_1 = require("fs");
const handlebars_1 = require("handlebars");
const nodemailer_1 = require("nodemailer");
const path_1 = require("path");
const EmailSender_1 = require("../domain/EmailSender");
class MailSender extends EmailSender_1.EmailSender {
    constructor(fromEmail, username, password) {
        super();
        this.fromEmail = fromEmail;
        this.transporter = (0, nodemailer_1.createTransport)({
            service: 'gmail',
            auth: {
                user: username,
                pass: password,
            },
        });
    }
    async SendEmail(email, title, templateName, data = {}) {
        const source = (0, fs_1.readFileSync)((0, path_1.join)(process.cwd(), 'resources/templates', `${templateName}.hbs`), 'utf8');
        const template = (0, handlebars_1.compile)(source);
        const options = {
            from: `Ducen <${this.fromEmail}>`,
            to: email,
            subject: title,
            html: template({ ...data }),
        };
        await this.transporter.sendMail(options);
    }
}
exports.MailSender = MailSender;
//# sourceMappingURL=MailSender.js.map