import http from "http";
import file from "./1.mjs";
import eventsFile from "./event.mjs";
import express from "./express.mjs";

http
  .createServer((req, res) => {
    if (req.url === "/projects") {
      if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end('[{ name: "Arbuz", value: "100 uah" }]');
        return;
      }
    }
    if (req.url === "/users") {
      if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end('[{ name: "Ashot", username: "ashotik228" }]');
        return;
      }
    }
    // console.log(req);
    res.end("No one endpoints");
  })
  .listen(4444);
