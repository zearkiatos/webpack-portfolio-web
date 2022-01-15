const fs = require("fs");

fs.writeFileSync(
  "./.env",
  `
    ENVIRONMENT=${process.env.ENVIRONMENT}\n
    RANDOMUSER_API_BASE_URL=${process.env.RANDOMUSER_API_BASE_URL}\n
    CUSTOM_DATA=${process.env.CUSTOM_DATA}\n
    CUSTOM_DATA_NAME=${process.env.CUSTOM_DATA_NAME}\n
    CUSTOM_DATA_LASTNAME=${process.env.CUSTOM_DATA_LASTNAME}\n
    CUSTOM_DATA_EMAIL=${process.env.CUSTOM_DATA_EMAIL}\n
    CUSTOM_DATA_COUNTRY=${process.env.CUSTOM_DATA_COUNTRY}\n
    CUSTOM_DATA_TWITTER=${process.env.CUSTOM_DATA_TWITTER}\n
    CUSTOM_DATA_GITHUB=${process.env.CUSTOM_DATA_GITHUB}\n
    CUSTOM_DATA_INSTAGRAM=${process.env.CUSTOM_DATA_INSTAGRAM}\n
`
);
