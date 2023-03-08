function err(a) {
  if (a > 5) {
    return true;
  } else {
    return false;
  }
}

// console.log(err(5));

function text() {
  var str = "Hello World";
  return str;
}

// console.log(str); // reference error

var foo;
// console.log(foo.bar);  //Type error
