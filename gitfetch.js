#!/usr/bin/env node
var shell = require('shelljs')
shell.exec('pwd')
shell.ls('./').forEach(item => {
  console.log('-----------------------------start-----------------------------------')
  if (shell.cd(`./${item}`).code != 1) {
    shell.exec('pwd')
    if (shell.exec('ls -lat | grep .git').code != 1) {
      shell.exec('git fetch')
    }
    shell.cd('..')
  }
  console.log('-----------------------------end-----------------------------------')
})
