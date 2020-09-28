export interface IAppwriteAvatars {
    getCreeditCard(code: string, width?: number, height?: number, quality?: number): Promise<any>;
    getBrowser(code: string, width?: number, height?: number, quality?: number): Promise<any>;
    getFlag(code: string, width?: number, height?: number, quality?: number): Promise<any>;
    getImage(url: string, width?: number, height?: number): Promise<any>;
    getFavicon(url: string): Promise<any>;
    getQR(text: string, size?: number, margin?: number, download?: number): Promise<any>;
}