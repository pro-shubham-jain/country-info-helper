export declare function getCountOfCountries(): number;
export declare function getCountryNames(): string[];
export declare function getCountryCodes(): string[];
export declare function getCapitalCities(): string[];
export declare function getAllLanguages(): string[];
export declare function getCountriesInRegion(region: string): string[];
export declare function getFlagUrl(countryCode: string): string | undefined;
export declare function getDialingCode(countryCode: string): string[] | undefined;
export declare function getCountriesSharingBorders(countryCode: string): string[];
export declare function isCountryLandlocked(countryCode: string): boolean | undefined;
export declare function getTopLevelDomain(countryCode: string): string | undefined;
export declare function getMapUrls(countryCode: string): {
    googleMaps: string;
    openStreetMaps: string;
} | undefined;
export declare function getCoatOfArmsUrls(countryCode: string): {
    png: string;
    svg: string;
} | undefined;
export declare function getEmoji(countryCode: string): string | undefined;
export declare function getUnicode(countryCode: string): string | undefined;
export declare function getAlpha3Code(countryCode: string): string | undefined;
export declare function getNativeNames(countryCode: string): Record<string, string> | undefined;
export declare function getCountryArea(countryCode: string): number | undefined;
export declare function getNumericCode(countryCode: string): string | undefined;
export declare function getCountryCurrencies(countryCode: string): import("./models").Currency[] | undefined;
export declare function getDialingCodeAndFlagUrl(countryCode: string): {
    dialingCode: string[] | undefined;
    flagUrl: string | undefined;
    Code: string | undefined;
};
export declare function getAllDialingCodeAndFlagUrl(): {
    dialingCode: string[];
    flagUrl: string;
    Code: string;
}[];
export declare function getStatesByCountryCode(countryCode: string): string[] | undefined;
export declare function getStatesByCountryName(countryName: string): string[] | undefined;
export declare function getStatesByAlpha3Code(alpha3Code: string): string[] | undefined;
export declare function getCitiesByCountryCode(countryCode: string): string[] | undefined;
export declare function getCitiesByCountryName(countryName: string): string[] | undefined;
export declare function getCitiesByAlpha3Code(alpha3Code: string): string[] | undefined;
export declare function getCitiesByStateName(stateName: string): string[] | undefined;
