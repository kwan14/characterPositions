function countLetters(sentence) {

  var letterCount = {};


  //var characterArray = sentence.split(" ");
  //sentence = characterArray.join("");

  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] != " ") {
      var letter = sentence[i];
      var letterFound = false;
      for (var key in letterCount) {
        if (letter == key) {
          letterCount[key].count += 1;
          letterCount[key].indices.push(i);
          letterFound = true;
        }
      }
      if (letterFound == false) {
        letterCount[letter] = { count : 1, indices : [i] };
      }
    }
  }
  return letterCount;
}


console.log(countLetters("lighthouse in the house"));