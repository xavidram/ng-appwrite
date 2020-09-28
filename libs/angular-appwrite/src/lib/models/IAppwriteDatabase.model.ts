export interface IAppwriteDatabase {
    createDocument(collectionId: string, data: any, read: string[], write: string[], parentDocument?: string, parentProperty?: string, parentPropertyType?: string): Promise<any>;
    listDocuments(collectionId: string, filters?: string[], offset?: number, limit?: number, orderField?: string, orderType?: string, orderCase?: string, search?: string, first?: number, last?: number): Promise<any>;
    getDocument(collectionId: string, documentId: string): Promise<any>;
    updatedocument(collectionId: string, documentId: string, data: any, read: string[], write: string[]): Promise<any>;
    deleteDocument(collectionId: string, documentId: string): Promise<any>;
}