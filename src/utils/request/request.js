import axios from 'axios';

export default axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 30000 /* 30秒 */,
});
