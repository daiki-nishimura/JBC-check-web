import Validator from 'validatorjs';

const ja = Validator.getMessages('ja');

Validator.setMessages('ja', {
  ...ja,
  required: ':attributeを入力してください。',
  max: ':attributeは:max文字以内で入力してください。',
  integer: ':attributeの最初の数字は0以外の半角数字で入力してください。',
  regex: ':attributeはYYYY/MM/DD形式で入力してください。例）2000/01/01',
  date: ':attributeは正しい日付形式、半角数字で入力してください。'
});