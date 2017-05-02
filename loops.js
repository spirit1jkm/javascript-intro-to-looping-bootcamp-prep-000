function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array = [...array, "I am a strange loop."];
      return array;
    } else {
      array = [...array, `I am ${i} strange loops.`];
      return array;
    }
}
