// Examples to test the @taskade/no-destructuring-params rule

// Define some types for better TypeScript examples
interface Person {
  name: string;
  age: number;
}

interface Item {
  id: string;
  value: string;
}

interface Point {
  x: number;
  y: number;
}

type Coordinates = [number, number];

// ❌ These patterns are flagged by the rule (destructuring in parameters)

// Object destructuring
// eslint-disable-next-line @taskade/no-destructuring-params
function badFunction1({ name, age }: Person): void {
  console.log(`${name} is ${age} years old`);
}

// Object destructuring with defaults
function badFunction2({ name = 'Anonymous', age = 0 }: Partial<Person> = {}): void {
  console.log(`${name} is ${age} years old`);
}

// Array destructuring
function badFunction3([first, second]: Coordinates): void {
  console.log(first, second);
}

// Array destructuring with defaults
function badFunction4([x = 0, y = 0]: Coordinates = [0, 0]): number {
  return x + y;
}

// Arrow functions with destructuring
const badArrow1 = ({ id, value }: Item): string => {
  return `${id}: ${value}`;
};

const badArrow2 = ([a, b]: Coordinates): number => a + b;

// Function expressions
const badExpression = function ({ target, preventDefault }: Event): void {
  (target as HTMLElement).setAttribute('disabled', 'true');
  preventDefault();
};

// Class methods with destructuring
class ExampleClass {
  // Method with object destructuring
  badMethod1({ id, name }: Item & { name: string }): string {
    return `${id}: ${name}`;
  }

  // Method with array destructuring
  badMethod2([x, y]: Coordinates): Point {
    return { x, y };
  }
}

// ✅ These patterns are preferred (regular parameters with internal destructuring)

// Object parameter with internal destructuring
function goodFunction1(person: Person): void {
  const { name, age } = person;
  console.log(`${name} is ${age} years old`);
}

// With optional chaining and defaults
function goodFunction2(options: Partial<Person> = {}): void {
  const name = options.name ?? 'Anonymous';
  const age = options.age ?? 0;
  console.log(`${name} is ${age} years old`);
}

// Array parameter with internal destructuring
function goodFunction3(coords: Coordinates): void {
  const [first, second] = coords;
  console.log(first, second);
}

// With null checks
function goodFunction4(coords: Coordinates | null): number {
  if (!coords) {
    return 0;
  }
  const [x, y] = coords;
  return x + y;
}

// Arrow functions with regular parameters
const goodArrow1 = (item: Item): string => {
  const { id, value } = item;
  return `${id}: ${value}`;
};

const goodArrow2 = (numbers: Coordinates): number => {
  const [a, b] = numbers;
  return a + b;
};

// Function expressions
const goodExpression = function (event: Event): void {
  const { target, preventDefault } = event;
  (target as HTMLElement).setAttribute('disabled', 'true');
  preventDefault();
};

// Class methods without parameter destructuring
class BetterExampleClass {
  // Method with regular parameter
  goodMethod1(item: Item & { name: string }): string {
    const { id, name } = item;
    return `${id}: ${name}`;
  }

  // Method with regular parameter
  goodMethod2(point: Coordinates): Point {
    const [x, y] = point;
    return { x, y };
  }
}

// Export for module usage
export {
  badArrow1,
  badArrow2,
  badExpression,
  badFunction1,
  badFunction2,
  badFunction3,
  badFunction4,
  BetterExampleClass,
  ExampleClass,
  goodArrow1,
  goodArrow2,
  goodExpression,
  goodFunction1,
  goodFunction2,
  goodFunction3,
  goodFunction4,
};
