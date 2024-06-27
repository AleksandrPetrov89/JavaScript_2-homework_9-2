import getBuffer from '../app';
import ArrayBufferConverter from '../classes/arbufcon';

test('Проверка работы метода toString()', () => {
  const res = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  ArrayBufferConverter.load(getBuffer());
  expect(ArrayBufferConverter.toString()).toBe(res);
});
