export const getErrorMessage = error => {
  const { response } = error;
  return response ? response.data.message : error.message;
};
