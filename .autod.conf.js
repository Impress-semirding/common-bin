'ues strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  registry: 'https://r.cnpmjs.org',
  exclude: [
    './test/fixtures',
  ],
  devdep: [
    'autod',
    'egg-bin',
    'eslint',
    'eslint-config-egg',
  ],
  keep: [
  ],
  semver: [
    'koa@1',
  ],
};
