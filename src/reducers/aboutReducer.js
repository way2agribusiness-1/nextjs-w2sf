export const brandsReducer = (state = { brands: [] }, { type, payload }) => {
  switch (type) {
    case 'GET_BRANDS_SUCCESS':
      return {
        brands: payload,
      };
    case 'GET_BRANDS_FAIL':
      return {
        error: payload,
      };
    default:
      return state;
  }
};
export const credentialsReducer = (
  state = { credentials: [] },
  { type, payload }
) => {
  switch (type) {
    case 'GET_CREDENTIALS_SUCCESS':
      return {
        credentials: payload,
      };
    case 'GET_CREDENTIALS_FAIL':
      return {
        error: payload,
      };
    default:
      return state;
  }
};
