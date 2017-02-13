/// <reference path="../typings/main.d.ts" />
"use strict";
var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var message = url.parse(req.url).path || '<i>no message</i>';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
}).listen(4321);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZVNhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vZGVTYW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDOztBQUU3QyxJQUFZLElBQUksV0FBTSxNQUFNLENBQUMsQ0FBQTtBQUM3QixJQUFZLEdBQUcsV0FBTSxLQUFLLENBQUMsQ0FBQTtBQUUzQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDeEMsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLG1CQUFtQixDQUFDO0lBQy9ELEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUMsY0FBYyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMifQ==