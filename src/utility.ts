import * as _ from 'lodash';
import { Country, city, state } from "./models";
import * as countriesList from '../assets/json/country.json';
import * as statesList from '../assets/json/state.json';
import * as citiesList from '../assets/json/city.json';

const countries: Country[] = countriesList.data as any;
const states: state[] = statesList.data;
const cities: city[] = citiesList.data;

// 1. Get the count of countries
export function getCountOfCountries(): number {
  return countries.length;
}

// 2. Get a list of country names
export function getCountryNames(): string[] {
  return countries.map((country) => country.countryName);
}

// 3. Get a list of country codes
export function getCountryCodes(): string[] {
  return countries.map((country) => country.countryCode);
}

// 4. Get a list of capital cities
export function getCapitalCities(): string[] {
  return countries.map((country) => country.capital);
}

// 5. Get a list of languages spoken in all countries
export function getAllLanguages(): string[] {
  const languages: string[] = [];
  countries.forEach((country) => {
    languages.push(...country.languages);
  });
  return Array.from(new Set(languages));
}

// 6. Get a list of countries in a specific region
export function getCountriesInRegion(region: string): string[] {
  return countries
    .filter((country) => country.region === region)
    .map((country) => country.countryName);
}

// 7. Get the flag URL for a specific country code
export function getFlagUrl(countryCode: string): string | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.flags?.svg;
}

// 8. Get the dialing code for a specific country code
export function getDialingCode(countryCode: string) {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.callingCodes;
}

// 9. Get countries that share borders with a specific country
export function getCountriesSharingBorders(countryCode: string): string[] {
  const country = countries.find((c) => c.countryCode === countryCode);
  if (country) {
    return country.borders.map((border) => {
      const borderCountry = countries.find((c) => c.countryCode === border);
      return borderCountry?.countryName || border;
    });
  }
  return [];
}

// 10. Check if a country is landlocked
export function isCountryLandlocked(countryCode: string): boolean | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.isLandlocked;
}

// 11. Get the top-level domain for a specific country
export function getTopLevelDomain(countryCode: string): string | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.topLevelDomain;
}

// 12. Get the maps URLs for a specific country
export function getMapUrls(countryCode: string): { googleMaps: string; openStreetMaps: string } | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.maps;
}

// 13. Get the coat of arms URLs for a specific country
export function getCoatOfArmsUrls(countryCode: string): { png: string; svg: string } | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.coatOfArms;
}

// 14. Get the emoji for a specific country
export function getEmoji(countryCode: string): string | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.emoji;
}

// 15. Get the Unicode for a specific country
export function getUnicode(countryCode: string): string | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.unicode;
}

// 16. Get the alpha3 code for a specific country
export function getAlpha3Code(countryCode: string): string | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.alpha3;
}

// 17. Get the native names for a specific country
export function getNativeNames(countryCode: string): Record<string, string> | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.nativeName;
}

// 18. Get the area of a specific country
export function getCountryArea(countryCode: string): number | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.area;
}

// 19. Get the numeric code for a specific country
export function getNumericCode(countryCode: string): string | undefined {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.numericCode;
}

// 20. Get the currencies used in a specific country
export function getCountryCurrencies(countryCode: string) {
  const country = countries.find((c) => c.countryCode === countryCode);
  return country?.currencies;
}

// 21. Get the dialing code and flag URL for a specific country code
export function getDialingCodeAndFlagUrl(countryCode: string) {
  const country = countries.find((c) => c.countryCode === countryCode);
  return {
    dialingCode: country?.callingCodes,
    flagUrl: country?.flags?.svg,
    Code: country?.countryCode
  };
}

// 22. Get the dialing code and flag URL for all countries
export function getAllDialingCodeAndFlagUrl() {
  const country = countries.map((c) => {
    return {
      dialingCode: c?.callingCodes,
      flagUrl: c?.flags?.svg,
      Code: c?.countryCode
    };
  });
  return country;
}

// 23. Get a list of states for a specific country code
export function getStatesByCountryCode(countryCode: string): string[] | undefined {
  const country = countries.find(e => countryCode == e.countryCode);
  const state = states.filter((c) => Number(c.country_id) === country?.country_id);
  return state.map(e => e.name) || [];
}

// // 24. Get a list of states for a specific country name
// function getStatesByCountryName(countryName: string): string[] | undefined {
//   const country = countries.find((c) => c.countryName === countryName);
//   return country?.states || [];
// }

// // 25. Get a list of states for a specific dialing code
// function getStatesByDialingCode(dialingCode: string): string[] | undefined {
//   const country = countries.find((c) => c.callingCodes === dialingCode);
//   return country?.states || [];
// }

// // 26. Get a list of states for a specific alpha3 code
// function getStatesByAlpha3Code(alpha3Code: string): string[] | undefined {
//   const country = countries.find((c) => c.alpha3 === alpha3Code);
//   return country?.states || [];
// }

// // 27. Get a list of cities for a specific country code
// function getCitiesByCountryCode(countryCode: string): string[] | undefined {
//   const country = countries.find((c) => c.countryCode === countryCode);
//   return country?.cities || [];
// }

// // 28. Get a list of cities for a specific country name
// function getCitiesByCountryName(countryName: string): string[] | undefined {
//   const country = countries.find((c) => c.countryName === countryName);
//   return country?.cities || [];
// }

// // 29. Get a list of cities for a specific dialing code
// function getCitiesByDialingCode(dialingCode: string): string[] | undefined {
//   const country = countries.find((c) => c.callingCodes === dialingCode);
//   return country?.cities || [];
// }

// // 30. Get a list of cities for a specific alpha3 code
// function getCitiesByAlpha3Code(alpha3Code: string): string[] | undefined {
//   const country = countries.find((c) => c.alpha3 === alpha3Code);
//   return country?.cities || [];
// }

// // 31. Get a list of cities for a specific state in a country
// function getCitiesByState(countryCode: string, stateName: string): string[] | undefined {
//   const country = countries.find((c) => c.countryCode === countryCode);
//   if (country && country.states) {
//     const state = country.states.find((s) => s.name === stateName);
//     return state?.cities || [];
//   }
//   return undefined;
// }
