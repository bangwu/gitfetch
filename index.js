var shell = require('shelljs')
shell.exec('pwd')
shell.ls('./').forEach(item => {
  if (shell.cd(`./${item}`).code != 1) {
    shell.exec('pwd')
    shell.exec('git stash')
    shell.exec('git checkout develop')
    shell.exec('git pull origin develop --rebase')
    shell.exec('git stash pop')
    shell.cd('..')
  }
})
