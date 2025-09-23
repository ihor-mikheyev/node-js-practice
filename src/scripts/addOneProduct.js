import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from './readProducts.js';
import { writeProducts } from './writeProducts.js';

const addOneProduct = async () => {
  const products = await readProducts();
  const newOneProduct = Array(1).fill(0).map(createFakeProduct);
  const result = [...products, ...newOneProduct];
  await writeProducts(result);
};

addOneProduct();
