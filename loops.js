function forLoop(arr) {
  for (var i = 0; i<25; i++) {
    arr.push("I am ${i} strange loop${i === 0 ? '' : 's'}.")
  }
  return arr
}
var arra = []
forLoop(arra)

function whileLoop(num) {
  while (num>0) {
    console.log(num)
    num = num-1
  }
  return 'done'
}

function doWhileLoop(arr) {
  function maybeTrue() {
    Math.random() >= 0.5
  }
  do {
    arr.unshift()
  }
  while (arr.length>0 && maybeTrue());
  return arr
}
