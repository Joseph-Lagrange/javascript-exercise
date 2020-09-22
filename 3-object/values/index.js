export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const sum = Object.values(source).reduce((previous, current) => {
    return Number(current) + previous;
  }, 0);
  return sum;
}
