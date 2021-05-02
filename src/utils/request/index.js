import request from './request';
import initInterceptor from './initInterceptor';

export const init = () => {
  initInterceptor();
};

export default request;
