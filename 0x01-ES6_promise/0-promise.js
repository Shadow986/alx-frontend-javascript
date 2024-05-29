const getResponseFromAPI = () => {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      resolve('API call successful');
    }, 1000);
  });
};

export default getResponseFromAPI;
