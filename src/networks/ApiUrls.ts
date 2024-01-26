import {Constants} from '../appConstant/AppConstant';

const BASE_URL = 'https://newsapi.org/v2/';
const TOP_HEADLINES = `top-headlines?country=us&apiKey=${Constants.API_KEY}&pageSize=100`;

export const ApiUrls = {
  BASE_URL,
  TOP_HEADLINES,
};
