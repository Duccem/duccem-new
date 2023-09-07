import { Uploader, UploaderResponse } from '../domain/Uploader';
export declare class CloudinaryUploader implements Uploader {
    constructor(cloudName: string, apiKey: string, apiSecret: string);
    upload(file: string): Promise<UploaderResponse>;
}
//# sourceMappingURL=CloudinaryUploader.d.ts.map