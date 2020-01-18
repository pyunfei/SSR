// import Index from '../src/index';
// import Count from '../src/count';
import render from './render';
const express = require("express");
const app = express();

app.use(express.static("public"));

// const Container = () => {
//   return (<>
//     <Index />
//     <Count />
//   </>)
// }

app.get("*", (req, res) => {
  render(req, res);
});

app.listen(3001, () => console.log("http://localhost:3001"));
