import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from './readProducts.js';
import { writeProducts } from './writeProducts.js';

const arg = Number(process.argv[2]);
// Перші два елементи (process.argv[0] і process.argv[1]) — це шлях до Node.js і шлях до вашого скрипта.
// Ваші аргументи починаються з process.argv[2].
// Аргумент потрібто привести до числа. Тип process.argv за замовчуванням є стрінг

async function generateProducts(count) {
  const products = await readProducts();
  const newProducts = Array(count).fill(0).map(createFakeProduct);
  const result = [...products, ...newProducts];
  await writeProducts(result);
}

if (arg) {
  generateProducts(arg);
} else console.log('Generate script argument needed!');
