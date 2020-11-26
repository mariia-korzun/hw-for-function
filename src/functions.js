function isBigger(a, b) {
  return a > b
};

function isSmaller(a, b) {
  return !isBigger(a, b)
};

function getMin(...numbers) {
  return Math.min(...numbers)
}

function makeNumber(string) {
  return (string.match(/\d/g) || []).join('')
};

function countNumbers(string) {
  string = makeNumber(string)
  let result = {}
  while (string.length > 0) {
    let regExp = new RegExp(`${string[0]}`, 'g')
    let array = string.match(regExp)
    result[array[0]] = array.length
    string = string.split(array[0]).join('')
  }
  return result
};


function pipe(number, ...functions) {
  functions.forEach(func => number = func(number))
  return number
}



function isLeapYear(date) {
  let dateLeap = new Date(date)
  if (isNaN(dateLeap)) { return 'Invalid Date' }
  let year = dateLeap.getFullYear()
  if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
    return `${year} is a leap year`
  }else{
    return `${year} is not a leap year`
  }
}



module.exports = {
  isBigger,
  isSmaller,
  makeNumber,
  countNumbers,
  getMin,
  pipe,
  isLeapYear,
};
