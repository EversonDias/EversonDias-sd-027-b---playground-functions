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
function isDivisible(number, phrase) {
  if (number % 3 === 0 && number % 5 === 0) {
    phrase.push('fizzBuzz');
  } else if (number % 3 === 0) {
    phrase.push('fizz');
  } else if (number % 5 === 0) {
    phrase.push('buzz');
  } else {
    phrase.push('bug!');
  }
  return phrase;
}
function fizzBuzz(array) {
  const phrase = [];
  for (let number of array) {
    isDivisible(number, phrase);
  }
  return phrase;
}

// Desafio 9
function codedLetter(props) {
  if (props === 'i') {
    return '3';
  }
  if (props === 'o') {
    return '4';
  }
  if (props === 'u') {
    return '5';
  }
  return props;
}
function encode(phraseEncoder) {
  let phrase = '';
  for (let litter of phraseEncoder) {
    if (litter === 'a') {
      phrase += '1';
    } else if (litter === 'e') {
      phrase += '2';
    } else {
      phrase += codedLetter(litter);
    }
  }
  return phrase;
}

function decodeLetter(props) {
  if (props === '3') {
    return 'i';
  }
  if (props === '4') {
    return 'o';
  }
  if (props === '5') {
    return 'u';
  }
  return props;
}
function decode(codedPhrase) {
  let phrase = '';
  for (let litter of codedPhrase) {
    if (litter === '1') {
      phrase += 'a';
    } else if (litter === '2') {
      phrase += 'e';
    } else {
      phrase += decodeLetter(litter);
    }
  }
  return phrase;
}

// Desafio 10
function techList(arrayTech, name) {
  const list = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let tech of arrayTech.sort()) {
    list.push({ name, tech });
  }
  return list;
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
