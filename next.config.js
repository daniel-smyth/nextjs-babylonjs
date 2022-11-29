module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: { plugins: [{ name: 'removeViewBox', active: false }] }
          }
        }
      ]
    });
    return config;
  },

  poweredByHeader: false,
  trailingSlash: true,
  images: { loader: 'custom' },

  /** Required settings for static export "npm run build && npm run export" */
  // basePath: '/v2'

  // /** Use modularized imports for MUI when "npm run dev " */
  experimental: {
    modularizeImports: {
      '@mui/material': { transform: '@mui/material/{{member}}' },
      '@mui/icons-material': { transform: '@mui/icons-material/{{member}}' }
    }
  }
};
