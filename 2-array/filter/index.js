function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(i => i % 3 == 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return [...new Set(collection)];
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
