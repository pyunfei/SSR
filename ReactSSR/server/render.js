import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath, Route } from "react-router-dom";
import { renderRoutes, matchRoutes } from 'react-router-config';
import routes from '../routes';
import { Provider } from 'react-redux';
import { getServerStore } from '../store'

export default function (req, res) {
  const store = getServerStore();
  // const matchRouters = routes.filter(route => {
  //   matchPath(req.path, route)
  // })
  const matchRouter = matchRoutes(routes, req.path)
  const promises = [];
  matchRouter.forEach(route => {
    if (route.loadData) {
      promises.push(route.loadData(store))
    }
  })
  Promise.all(promises).then(function () {
    // console.log(store.getState())
    // console.log(html)
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter context={{}} location={req.path}>
          {/* {routes.map(route => (
            <Route {...route} />
          ))} */}
          {renderRoutes(routes)}
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
      <script>
        window.context = {
          state: ${ JSON.stringify(store.getState()) }
        }
      </script>
      <script src="/client.js" ></script>
    </body>
    </html>
    `);
  })
  console.log(matchRouters)
}