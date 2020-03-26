import { setPublicPath } from "systemjs-webpack-interop";
const packageJson = require("../package.json");

setPublicPath(packageJson.name);
