import {NEWS} from '../../constants/news';

const initialState = {
  newsTopHeading: [],
  isLoading: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS.TOP_HEADING_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case NEWS.TOP_HEADING_SUCCESS:
      return {
        ...state,
        newsTopHeading: action.payload,
        isLoading: false,
      };
    case NEWS.TOP_HEADING_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default newsReducer;
