import * as React from 'react';
import {DevRoot} from './Root.dev';
import {ProdRoot} from './Root.prod';

const configure = (): any => {
  if (process.env.NODE_ENV === 'production') {
    return ProdRoot;
  } else {
    return DevRoot;
  }

}
let Root = configure();
export {Root};