export function sendJSONResponse(res, statusCode, payload) {
  res.setHeader('Content-Type', 'application/json');
  // enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.statusCode = statusCode;
  res.end(payload);
}
