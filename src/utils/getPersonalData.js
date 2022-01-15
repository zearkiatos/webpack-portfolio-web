import config from "@config/index.js";
const getPersonalData = () => {
  const data = {
    picture: {
      large: config.CUSTOM_DATA.PICTURE
    },
    name: {
      first: config.CUSTOM_DATA.NAME,
      last: config.CUSTOM_DATA.LASTNAME
    },
    email: config.CUSTOM_DATA.EMAIL,
    location: {
      country: config.CUSTOM_DATA.COUNTRY
    },
    socialMedia: {
      twitter: config.CUSTOM_DATA.TWITTER,
      github: config.CUSTOM_DATA.GITHUB,
      instagram: config.CUSTOM_DATA.INSTAGRAM
    }
  };

  return data;
};

export default getPersonalData;
