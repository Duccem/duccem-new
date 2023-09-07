import { EmailSender } from '../domain/EmailSender';
export declare class MailSender extends EmailSender {
    private readonly fromEmail;
    private transporter;
    constructor(fromEmail: string, username: string, password: string);
    SendEmail(email: string, title: string, templateName: string, data?: {}): Promise<void>;
}
//# sourceMappingURL=MailSender.d.ts.map