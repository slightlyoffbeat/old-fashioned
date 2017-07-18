/* eslint-disable import/prefer-default-export */

// VARIABLES
const prodUrl = 'https://slightlyoffbeat.github.io/old-fashioned';


const getBaseUrl = () => {
  const env = process.env.NODE_ENV;
  if (env === 'production') {
    return prodUrl;
  }
  return '';
};

export const baseUrl = getBaseUrl();
