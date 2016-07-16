import * as React from 'react';
import {DevRoot} from './Root.dev';
import {ProdRoot} from './Root.prod';
let Root:any;
if (process.env.NODE_ENV === 'production') {
  Root = DevRoot;
} else {
  Root = ProdRoot;
}
export {Root};