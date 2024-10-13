export function add(
  inputString,
  delimiterRegex = /^\/\/(\[.+?\])+\n|^\/\/(.+?)\n/
) {
  let newDelimiter = inputString.match(delimiterRegex);
  let delimiter;

  if (newDelimiter) {
    inputString = inputString.replace(delimiterRegex, '');

    if (newDelimiter[1]) {
      let delimiters = newDelimiter[1]
        .match(/\[.*?\]/g)
        .map((d) => d.slice(1, -1));
      delimiter = new RegExp(
        delimiters
          .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
          .join('|') + '|\n',
        'g'
      );
    } else {
      delimiter = new RegExp(`${newDelimiter[2]}|\n`, 'g');
    }
  } else {
    delimiter = /,|\n/;
  }

  let numsArr = inputString.split(delimiter);
  let negativeNums = [];
  const result = numsArr.reduce((sum, num) => {
    if (num === '') return sum;

    if (isNaN(num)) {
      throw new Error('Invalid input: Non-numeric value detected');
    }
    const number = Number(num);
    if (number < 0) {
      negativeNums.push(number);
      return sum;
    }
    return sum + number;
  }, 0);

  if (negativeNums.length > 0) {
    return `Negative numbers are not allowed: ${negativeNums.join(', ')}`;
  }

  return result;
}
