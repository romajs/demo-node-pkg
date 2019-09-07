const fs = require('fs');
const log = require('fancy-log');
const path = require('path');
const pkg = require('pkg');

const BUILD_DIR = path.join(__dirname, 'build');

const TARGETS = [
  'node10-linux-x64',
  'node10-macos-x64',
  'node10-win-x64',
];

const build = async (done) => {
  log(`Cleaning up ${BUILD_DIR}.`);
  fs.readdirSync(BUILD_DIR).forEach(fileName => {
    fs.unlinkSync(path.join(BUILD_DIR, fileName));
  });

  log(`Creating output build packages for ${TARGETS.join(', ')}.`);
  await pkg.exec([
    __dirname,
    `--out-path=${path.basename(BUILD_DIR)}`,
    `-targets=${TARGETS}`,
  ]);

  done();
};

module.exports = {
  build,
};
