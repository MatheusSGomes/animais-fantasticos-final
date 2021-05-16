// const path = require('path');
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'production',
  entry: ['@babel/polyfill','./js/scripts.js'],
  output: {
    path: path.resolve(__dirname, './pack'),
    filename: 'main.js',
  },
};
