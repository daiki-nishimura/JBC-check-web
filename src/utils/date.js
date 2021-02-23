import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

/**
 * 日付を指定した形式に変換する
 * @param {string} value 日付
 * @param {string} format 形式
 * @return {string} formatの形式で戻る
 */
export function convertDateFormat(value, format) {
  return dayjs(value).format(format);
}

export function getCurrentDate(format = 'YYYY/MM/DD') {
  return dayjs().format(format);
}
