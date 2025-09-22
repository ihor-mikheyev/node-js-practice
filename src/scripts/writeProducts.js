import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = (products) => {
  fs.writeFile(PATH_DB, JSON.stringify(products, null, 2));
};
