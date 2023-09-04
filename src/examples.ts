import {
  getCountOfCountries,
  getCountryNames,
  getCountryCodes,
  getCapitalCities,
  getAllLanguages,
  getCountriesInRegion,
  getFlagUrl,
  getDialingCode,
  getCountriesSharingBorders,
  isCountryLandlocked,
  getTopLevelDomain,
  getMapUrls,
  getCoatOfArmsUrls,
  getEmoji,
  getUnicode,
  getAlpha3Code,
  getNativeNames,
  getCountryArea,
  getNumericCode,
  getCountryCurrencies,
  getDialingCodeAndFlagUrl,
  getAllDialingCodeAndFlagUrl,
  getStatesByCountryCode,
  getStatesByCountryName,
  getStatesByAlpha3Code,
  getCitiesByCountryCode,
  getCitiesByCountryName,
  getCitiesByAlpha3Code,
  getCitiesByStateName
} from './utility';

const count = getCountOfCountries();
console.log(`Total countries: ${count}`);

const names = getCountryNames();
console.log(`Country names: ${names.join(', ')}`);

const codes = getCountryCodes();
console.log(`Country codes: ${codes.join(', ')}`);

const capitals = getCapitalCities();
console.log(`Capital cities: ${capitals.join(', ')}`);

const languages = getAllLanguages();
console.log(`Languages spoken: ${languages.join(', ')}`);

const regionCountries = getCountriesInRegion('Europe');
console.log(`Countries in Europe: ${regionCountries.join(', ')}`);

const flagUrl = getFlagUrl('US');
console.log(`Flag URL for US: ${flagUrl}`);

const dialingCode = getDialingCode('FR');
console.log(`Dialing code for France: ${dialingCode}`);

const borderingCountries = getCountriesSharingBorders('CA');
console.log(`Countries sharing borders with Canada: ${borderingCountries.join(', ')}`);

const isLandlocked = isCountryLandlocked('AT');
console.log(`Is Austria landlocked? ${isLandlocked}`);

const topLevelDomain = getTopLevelDomain('JP');
console.log(`Top-level domain for Japan: ${topLevelDomain}`);

const mapUrls = getMapUrls('AU') as any;
console.log(`Google Maps URL: ${mapUrls.googleMaps}`);
console.log(`OpenStreetMaps URL: ${mapUrls.openStreetMaps}`);

const coatOfArmsUrls = getCoatOfArmsUrls('BR') as any;
console.log(`PNG Coat of Arms URL: ${coatOfArmsUrls.png}`);
console.log(`SVG Coat of Arms URL: ${coatOfArmsUrls.svg}`);

const emoji = getEmoji('DE');
console.log(`Emoji for Germany: ${emoji}`);

const unicode = getUnicode('IT');
console.log(`Unicode for Italy: ${unicode}`);

const alpha3Code = getAlpha3Code('CN');
console.log(`Alpha3 code for China: ${alpha3Code}`);

const nativeNames = getNativeNames('ES');
console.log(`Native names for Spain:`, nativeNames);

const area = getCountryArea('RU');
console.log(`Area of Russia: ${area} square kilometers`);

const numericCode = getNumericCode('IN');
console.log(`Numeric code for India: ${numericCode}`);

const currencies = getCountryCurrencies('GB');
console.log(`Currencies used in the UK:`, currencies);

const dialingCodeAndFlagUrl = getDialingCodeAndFlagUrl('ZA');
console.log(`Dialing code: ${dialingCodeAndFlagUrl.dialingCode}`);
console.log(`Flag URL: ${dialingCodeAndFlagUrl.flagUrl}`);

const allDialingCodeAndFlagUrl = getAllDialingCodeAndFlagUrl();
console.log('Dialing codes and flag URLs for all countries:', allDialingCodeAndFlagUrl);

const statesByCountryCode = getStatesByCountryCode('US') as any;
console.log(`States in the United States: ${statesByCountryCode.join(', ')}`);

const statesByCountryName = getStatesByCountryName('Canada') as any;
console.log(`Provinces in Canada: ${statesByCountryName.join(', ')}`);

const statesByAlpha3Code = getStatesByAlpha3Code('DEU') as any;
console.log(`States in Germany: ${statesByAlpha3Code.join(', ')}`);

const citiesByCountryCode = getCitiesByCountryCode('FR') as any;
console.log(`Cities in France: ${citiesByCountryCode.join(', ')}`);

const citiesByCountryName = getCitiesByCountryName('Australia') as any;
console.log(`Cities in Australia: ${citiesByCountryName.join(', ')}`);

const citiesByAlpha3Code = getCitiesByAlpha3Code('USA') as any;
console.log(`Cities in the United States: ${citiesByAlpha3Code.join(', ')}`);

const citiesByStateName = getCitiesByStateName('California') as any;
console.log(`Cities in California, USA: ${citiesByStateName.join(', ')}`);
