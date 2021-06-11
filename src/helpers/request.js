const request = async (method, url) => {
  const reqParams = {
    method: `${method}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(`${url}`, reqParams);
  console.log(response);
  return response;
};

export default request;
