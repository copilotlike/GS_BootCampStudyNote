let ttt = '나는무너 꿈을꾸는무너';
console.log(`ttt : ${ttt}`);

let buf = Buffer.from(ttt);
console.log(`buffer : `, buf,buf.length);
console.log(`toString : `,buf.toString);
let arr = [Buffer.from(`qwer`),Buffer.from('파란하늘'),Buffer.from(`1234 `),Buffer.from('!@#$%')]
buf = Buffer.concat(arr);
console.log(`buffer.concat :`, buf,buf.length);
console.log(`toString :`, buf.toString());

buf = Buffer.alloc(5);
console.log(`Buffer.alloc(5) : `, buf);