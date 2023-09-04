<h1>Country Info Helper</h1>
  <p>A JavaScript / TypeScript base  library for handling and manipulating country information easily.</p>

  <h2>Installation</h2>
  <p>You can install the <code>country-info-helper</code> library using npm:</p>
  <pre><code>npm install country-info-helper</code></pre>

<h2>Installation</h2>

<p>You can install this package using npm or yarn:</p>

<pre><code>npm install world-data-functions
# or
yarn add world-data-functions
</code></pre>

<h2>Usage</h2>

<p>Import the functions you need from the package and use them in your JavaScript/TypeScript project.</p>

<pre><code>import {
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
} from 'world-data-functions';
</code></pre>

<h2>Functions and Use Cases</h2>

<p>Here are the functions available in this package and their respective use cases:</p>

<h3>1. <code>getCountOfCountries</code></h3>

<p>Get the count of countries.</p>

<pre><code>const count = getCountOfCountries();
console.log(`Total countries: ${count}`);
</code></pre>

<h3>2. <code>getCountryNames</code></h3>

<p>Get a list of country names.</p>

<pre><code>const names = getCountryNames();
console.log(`Country names: ${names.join(', ')}`);
</code></pre>

<h3>3. <code>getCountryCodes</code></h3>

<p>Get a list of country codes.</p>

<pre><code>const codes = getCountryCodes();
console.log(`Country codes: ${codes.join(', ')}`);
</code></pre>

<h3>4. <code>getCapitalCities</code></h3>

<p>Get a list of capital cities.</p>

<pre><code>const capitals = getCapitalCities();
console.log(`Capital cities: ${capitals.join(', ')}`);
</code></pre>

<h3>5. <code>getAllLanguages</code></h3>

<p>Get a list of languages spoken in all countries.</p>

<pre><code>const languages = getAllLanguages();
console.log(`Languages spoken: ${languages.join(', ')}`);
</code></pre>

<h3>6. <code>getCountriesInRegion</code></h3>

<p>Get a list of countries in a specific region.</p>

<pre><code>const region = 'Europe';
const countriesInRegion = getCountriesInRegion(region);
console.log(`Countries in ${region}: ${countriesInRegion.join(', ')}`);
</code></pre>

<h3>7. <code>getFlagUrl</code></h3>

<p>Get the flag URL for a specific country code.</p>

<pre><code>const countryCode = 'US';
const flagUrl = getFlagUrl(countryCode);
console.log(`Flag URL for ${countryCode}: ${flagUrl}`);
</code></pre>

<h3>8. <code>getDialingCode</code></h3>

<p>Get the dialing code for a specific country code.</p>

<pre><code>const dialingCode = getDialingCode('FR');
console.log(`Dialing code for France: ${dialingCode}`);
</code></pre>

<h3>9. <code>getCountriesSharingBorders</code></h3>

<p>Get countries that share borders with a specific country.</p>

<pre><code>const countryCode = 'CA';
const borderingCountries = getCountriesSharingBorders(countryCode);
console.log(`Countries sharing borders with Canada: ${borderingCountries.join(', ')}`);
</code></pre>

<h3>10. <code>isCountryLandlocked</code></h3>

<p>Check if a country is landlocked.</p>

<pre><code>const countryCode = 'AT';
const isLandlocked = isCountryLandlocked(countryCode);
console.log(`Is Austria landlocked? ${isLandlocked}`);
</code></pre>

<h3>11. <code>getTopLevelDomain</code></h3>

<p>Get the top-level domain for a specific country code.</p>

<pre><code>const countryCode = 'JP';
const topLevelDomain = getTopLevelDomain(countryCode);
console.log(`Top-level domain for Japan: ${topLevelDomain}`);
</code></pre>

<h3>12. <code>getMapUrls</code></h3>

<p>Get the maps URLs for a specific country.</p>

<pre><code>const countryCode = 'AU';
const mapUrls = getMapUrls(countryCode);
console.log(`Google Maps URL: ${mapUrls.googleMaps}`);
console.log(`OpenStreetMaps URL: ${mapUrls.openStreetMaps}`);
</code></pre>

<h3>13. <code>getCoatOfArmsUrls</code></h3>

<p>Get the coat of arms URLs for a specific country.</p>

<pre><code>const countryCode = 'BR';
const coatOfArmsUrls = getCoatOfArmsUrls(countryCode);
console.log(`PNG Coat of Arms URL: ${coatOfArmsUrls.png}`);
console.log(`SVG Coat of Arms URL: ${coatOfArmsUrls.svg}`);
</code></pre>

<h3>14. <code>getEmoji</code></h3>

<p>Get the emoji for a specific country code.</p>

<pre><code>const countryCode = 'DE';
const emoji = getEmoji(countryCode);
console.log(`Emoji for Germany: ${emoji}`);
</code></pre>

<h3>15. <code>getUnicode</code></h3>

<p>Get the Unicode for a specific country code.</p>

<pre><code>const countryCode = 'IT';
const unicode = getUnicode(countryCode);
console.log(`Unicode for Italy: ${unicode}`);
</code></pre>

<h3>16. <code>getAlpha3Code</code></h3>

<p>Get the alpha3 code for a specific country code.</p>

<pre><code>const countryCode = 'CN';
const alpha3Code = getAlpha3Code(countryCode);
console.log(`Alpha3 code for China: ${alpha3Code}`);
</code></pre>

<h3>17. <code>getNativeNames</code></h3>

<p>Get the native names for a specific country code.</p>

<pre><code>const countryCode = 'ES';
const nativeNames = getNativeNames(countryCode);
console.log(`Native names for Spain:`, nativeNames);
</code></pre>

<h3>18. <code>getCountryArea</code></h3>

<p>Get the area of a specific country code.</p>

<pre><code>const countryCode = 'RU';
const area = getCountryArea(countryCode);
console.log(`Area of Russia: ${area} square kilometers`);
</code></pre>

<h3>19. <code>getNumericCode</code></h3>

<p>Get the numeric code for a specific country code.</p>

<pre><code>const countryCode = 'IN';
const numericCode = getNumericCode(countryCode);
console.log(`Numeric code for India: ${numericCode}`);
</code></pre>

<h3>20. <code>getCountryCurrencies</code></h3>

<p>Get the currencies used in a specific country.</p>

<pre><code>const countryCode = 'GB';
const currencies = getCountryCurrencies(countryCode);
console.log(`Currencies used in the UK:`, currencies);
</code></pre>

<h3>21. <code>getDialingCodeAndFlagUrl</code></h3>

<p>Get the dialing code and flag URL for a specific country code.</p>

<pre><code>const countryCode = 'ZA';
const info = getDialingCodeAndFlagUrl(countryCode);
console.log(`Dialing code: ${info.dialingCode}`);
console.log(`Flag URL: ${info.flagUrl}`);
</code></pre>

<h3>22. <code>getAllDialingCodeAndFlagUrl</code></h3>

<p>Get the dialing code and flag URL for all countries.</p>

<pre><code>const allCountriesInfo = getAllDialingCodeAndFlagUrl();
console.log('Dialing codes and flag URLs for all countries:', allCountriesInfo);
</code></pre>

<h3>23. <code>getStatesByCountryCode</code></h3>

<p>Get a list of states for a specific country code.</p>

<pre><code>const countryCode = 'US';
const states = getStatesByCountryCode(countryCode);
console.log(`States in the United States: ${states.join(', ')}`);
</code></pre>

<h3>24. <code>getStatesByCountryName</code></h3>

<p>Get a list of states for a specific country name.</p>

<pre><code>const countryName = 'Canada';
const states = getStatesByCountryName(countryName);
console.log(`Provinces in Canada: ${states.join(', ')}`);
</code></pre>

<h3>25. <code>getStatesByAlpha3Code</code></h3>

<p>Get a list of states for a specific alpha3 code.</p>

<pre><code>const alpha3Code = 'DEU';
const states = getStatesByAlpha3Code(alpha3Code);
console.log(`States in Germany: ${states.join(', ')}`);
</code></pre>

<h3>26. <code>getCitiesByCountryCode</code></h3>

<p>Get a list of cities for a specific country code.</p>

<pre><code>const countryCode = 'FR';
const cities = getCitiesByCountryCode(countryCode);
console.log(`Cities in France: ${cities.join(', ')}`);
</code></pre>

<h3>27. <code>getCitiesByCountryName</code></h3>

<p>Get a list of cities for a specific country name.</p>

<pre><code>const countryName = 'Australia';
const cities = getCitiesByCountryName(countryName);
console.log(`Cities in Australia: ${cities.join(', ')}`);
</code></pre>

<h3>28. <code>getCitiesByAlpha3Code</code></h3>

<p>Get a list of cities for a specific alpha3 code.</p>

<pre><code>const alpha3Code = 'USA';
const cities = getCitiesByAlpha3Code(alpha3Code);
console.log(`Cities in the United States: ${cities.join(', ')}`);
</code></pre>

<h3>29. <code>getCitiesByStateName</code></h3>

<p>Get a list of cities for a specific state in a country.</p>

<pre><code>const stateName = 'California';
const cities = getCitiesByStateName(stateName);
console.log(`Cities in California, USA: ${cities.join(', ')}`);
</code></pre>

<h2>License</h2>
<p>This library is licensed under the <a href="LICENSE">MIT License</a>.</p>
