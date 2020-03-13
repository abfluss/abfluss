/*!
 * Source https://github.com/abfluss/abfluss Package: cli
 */

import { FlowApiClient } from '@abfluss/api-client';
import * as yargs from 'yargs';
import { HeartRateDownloader } from './heartrate-downloader';
import { createSigninMiddleware } from './signin-middleware';
import { cli } from './cli';


cli();
