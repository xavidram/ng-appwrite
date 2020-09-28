export interface IAppwriteTeams {
    create(name: string, roles?: string[]): Promise<any>;
    list(search?: string, limit?: number, offiset?: number, orderType?: string): Promise<any[]>;
    get(teamId: string): Promise<any>;
    update(teamId: string, name: string): Promise<any>;
    delete(teamId: string): Promise<any>;
    createMembership(teamId: string, email: string, roles: string[], url: string, name?: string): Promise<any>;
    getMemberships(teamId: string): Promise<any>;
    updateMembership(teamId: string, inviteId: string, userId: string, secret: string): Promise<any>;
    deleteMembership(teamId: string, inviteId: string): Promise<any>;
}