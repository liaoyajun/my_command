#! /usr/bin/env node
'use strict';
require('shelljs/global')
const argv = require('yargs').argv;
console.log(argv.m);
exec('git pull origin main')
exec('git add .')
exec('git commit -m "' + argv.m + '"')
exec('git push origin main')
