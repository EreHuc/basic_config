/* eslint no-console:0 */
const path = require('path');
const fs = require('fs');

// A list of path
const babelrcPath = '.babelrc';
const eslintrcPath = '.eslintrc.js';
const gitignorePath = '.gitignore';
const prettierrcPath = '.prettierrc';
const packageJsonPath = 'package.json';

// Color for console.log.. NOICE !
const Reset = '\x1b[0m';
// const Bright = '\x1b[1m';
// const Dim = '\x1b[2m';
// const Underscore = '\x1b[4m';
// const Blink = '\x1b[5m';
const Reverse = '\x1b[7m';
// const Hidden = '\x1b[8m';
// const FgBlack = '\x1b[30m';
const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgYellow = '\x1b[33m';
const FgBlue = '\x1b[34m';
// const FgMagenta = '\x1b[35m';
const FgCyan = '\x1b[36m';
// const FgWhite = '\x1b[37m';
// const BgBlack = '\x1b[40m';
// const BgRed = '\x1b[41m';
// const BgGreen = '\x1b[42m';
// const BgYellow = '\x1b[43m';
// const BgBlue = '\x1b[44m';
// const BgMagenta = '\x1b[45m';
// const BgCyan = '\x1b[46m';
// const BgWhite = '\x1b[47m';

/**
 * Run all the stuff
 */
function voidMainVoid() {
  console.log();
  if (process.argv.length && process.argv[2]) {
    const destination = path.resolve('./', process.argv[2]);
    copyFileFromPaths(
      destination,
      babelrcPath,
      eslintrcPath,
      gitignorePath,
      prettierrcPath,
      packageJsonPath,
    );
    process.exit(0);
  } else {
    console.error(
      `${Reverse}${FgRed}%s${Reset}`,
      '  Error: No destination path given  ',
    );
    process.exit(1);
  }
}

/**
 * copy file from a list of path
 * @param {String} destination - Path destination
 * @param {String} paths
 */
function copyFileFromPaths(destination, ...paths) {
  paths.forEach(path => {
    const source = pathResolver('./', path);

    fs.copyFileSync(source, `${destination}/${path}`);
    console.log(
      `${FgGreen}%s${Reset}%s${FgCyan}%s${Reset}`,
      path,
      ' ~> ',
      `${destination}/${path}`,
    );
  });
  console.log(`${FgBlue}%s${Reset}`, `${paths.length} files copied 🚀`);
  console.log(`${FgYellow}%s${Reset}`, '$', `cd ${destination} && npm i`);
}

/**
 * Resolve path from current file position
 * @param {String} paths
 * @returns {string}
 */
function pathResolver(...paths) {
  return path.resolve(path.dirname(__filename), ...paths);
}

voidMainVoid();
