export interface IAppwriteStorage {
    createFile(file: any, read: string[], write: string[]): Promise<any>;
    listFiles(search?: string, limit?: number, offset?: number, orderType?: string): Promise<any>;
    getFile(fileId: string): Promise<any>;
    getFilePreview(fileId: string, width?: number, height?: number, quality?: number, background?: string, output?: string): Promise<any>;
    getFileDownload(fileId: string): Promise<any>;
    getFileView(fileId: string, as?: string): Promise<any>;
    updateFile(fileId: string, read: string, write: string): Promise<any>;
    deleteFile(fileId: string): Promise<any>;
}