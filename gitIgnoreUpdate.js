#! /usr/bin/env node
'use strict';
require('shelljs/global')
// const argv = require('yargs').argv;
// console.log(argv.m);
exec('git rm -r --cached .')
exec('git add .')
exec('git commit -m "update .gitignore"')
