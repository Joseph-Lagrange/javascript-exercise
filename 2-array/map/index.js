export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  return collection.map(i => String.fromCharCode(96 + parseInt(i)));
}
