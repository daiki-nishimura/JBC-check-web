import request from './request';

export default () => {
  // 共通のエラー制御を行う
  request.interceptors.response.use(null, (error) => Promise.reject(error));
};
