function a() {
  b();
  console.log("a");
}
function b() {
  c();
  console.log("b");
}
function c() {
  d();
  console.log("c");
}

console.log("hello");
setTimeout(() => {
  console.log("it is setTimeOut");
}, 1000);

setTimeout(() => {
  console.log("it is setTimeOut2");
}, 2000);

function d() {
  e();
  console.log("d");
}
function e() {
  console.log("e");
}

a();
