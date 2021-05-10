import Validator from 'validatorjs';

const ja = Validator.getMessages('ja');

Validator.setMessages('ja', {
  ...ja,
  required: ':attributeを入力してください',
  max: ':attributeは:max文字以内で入力してください',
  regex: ':attributeは半角数字入力してください',
});
