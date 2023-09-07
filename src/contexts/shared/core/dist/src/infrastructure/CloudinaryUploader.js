"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryUploader = void 0;
const cloudinary_1 = require("cloudinary");
const fs_1 = require("fs");
class CloudinaryUploader {
    constructor(cloudName, apiKey, apiSecret) {
        cloudinary_1.v2.config({
            cloud_name: cloudName,
            api_key: apiKey,
            api_secret: apiSecret,
        });
    }
    async upload(file) {
        const { public_id, url } = await cloudinary_1.v2.uploader.upload(file);
        (0, fs_1.unlinkSync)(file);
        return { remote_id: public_id, url };
    }
}
exports.CloudinaryUploader = CloudinaryUploader;
//# sourceMappingURL=CloudinaryUploader.js.map