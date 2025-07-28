import base from './configs/base';
import recommended from './configs/recommended';

const plugin = {
  meta: {
    name: '@taskade/eslint-plugin',
    version: '0.4.0',
  },
  configs: {
    base,
    recommended,
  },
};

export default plugin;
