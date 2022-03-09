#! /usr/bin/env node
'use strict';
require('shelljs/global')
const argv = require('yargs').argv
console.log(argv.m)
exec('git pull origin main')
exec('git add .')
exec('git commit -m "' + argv.m + '"')
exec('git push origin main')
exec('sudo env -i beep -f 4000 -r 3 -d 60 -l 80')
setInterval(function() {
  console.log(argv.m)
  exec('git pull origin main')
  exec('git add .')
  exec('git commit -m "' + argv.m + '"')
  exec('git push origin main')
  exec('sudo env -i beep -f 4000 -r 3 -d 60 -l 80')
}, 10000)
