"use strict";

const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "../");
const APP_SRC = path.join(ROOT_DIR, "src");
const COMPONENTS_DIR = path.join(APP_SRC, "components");
const CONTEXT_DIR = path.join(APP_SRC, "context");
const DATA_DIR = path.join(APP_SRC, "data");
const IMAGES_DIR = path.join(APP_SRC, "images");
const PAGES_DIR = path.join(APP_SRC, "pages");

module.exports = {
  COMPONENTS_DIR,
  CONTEXT_DIR,
  DATA_DIR,
  IMAGES_DIR,
  PAGES_DIR,
};
