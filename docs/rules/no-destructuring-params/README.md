# Destructuring Parameters Rule Example

This example demonstrates the `@taskade/no-destructuring-params` ESLint rule in action.

## What it does

The `@taskade/no-destructuring-params` rule flags destructuring patterns in function parameters and encourages using regular parameters with internal destructuring instead.

## Running the example

To see the rule in action, run ESLint on the example file:

```bash
npx eslint destructuring-examples.ts
```

## Example patterns

### ❌ Flagged patterns (destructuring in parameters)

```javascript
// Object destructuring
function badFunction({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

// Array destructuring
function badFunction([first, second]) {
  console.log(first, second);
}

// With defaults
function badFunction({ name = 'Anonymous' } = {}) {
  console.log(name);
}

// Arrow functions
const badArrow = ({ id, value }) => `${id}: ${value}`;

// Class methods
class Example {
  method({ id, name }) {
    return `${id}: ${name}`;
  }
}
```

### ✅ Preferred patterns (regular parameters)

```javascript
// Object parameter with internal destructuring
function goodFunction(person) {
  const { name, age } = person;
  console.log(`${name} is ${age} years old`);
}

// Array parameter with internal destructuring
function goodFunction(coords) {
  const [first, second] = coords;
  console.log(first, second);
}

// With null checks and defaults
function goodFunction(options = {}) {
  const name = options.name ?? 'Anonymous';
  console.log(name);
}

// Arrow functions with regular parameters
const goodArrow = (item) => {
  const { id, value } = item;
  return `${id}: ${value}`;
};

// Class methods with regular parameters
class Example {
  method(item) {
    const { id, name } = item;
    return `${id}: ${name}`;
  }
}
```

## Why avoid destructuring in parameters?

1. **Complexity**: Too much logic in parameter declarations
2. **Null handling**: `null` breaks assumptions and can cause crashes
3. **Performance**: Implicit object creation with defaults
4. **Readability**: Easier to understand with explicit destructuring inside the function