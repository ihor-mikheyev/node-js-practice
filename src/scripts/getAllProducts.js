import { readProducts } from './readProducts.js';

const getAllProducts = async () => {
  const data = await readProducts();
  console.log(data);
};

getAllProducts();
