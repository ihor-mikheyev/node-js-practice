import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from './readProducts.js';
import { writeProducts } from './writeProducts.js';

const generateProducts = async (count) => {
  const products = await readProducts();
  console.log(products);
  const newProducts = Array(count).fill(0).map(createFakeProduct);
  const result = [...products, ...newProducts];
  console.log(result);
  await writeProducts(result);
};

generateProducts(5);
