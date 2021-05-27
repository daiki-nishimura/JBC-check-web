import Validator from 'validatorjs';

const ja = Validator.getMessages('ja');

Validator.setMessages('ja', {
  ...ja,
  required: ':attributeを入力してください。',
  max: ':attributeは:max文字以内で入力してください。',
  integer: ':attributeは半角数字入力してください。',
  regex: ':attributeは例のように入力してください。例）2000/01/01',
  date: '生年月日は正しい日付形式、半角数字で入力してください。'
});