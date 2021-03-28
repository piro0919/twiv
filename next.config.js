const withPWA = require("next-pwa");

module.exports = withPWA({
  experimental: {
    optimizeFonts: true,
  },
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
    appId: process.env.APP_ID,
    authDomain: process.env.AUTH_DOMAIN,
    baseUrl: process.env.BASE_URL,
    databaseURL: process.env.DATABASE_URL,
    measurementId: process.env.MEASUREMENT_ID,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    projectId: process.env.PROJECT_ID,
    sitekey: process.env.SITEKEY,
    storageBucket: process.env.STORAGE_BUCKET,
  },
  pwa: {
    // dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    sw: "/sw.js",
  },
  webpack: (config) => {
    config.resolve.alias.firebaseui = "firebaseui-ja";

    return config;
  },
});
