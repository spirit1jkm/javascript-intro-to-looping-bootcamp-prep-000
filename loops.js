function forLoop(array) {
  for (i = 0, l = array.length; i < l; i++) {
    if (i === 1) {
      array = [...array, "I am 1 strange loop."];
      return array;
    } else {
      array = [...array, `I am ${i} strange loops.`];
      return array;
    }
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--countdown);
  } else if (n == 0){
    console.log('done');
  }
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.slice(0, array.length - 1);
  } while (array.length > 0 && (maybeTrue() == true);

  return false;

}
