#! /usr/bin/env node
'use strict';
require('shelljs/global')
exec('git rm -r --cached .')
exec('git add .')
exec('git commit -m "update .gitignore"')
