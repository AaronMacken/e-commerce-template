// Simple express application that used by Heroku
// to serve up our production FE application

const express = require("express");
const path = require("path");
// this env variable comes from Heroku
const port = process.env.PORT || 8080;
const app = express();

const buildDirectory = path.join(__dirname, "dist");
const htmlBuild = path.resolve(__dirname, "dist", "index.html");

app.use(express.static(buildDirectory));

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(htmlBuild);
});

app.listen(port);
console.log("server is listening...");

// resources for implementing prod deployment:
// https://www.youtube.com/watch?v=Ru3Rj_hM8bo
// https://codeburst.io/deploy-your-webpack-apps-to-heroku-in-3-simple-steps-4ae072af93a8
