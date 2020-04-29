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

  eat(): void;
  eat(food?: string) {
    console.log(`${this.name} eating ${food ?? 'Food'}`);
  }
}

export default Human;
