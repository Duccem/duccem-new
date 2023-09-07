export declare abstract class Uploader {
    abstract upload(file: string): Promise<UploaderResponse>;
}
export type UploaderResponse = {
    remote_id: string;
    url: string;
};
//# sourceMappingURL=Uploader.d.ts.map