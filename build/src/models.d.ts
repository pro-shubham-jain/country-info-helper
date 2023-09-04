export interface Country {
    country_id: number;
    countryCode: string;
    alpha2?: string;
    alpha3?: string;
    countryName: string;
    nativeName: {
        [key: string]: string;
    };
    capital: string;
    population?: number;
    area: number;
    region: string;
    subregion: string;
    languages: string[];
    currencieCode: string;
    currencies?: Currency[];
    demonym: string;
    callingCodes: string[];
    timezones: string[];
    topLevelDomain: string;
    borders: string[];
    alternativeSpellings: string[];
    numericCode: string;
    latlng: [number, number];
    gini?: number;
    regionalBlocs?: RegionalBloc[];
    isLandlocked: boolean;
    emoji?: string;
    unicode?: string;
    coatOfArms: CoatOfArms;
    flags: Flags;
    continents: string[];
    altSpellings: string[];
    maps: Maps;
    images?: {
        png: string;
        svg: string;
    };
}
export interface Language {
    name?: string;
    iso639_1?: string;
    iso639_2?: string;
}
export interface Currency {
    name?: string;
    code?: string;
    symbol?: string;
}
export interface RegionalBloc {
    name?: string;
    acronym: string;
    otherNames: string[];
}
export interface Flags {
    png: string;
    svg: string;
    alt: string;
}
export interface CoatOfArms {
    png: string;
    svg: string;
}
export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}
export interface state {
    id: string;
    name: string;
    country_id: string;
}
export interface city {
    state_id: string;
    id: string;
    name: string;
}
