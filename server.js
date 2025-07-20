import http from 'node:http';

import { getDataFromDatabase } from './database/db.js';
import { sendJSONResponse } from './utils/sendJSONResponse.js';

const PORT = 8000;
const rawData = await getDataFromDatabase();

const server = http.createServer((req, res) => {
  //---> Root Route
  if (req.url === '/' && req.method === 'GET') {
    const content = JSON.stringify(rawData);
    sendJSONResponse(res, 200, content);
  }
  //---> Continent Route
  else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continentName = req.url.split('/').pop();
    // console.log(continentName);

    const continentData = rawData.filter(
      data => data.continent.toLowerCase() === continentName.toLowerCase()
    );
    // console.log(continentData);

    const content = JSON.stringify(continentData);
    sendJSONResponse(res, 200, content);
  }
});

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
