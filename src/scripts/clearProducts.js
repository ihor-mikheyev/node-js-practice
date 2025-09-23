import { readProducts } from './readProducts.js';
import { writeProducts } from './writeProducts.js';

const clearProducts = async () => {
  const data = await readProducts();
  if (data.length) {
    data.splice(0, data.length);
  }
  writeProducts(data);
  console.log('Your products database is empty!');
};

clearProducts();
