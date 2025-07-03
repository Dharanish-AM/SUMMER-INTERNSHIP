console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");
console.log("4");

async function fun() {
  return "5";
}

fun().then((res) => console.log(res));
