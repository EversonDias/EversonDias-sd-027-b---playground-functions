// Desafio 11
function generatePhoneNumber(phone) {
  let count = [];
  let compareNumber = [];
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of phone) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index = 0; index < compareNumber.length; index += 1) {
      if (number === compareNumber[index]) {
        for (let n of count) {
          if (n === number) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
        count.push(number);
      }
    }
    compareNumber.push(number);
  }
  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
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
    number = parseInt(number);
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
