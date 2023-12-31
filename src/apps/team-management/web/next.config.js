/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/auth/:any*',
        destination: '/auth',
      },
    ];
  },
  reactStrictMode: true,
  transpilePackages: ['ui'],
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      fs: false,
      http2: false,
      tls: false,
      net: false,
      dns: false,
      'cache-manager': false,
      repl: false,
      kafkajs: false,
      mqtt: false,
      nats: false,
      ioredis: false,
      'amqp-connection-manager': false,
      child_process: false,
      cloudinary: false,
      '@nestjs': false,
      perf_hooks: false,
      handlebars: false,
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      handlebars: 'handlebars/dist/handlebars.js',
    };
    return config;
  },
};
