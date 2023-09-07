import { ServiceAccount } from 'firebase-admin/app';
import { NotificationPayload, NotificationSender } from '../domain/NotificationSender';
export declare class FirebaseSender extends NotificationSender {
    private firebaseApp;
    constructor(serviceAccount: ServiceAccount);
    SendPushNotification({ actionUrl, data, title, body, devices, userId }: NotificationPayload): Promise<{
        body: string;
        title: string;
        data: any;
        user: string;
        devices: string[];
        type: string;
    }>;
}
//# sourceMappingURL=FirebaseSender.d.ts.map