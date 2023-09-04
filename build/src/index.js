"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCitiesByStateName = exports.getCitiesByAlpha3Code = exports.getCitiesByCountryName = exports.getCitiesByCountryCode = exports.getStatesByAlpha3Code = exports.getStatesByCountryName = exports.getStatesByCountryCode = exports.getAllDialingCodeAndFlagUrl = exports.getDialingCodeAndFlagUrl = exports.getCountryCurrencies = exports.getNumericCode = exports.getCountryArea = exports.getNativeNames = exports.getAlpha3Code = exports.getUnicode = exports.getEmoji = exports.getCoatOfArmsUrls = exports.getMapUrls = exports.getTopLevelDomain = exports.isCountryLandlocked = exports.getCountriesSharingBorders = exports.getDialingCode = exports.getFlagUrl = exports.getCountriesInRegion = exports.getAllLanguages = exports.getCapitalCities = exports.getCountryCodes = exports.getCountryNames = exports.getCountOfCountries = void 0;
const countriesList = __importStar(require("../assets/json/country.json"));
const statesList = __importStar(require("../assets/json/state.json"));
const citiesList = __importStar(require("../assets/json/city.json"));
const countries = countriesList.data;
const states = statesList.data;
const cities = citiesList.data;
// 1. Get the count of countries
function getCountOfCountries() {
    return countries.length;
}
exports.getCountOfCountries = getCountOfCountries;
// 2. Get a list of country names
function getCountryNames() {
    return countries.map((country) => country.countryName);
}
exports.getCountryNames = getCountryNames;
// 3. Get a list of country codes
function getCountryCodes() {
    return countries.map((country) => country.countryCode);
}
exports.getCountryCodes = getCountryCodes;
// 4. Get a list of capital cities
function getCapitalCities() {
    return countries.map((country) => country.capital);
}
exports.getCapitalCities = getCapitalCities;
// 5. Get a list of languages spoken in all countries
function getAllLanguages() {
    const languages = [];
    countries.forEach((country) => {
        languages.push(...country.languages);
    });
    return Array.from(new Set(languages));
}
exports.getAllLanguages = getAllLanguages;
// 6. Get a list of countries in a specific region
function getCountriesInRegion(region) {
    return countries
        .filter((country) => country.region === region)
        .map((country) => country.countryName);
}
exports.getCountriesInRegion = getCountriesInRegion;
// 7. Get the flag URL for a specific country code
function getFlagUrl(countryCode) {
    var _a;
    const country = countries.find((c) => c.countryCode === countryCode);
    return (_a = country === null || country === void 0 ? void 0 : country.flags) === null || _a === void 0 ? void 0 : _a.svg;
}
exports.getFlagUrl = getFlagUrl;
// 8. Get the dialing code for a specific country code
function getDialingCode(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.callingCodes;
}
exports.getDialingCode = getDialingCode;
// 9. Get countries that share borders with a specific country
function getCountriesSharingBorders(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    if (country) {
        return country.borders.map((border) => {
            const borderCountry = countries.find((c) => c.countryCode === border);
            return (borderCountry === null || borderCountry === void 0 ? void 0 : borderCountry.countryName) || border;
        });
    }
    return [];
}
exports.getCountriesSharingBorders = getCountriesSharingBorders;
// 10. Check if a country is landlocked
function isCountryLandlocked(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.isLandlocked;
}
exports.isCountryLandlocked = isCountryLandlocked;
// 11. Get the top-level domain for a specific country
function getTopLevelDomain(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.topLevelDomain;
}
exports.getTopLevelDomain = getTopLevelDomain;
// 12. Get the maps URLs for a specific country
function getMapUrls(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.maps;
}
exports.getMapUrls = getMapUrls;
// 13. Get the coat of arms URLs for a specific country
function getCoatOfArmsUrls(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.coatOfArms;
}
exports.getCoatOfArmsUrls = getCoatOfArmsUrls;
// 14. Get the emoji for a specific country
function getEmoji(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.emoji;
}
exports.getEmoji = getEmoji;
// 15. Get the Unicode for a specific country
function getUnicode(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.unicode;
}
exports.getUnicode = getUnicode;
// 16. Get the alpha3 code for a specific country
function getAlpha3Code(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.alpha3;
}
exports.getAlpha3Code = getAlpha3Code;
// 17. Get the native names for a specific country
function getNativeNames(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.nativeName;
}
exports.getNativeNames = getNativeNames;
// 18. Get the area of a specific country
function getCountryArea(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.area;
}
exports.getCountryArea = getCountryArea;
// 19. Get the numeric code for a specific country
function getNumericCode(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.numericCode;
}
exports.getNumericCode = getNumericCode;
// 20. Get the currencies used in a specific country
function getCountryCurrencies(countryCode) {
    const country = countries.find((c) => c.countryCode === countryCode);
    return country === null || country === void 0 ? void 0 : country.currencies;
}
exports.getCountryCurrencies = getCountryCurrencies;
// 21. Get the dialing code and flag URL for a specific country code
function getDialingCodeAndFlagUrl(countryCode) {
    var _a;
    const country = countries.find((c) => c.countryCode === countryCode);
    return {
        dialingCode: country === null || country === void 0 ? void 0 : country.callingCodes,
        flagUrl: (_a = country === null || country === void 0 ? void 0 : country.flags) === null || _a === void 0 ? void 0 : _a.svg,
        Code: country === null || country === void 0 ? void 0 : country.countryCode
    };
}
exports.getDialingCodeAndFlagUrl = getDialingCodeAndFlagUrl;
// 22. Get the dialing code and flag URL for all countries
function getAllDialingCodeAndFlagUrl() {
    const country = countries.map((c) => {
        var _a;
        return {
            dialingCode: c === null || c === void 0 ? void 0 : c.callingCodes,
            flagUrl: (_a = c === null || c === void 0 ? void 0 : c.flags) === null || _a === void 0 ? void 0 : _a.svg,
            Code: c === null || c === void 0 ? void 0 : c.countryCode
        };
    });
    return country;
}
exports.getAllDialingCodeAndFlagUrl = getAllDialingCodeAndFlagUrl;
// 23. Get a list of states for a specific country code
function getStatesByCountryCode(countryCode) {
    const country = countries.find(e => countryCode == e.countryCode);
    const state = states.filter((c) => Number(c.country_id) === (country === null || country === void 0 ? void 0 : country.country_id));
    return state.map(e => e.name) || [];
}
exports.getStatesByCountryCode = getStatesByCountryCode;
// 24. Get a list of states for a specific country name
function getStatesByCountryName(countryName) {
    const country = countries.find((c) => c.countryName === countryName);
    const state = states.filter((c) => Number(c.country_id) === (country === null || country === void 0 ? void 0 : country.country_id));
    return state.map(e => e.name) || [];
}
exports.getStatesByCountryName = getStatesByCountryName;
// 25. Get a list of states for a specific alpha3 code
function getStatesByAlpha3Code(alpha3Code) {
    const country = countries.find((c) => c.alpha3 === alpha3Code);
    const state = states.filter((c) => Number(c.country_id) === (country === null || country === void 0 ? void 0 : country.country_id));
    return state.map(e => e.name) || [];
}
exports.getStatesByAlpha3Code = getStatesByAlpha3Code;
// 26. Get a list of cities for a specific country code
function getCitiesByCountryCode(countryCode) {
    var _a;
    const country = countries.find((c) => c.countryCode === countryCode);
    const state_ID = (_a = states.find((c) => Number(c.country_id) === (country === null || country === void 0 ? void 0 : country.country_id))) === null || _a === void 0 ? void 0 : _a.id;
    const city = !!state_ID ? cities.filter((c) => Number(state_ID) === (country === null || country === void 0 ? void 0 : country.country_id)) : [];
    return (city === null || city === void 0 ? void 0 : city.map((e) => e.name)) || [];
}
exports.getCitiesByCountryCode = getCitiesByCountryCode;
// 28. Get a list of cities for a specific country name
function getCitiesByCountryName(countryName) {
    var _a;
    const country = countries.find((c) => c.countryName === countryName);
    const state_ID = (_a = states.find((c) => Number(c.country_id) === (country === null || country === void 0 ? void 0 : country.country_id))) === null || _a === void 0 ? void 0 : _a.id;
    const city = !!state_ID ? cities.filter((c) => Number(state_ID) === (country === null || country === void 0 ? void 0 : country.country_id)) : [];
    return (city === null || city === void 0 ? void 0 : city.map((e) => e.name)) || [];
}
exports.getCitiesByCountryName = getCitiesByCountryName;
// 29. Get a list of cities for a specific alpha3 code
function getCitiesByAlpha3Code(alpha3Code) {
    var _a;
    const country = countries.find((c) => c.alpha3 === alpha3Code);
    const state_ID = (_a = states.find((c) => Number(c.country_id) === (country === null || country === void 0 ? void 0 : country.country_id))) === null || _a === void 0 ? void 0 : _a.id;
    const city = !!state_ID ? cities.filter((c) => Number(state_ID) === (country === null || country === void 0 ? void 0 : country.country_id)) : [];
    return (city === null || city === void 0 ? void 0 : city.map((e) => e.name)) || [];
}
exports.getCitiesByAlpha3Code = getCitiesByAlpha3Code;
// 30. Get a list of cities for a specific state in a country
function getCitiesByStateName(stateName) {
    var _a;
    const state_ID = (_a = states.find((c) => c.name == stateName)) === null || _a === void 0 ? void 0 : _a.id;
    const city = !!state_ID ? cities.filter((c) => state_ID === c.state_id) : [];
    return (city === null || city === void 0 ? void 0 : city.map((e) => e.name)) || [];
}
exports.getCitiesByStateName = getCitiesByStateName;
