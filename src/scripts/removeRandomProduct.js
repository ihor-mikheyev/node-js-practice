import { readProducts } from './readProducts.js';
import { writeProducts } from './writeProducts.js';

const removeRandomProduct = async () => {
  const data = await readProducts();
  if (data.length) {
    const rand = Math.floor(Math.random() * data.length);
    console.log(rand);
    data.splice(rand, 1);
    await writeProducts(data);
  }
};

removeRandomProduct();
