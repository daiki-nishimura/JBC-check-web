import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

/**
 * 日付を指定した形式に変換する
 * @param {string} value 日付
 * @param {string} format 形式
 * @return {string} formatの形式で戻る
 */
const convertFormat = (value, format) => dayjs(value).format(format);

const getNow = () => dayjs().format('YYYY/MM/DD (ddd)');

export default {
  convertFormat,
  getNow,
};
