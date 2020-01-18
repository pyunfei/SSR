import React from 'react';
import Index from '../src/index';
import { renderToString } from 'react-dom/server';
const express = require("express");
const app = express();

const html = renderToString(<Index />);
app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React SSR</title>
  </head>
  <body> 
    <div id="root">${html}</div>
  </body>
  </html>
  `);
});

app.listen(3001, () => console.log("http://localhost:3001"));
