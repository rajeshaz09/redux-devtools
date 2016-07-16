let ConfigureStore: any;
if (process.env.NODE_ENV === 'production') {
  ConfigureStore = require('./configureStore.prod');
} else {
  ConfigureStore = require('./configureStore.dev');
}
export {ConfigureStore};