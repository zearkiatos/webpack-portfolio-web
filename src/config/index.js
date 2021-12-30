require('dotenv').config();

const config = {
    NODE_ENV: process.env.NODE_ENV,
    RANDOMUSER_API_BASE_URL: process.env.RANDOMUSER_API_BASE_URL

};

export default config;