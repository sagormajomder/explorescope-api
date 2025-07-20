import http from 'node:http';

import { sendJSONResponse } from './utils/sendJSONResponse.js';

const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    sendJSONResponse(res, 200, 'Hello Server');
  }
});

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
