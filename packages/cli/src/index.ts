/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { selectOutputDir } from "./download-heartrate-handler";

// import { CliApp } from './cli-app';CliApp.start();
selectOutputDir().then((...args) => console.log("JJ", args));
