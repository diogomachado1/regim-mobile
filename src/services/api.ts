import axios from 'axios';

const base = 'https://regim-api.diogomachado.site';
const openApi = axios.create({
  baseURL: `https://api-regim.diogomachado.site/v1/pub/`,
});
const closeApi = axios.create({
  baseURL: `https://api-regim.diogomachado.site/v1/pvt/`,
});

export default closeApi;
export { openApi, closeApi };
