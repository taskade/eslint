/* global console */

// simple-import-sort/sort rule
import goodbye from './goodbye';
import hello from './hello';

// eqeqeq rule, always for all, never for null
if (hello == null) {
  console.log(goodbye);
}
