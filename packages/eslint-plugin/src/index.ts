import base from './configs/base.js';
import baseNoReact from './configs/base-no-react.js';
import recommended from './configs/recommended.js';

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
};

export default plugin;
