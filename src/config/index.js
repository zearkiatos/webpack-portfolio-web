const config = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  RANDOMUSER_API_BASE_URL: process.env.RANDOMUSER_API_BASE_URL,
  CUSTOM: process.env.CUSTOM_DATA === 'true',
  CUSTOM_DATA: {
    NAME: process.env.CUSTOM_DATA_NAME,
    LASTNAME: process.env.CUSTOM_DATA_LASTNAME,
    EMAIL: process.env.CUSTOM_DATA_EMAIL,
    COUNTRY: process.env.CUSTOM_DATA_COUNTRY,
    TWITTER: process.env.CUSTOM_DATA_TWITTER,
    GITHUB: process.env.CUSTOM_DATA_GITHUB,
    INSTAGRAM: process.env.CUSTOM_DATA_INSTAGRAM
  },
  FIREBASE: {
    API_KEY: process.env.FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    APP_ID: process.env.FIREBASE_APP_ID
  }
};

export default config;
