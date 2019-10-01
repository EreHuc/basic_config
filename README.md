# Basic dev config for setting up project

### Quick file copying
Just run from anywhere :
```bash
$ node [path/to/this/folder]/copys.js [relative/path/to/destination]
```
And execute last command print.

<sup>/!\ destination path must be relative from where you run the command.</sup>

### npm packages
- [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env): ^7.6.0
- [@babel/cli](https://github.com/babel/babel/tree/master/packages/babel-cli): ^7.6.2
- [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core): ^7.6.2
- [babel-eslint](https://github.com/babel/babel-eslint): ^10.0.3
- [eslint](https://github.com/eslint/eslint): ^5.16.0
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): ^3.1.1
- [prettier](https://github.com/prettier/prettier): ^1.18.2

### File to copy
- [.babelrc](.babelrc)
- [.eslintrc.js](.eslintrc.js)
- [.gitignore](.gitignore)
- [.prettierrc](.prettierrc)
- [package.json](package.json)
