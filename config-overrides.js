const { addWebpackAlias, addWebpackModuleRule } = require('customize-cra');
const path = require('path');

module.exports = function override(config) {
  // Add aliases for easy imports
  config = addWebpackAlias({
    'three/examples/jsm/postprocessing': path.resolve(
      __dirname,
      'node_modules/three/examples/jsm/postprocessing'
    ),
  })(config);

  // Add rule for JavaScript modules
  config = addWebpackModuleRule({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  })(config);

  return config;
};