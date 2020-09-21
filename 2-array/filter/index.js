function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(i => i % 3 == 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((e, i) => {
    return collection.indexOf(e) === i;
  });
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
