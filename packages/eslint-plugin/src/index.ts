import base from './configs/base.js';
import baseNoReact from './configs/base-no-react.js';
import recommended from './configs/recommended.js';
import rules from './rules/index.js';

const plugin = {
  meta: {
    name: '@taskade/eslint-plugin',
    version: '0.4.0',
  },
  configs: {
    base,
    'base-no-react': baseNoReact,
    recommended,
  },
  rules,
};

export default plugin;
