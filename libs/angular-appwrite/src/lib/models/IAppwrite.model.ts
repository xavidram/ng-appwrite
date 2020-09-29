export interface IAppwriteClient {
    setEndpoint(endpoint: string): this;
    setProject(projectId: string): this;
    setLocale(locale: string): this;
    setKey(key: string): this;
    setMode(mode: string): this;
}

export class IAppwriteService {
    client: IAppwriteClient;
}