import http from 'node:http';

import { getDataFromDatabase } from './database/db.js';
import { sendJSONResponse } from './utils/sendJSONResponse.js';

const PORT = 8000;
const rawData = await getDataFromDatabase();

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const content = JSON.stringify(rawData);
    sendJSONResponse(res, 200, content);
  }
});

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
