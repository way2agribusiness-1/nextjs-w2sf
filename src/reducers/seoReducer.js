export const seoReducer = (state = { seoDetails: [] }, { type, payload }) => {
  switch (type) {
    case 'GET_SEO_SUCCESS':
      return {
        seoDetails: payload,
      };
    case 'GET_SEO_FAIL':
      return {
        error: payload,
      };

    default:
      return state;
  }
};
