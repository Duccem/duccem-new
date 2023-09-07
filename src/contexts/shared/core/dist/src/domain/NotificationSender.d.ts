export type NotificationDevice = {
    _id: string;
    token: string;
};
export type NotificationPayload = {
    userId: string;
    devices: NotificationDevice[];
    title: string;
    body: string;
    data: any;
    actionUrl: string;
};
export declare abstract class NotificationSender {
    abstract SendPushNotification(payload: NotificationPayload): any;
}
//# sourceMappingURL=NotificationSender.d.ts.map