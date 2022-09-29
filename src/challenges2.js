// Desafio 11
function count3x(props) {
  let duplicate;
  for (let number of props) {
    duplicate = props.filter((item) => (item === number));
    if (duplicate.length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
function zeroAndNine(props) {
  for (let number of props) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let mensagem = zeroAndNine(phone);
  if (mensagem) {
    return mensagem;
  }
  mensagem = count3x(phone);
  if (mensagem) {
    return mensagem;
  }

  let firstNumbers = phone.splice(0, 2).toString().replace(/,/g, '');
  let middleNumbers = phone.splice(0, 5).toString().replace(/,/g, '');
  let lesNumbers = phone.toString().replace(/,/g, '');
  return `(${firstNumbers}) ${middleNumbers}-${lesNumbers}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC)) {
    return false;
  }
  if (lineB > (lineA + lineC)) {
    return false;
  }
  if (lineC > (lineA + lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(phrase) {
  const radix = /[1-9]/gi;
  let sumNumber = 0;
  let numberToPhrase = phrase.match(radix);
  for (let number of numberToPhrase) {
    number = Number(number);
    sumNumber += number;
  }
  if (sumNumber === 1) {
    return `${sumNumber} copo de água`;
  }
  return `${sumNumber} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
