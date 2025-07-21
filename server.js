import http from 'node:http';

import { getDataFromDatabase } from './database/db.js';
import { sendJSONResponse } from './utils/sendJSONResponse.js';

const PORT = 8000;
const rawData = await getDataFromDatabase();

const server = http.createServer((req, res) => {
  //---> Root Route
  if (req.url === '/' && req.method === 'GET') {
    sendJSONResponse(res, 200, rawData);
  }
  //---> Continent Route
  else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continentName = req.url.split('/').pop();
    // console.log(continentName);

    const continentData = rawData.filter(
      data => data.continent.toLowerCase() === continentName.toLowerCase()
    );
    // console.log(continentData);

    sendJSONResponse(res, 200, continentData);
  }
  // ---> Country Route
  else if (req.url.startsWith('/api/country') && req.method === 'GET') {
    const countryName = req.url.split('/').pop();
    // console.log(countryName);

    const countryData = rawData.filter(
      data => data.country.toLowerCase() === countryName.toLowerCase()
    );
    // console.log(countryData);

    sendJSONResponse(res, 200, countryData);
  }
});

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
