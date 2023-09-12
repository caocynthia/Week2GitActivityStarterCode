import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_divide = calc.divide(6, 3);

console.log(`result_add = ${result_add}`);
console.log(`result_divide = ${result_divide}`);

const result_subtract = calc.subtract(8, 10);
console.log(`result_subtract = ${result_subtract}`);

const result_multiply = calc.multiply(4, 5);
console.log(`result_multiply = ${result_multiply}`);

const result_divide = calc.divide(4, 5);
console.log(`result_divide = ${result_divide}`);

calc.hello();
console.log('done.')
