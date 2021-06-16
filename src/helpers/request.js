import 'cross-fetch/polyfill';

const request = async (method, url) => {
  const reqParams = {
    method: `${method}`,
    credentials: 'same-origin',
    headers: {
      // Accept: '*/*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${url}`, reqParams);

  return response;
};

export default request;
