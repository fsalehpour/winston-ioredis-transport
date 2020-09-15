let common = [
    'features/**/*.feature',
    '--require-module ts-node/register',
    '--require features/step-definitions/**/*.ts',
    '--format progress-bar',
    '--format node_modules/cucumber-pretty',
    `--format-options '{"snippetInterface": "synchronous"}'`,
].join(' ');
module.exports = { default: common };

