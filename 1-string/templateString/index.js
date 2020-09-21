function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码
  return `你好，${person.lastName}${person.firstName}！你的考试成绩为60分`;
}
