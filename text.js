// var candyMachine = {
//     status : {
//         name : 'node',
//         count : 5,
//     },
//     getCandy: function() {
//         this.status.count--;
//         return this.status.count;
//     },
// };
// // 객체 접근방식이 속성(.)을 통해 접근함.
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

// console.log(getCandy); //[Function: getCandy]
// console.log(count); //5


var candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy() {
        this.status.count --;
        return this.status.count;
    },
};
const {getCandy, status: {count}} = candyMachine;
console.log(getCandy);
console.log(status);