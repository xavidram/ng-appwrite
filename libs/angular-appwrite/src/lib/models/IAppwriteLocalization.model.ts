export interface IAppwriteLocalization {
    get(): Promise<any>;
    getCountries(): Promise<any>;
    getCountriesEU(): Promise<any>;
    getCountriesPhone(): Promise<any>;
    getContinents(): Promise<any>;
    getCurrencies(): Promise<any>;
}