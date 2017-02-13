//⁄ <reference path="../typings/main.d.ts" />

import * as http from 'http';
import * as url from 'url';

const server = http.createServer((req, res) => {
  const message = url.parse(req.url).path || '<i>no message</i>';
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
}).listen(4321);
