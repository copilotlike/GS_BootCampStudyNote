//module.export = '나는문어';
export default '나는문어';

//var {aa, bb} = require{`/sub1`};
import {aa, bb} from './sub1.mjs';
import cc from './sub2.mjs';

console.log(aa);
console.log(bb);
console.log(cc);
