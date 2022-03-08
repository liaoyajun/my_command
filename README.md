# myCommand
> Mac中常用的一些指令，自定义一行指令代替多行指令。

**github 默认分支 master -> main**

## 使用

- 更新本地`.gitignore`
``` zsh
  # 输入如下代码即可
  updateGitIgnore

  # 等价于下面多行指令
  git rm -r --cached .
  git add .
  git commit -m "update .gitignore"
```

- push到自己的远程仓库(没有sever仓库)
``` zsh
  # 输入如下代码即可
  pushD -m 'commit'

  # 等价于下面多行指令
  git pull origin master
  git add .
  git commit -m "commit"
  git push origin master
```

- push到自己的远程仓库(有sever仓库)
``` zsh
  # 输入如下代码即可
  pushS -m 'commit'

  # 等价于下面多行指令
  git pull upstream master
  git add .
  git commit -m "commit"
  git push origin master
```

## 安装

``` bash
  git clone git@github.com:liaoyajun/myCommand.git
  cd myCommand
  npm install
  npm link
```
