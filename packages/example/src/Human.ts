interface HumanDesc {
  age: number;
  name: string;
}

class Human {
  age: number;
  name: string;

  constructor(desc: HumanDesc) {
    this.name = desc.name;
    this.age = desc.age;
  }
}

export default Human;
