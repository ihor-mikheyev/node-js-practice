import { readProducts } from './readProducts.js';

const countProducts = async () => {
  const data = await readProducts();
  console.log(data.length);
};

countProducts();
