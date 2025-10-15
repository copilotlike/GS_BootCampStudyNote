const EventEmitter = require("events");

// console.log(EventEmitter);
const myE = new EventEmitter();
// console.log(myE);
myE.on("ev1", () => {
  console.log("ev1 실행");
});
myE.on("ev1", () => {
  console.log("ev1 추가");
});

console.log("_eventsCount :", myE.listenerCount('ev1')); //이벤트 갯수



myE.emit('ev1')//이벤트 호출

console.log(`listenerCount('ev1'): `, myE.listenerCount('ev1'))
console.log(`_eventsCount('ev1'): `, myE._eventsCount('ev1')) //이벤트객체


myE.on("ev1", () => {
  console.log("ev1 실행1");
});
myE.on("ev1", () => {
  console.log("ev2 실행2");
});
myE.on("ev1", () => {
  console.log("ev3 실행33");
});
myE.on("ev1", () => {
  console.log("ev4 실행4");
});


myE.once("ev1", () => {
  console.log("o ev1 실행1");
});
myE.once("ev1", () => {
  console.log("o ev2 실행2");
});
myE.once("ev1", () => {
  console.log("o ev3 실행33");
});
myE.once("ev1", () => {
  console.log("o ev4 실행4");
});



myE.emit('ev1')
console.log('-------------------------')
myE.once("ev2", () => {
  console.log("o ev2 실행1");
});
myE.once("ev2", () => {
  console.log("o ev2 실행2");
});
myE.once("ev2", () => {
  console.log("o ev3 실행3");
});
myE.once("ev2", () => {
  console.log("o ev4 실행4");
});








