const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    const alias = {
      '@': path.join(__dirname, 'src/components'),
      config: path.join(__dirname, 'src/config'),
    };
    config.resolve.alias = { ...config.resolve.alias, ...alias };

    // Important: return the modified config
    return config;
  },
};
