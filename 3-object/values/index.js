export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let sum = 0;
  for (const p in source) {
    sum += parseInt(source[p]);
  }
  return sum;
}
