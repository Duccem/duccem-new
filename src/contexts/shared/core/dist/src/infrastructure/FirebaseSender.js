"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseSender = void 0;
const app_1 = require("firebase-admin/app");
const messaging_1 = require("firebase-admin/messaging");
const NotificationSender_1 = require("../domain/NotificationSender");
class FirebaseSender extends NotificationSender_1.NotificationSender {
    constructor(serviceAccount) {
        super();
        this.firebaseApp = (0, app_1.initializeApp)({
            credential: (0, app_1.cert)(serviceAccount),
        });
    }
    async SendPushNotification({ actionUrl = '', data = {}, title, body, devices, userId }) {
        const notification = {
            body,
            title,
            data,
            user: userId,
            devices: devices.map((device) => device._id),
            type: 'PUSH',
        };
        const tokens = devices.map((device) => device.token);
        await (0, messaging_1.getMessaging)(this.firebaseApp).sendToDevice(tokens, {
            notification: {
                title,
                body,
                clickAction: actionUrl,
            },
            data,
        });
        return notification;
    }
}
exports.FirebaseSender = FirebaseSender;
//# sourceMappingURL=FirebaseSender.js.map