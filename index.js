import weatherApi from './weatherApi.js';
import {performance} from 'perf_hooks';

let startTime = performance.now()

await weatherApi();

let endTime = performance.now()


console.log(`Call to weatherApi taook ${endTime - startTime} milliseconds`)

missingDates();