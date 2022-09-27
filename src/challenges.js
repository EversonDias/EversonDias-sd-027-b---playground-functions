// Desafio 1
function compareTrue(girafa, elefante) {
  let resp;
  if (girafa && elefante) {
    resp = true;
  } else {
    resp = false;
  }

  return resp;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstItem = [];
  firstItem = array[array.length - 1];

  return `${firstItem}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let max = Math.max(...array);
  for (let number of array) {
    if (number === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    cat = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    cat = 'cat2';
  } else {
    cat = 'os gatos trombam e o rato foge';
  }
  return cat;
}

// Desafio 8
function fizzBuzz(array) {
  const phrase = [];
  let number = 0;
  for (number of array) {
    let isDivisibleBy3 = number % 3;
    let isDivisibleBy5 = number % 5;
    if (isDivisibleBy3 === 0 && isDivisibleBy5 === 0) {
      phrase.push('fizzBuzz');
    } else if (isDivisibleBy3 === 0) {
      phrase.push('fizz');
    } else if (isDivisibleBy5 === 0) {
      phrase.push('buzz');
    } else {
      phrase.push('bug!');
    }
  }
  return phrase;
}

// Desafio 9
function encode(phrase) {
  let codedPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 'a') {
      codedPhrase += '1';
    } else if (phrase[index] === 'e') {
      codedPhrase += '2';
    } else if (phrase[index] === 'i') {
      codedPhrase += '3';
    } else if (phrase[index] === 'o') {
      codedPhrase += '4';
    } else if (phrase[index] === 'u') {
      codedPhrase += '5';
    } else {
      codedPhrase += phrase[index];
    }
  }
  return codedPhrase;
}
function decode(codedPhrase) {
  let phraseDecoder = '';
  for (let index = 0; index < codedPhrase.length; index += 1) {
    if (codedPhrase[index] === '1') {
      phraseDecoder += 'a';
    } else if (codedPhrase[index] === '2') {
      phraseDecoder += 'e';
    } else if (codedPhrase[index] === '3') {
      phraseDecoder += 'i';
    } else if (codedPhrase[index] === '4') {
      phraseDecoder += 'o';
    } else if (codedPhrase[index] === '5') {
      phraseDecoder += 'u';
    } else {
      phraseDecoder += codedPhrase[index];
    }
  }
  return phraseDecoder;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
