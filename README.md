<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Country Info Helper</title>
</head>
<body>
  <h1>Country Info Helper</h1>
  <p>A JavaScript library for handling and manipulating country information easily.</p>

  <h2>Installation</h2>
  <p>You can install the <code>country-info-helper</code> library using npm:</p>
  <pre><code>npm install country-info-helper</code></pre>

  <h2>Usage</h2>
  <pre><code>const countryInfo = require('country-info-helper');

// Fetch the list of countries
const countries = countryInfo.fetchCountryList();

// Filter countries by region
const asianCountries = countryInfo.filterCountriesByRegion('Asia');

// Get country by country code
const usa = countryInfo.getCountryByCode('US');

// Find countries with a specific currency
const euroCountries = countryInfo.getCountriesByCurrency('EUR');

// ... and so on
  </code></pre>

  <h2>Functions</h2>
  <ul>
    <li><code>fetchCountryList()</code>: Fetches the list of countries.</li>
    <li><code>filterCountriesByRegion(region)</code>: Filters countries by region.</li>
    <li><code>getCountryByCode(countryCode)</code>: Retrieves country information by country code.</li>
    <li><code>getCountriesByCurrency(currencyCode)</code>: Retrieves countries that use a specific currency.</li>
    <!-- ... List all your functions here with brief descriptions -->
  </ul>

  <h2>Example</h2>
  <pre><code>const countryInfo = require('country-info-helper');

const usa = countryInfo.getCountryByCode('US');
if (usa) {
  console.log('Country:', usa.countryName);
  console.log('Capital:', usa.capital);
  // ...
}
  </code></pre>

  <h2>Contributing</h2>
  <p>Contributions are welcome! Please check out our <a href="CONTRIBUTING.md">Contribution Guidelines</a> for more details.</p>

  <h2>License</h2>
  <p>This library is licensed under the <a href="LICENSE">MIT License</a>.</p>
</body>
</html>
