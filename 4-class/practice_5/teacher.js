// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const classString = this.klass == null ? 'No Class.' : `Class ${this.klass}.`;
    return `My name is ${this.name}. I am ${this.age} years old. I am a Teacher. I teach ${classString}`;
  }
}
