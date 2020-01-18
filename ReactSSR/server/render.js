import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import routes from '../routes';
import { Provider } from 'react-redux';
import { getServerStore } from '../store'

export default function (req, res) {
  const html = renderToString(
    <Provider store={getServerStore()}>
      <StaticRouter context={{}} location={req.path}>
        {routes}
      </StaticRouter>
    </Provider>
  );
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
    <script src="/client.js" ></script>
  </body>
  </html>
  `);
}