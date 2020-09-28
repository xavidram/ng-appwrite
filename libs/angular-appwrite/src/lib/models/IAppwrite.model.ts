import { IAppwriteAccount } from './IAppwriteAccount.model';
import { IAppwriteAvatars } from './IAppwriteAvatars.model';
import { IAppwriteDatabase } from './IAppwriteDatabase.model';
import { IAppwriteStorage } from './IAppwriteStorage.model';
import { IAppwriteTeams } from './IAppwriteTeams.model';

export interface IAppwrite {
    account?: IAppwriteAccount;
    teams?: IAppwriteTeams;
    database?: IAppwriteDatabase;
    storage?: IAppwriteStorage;
    localization?: IAppwriteStorage;
    avatars?: IAppwriteAvatars;

    setEndpoint(endpoint: string): this;
    setProject(projectId: string): this;
    setLocale(locale: string): this;
    setKey(key: string): this;
    setMode(mode: string): this;
}