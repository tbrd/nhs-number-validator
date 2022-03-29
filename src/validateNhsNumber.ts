
function multiplyByPosition(digit: string, index: number): number {
  // multiple each digit by 11  minus its position (indexed from 1)
  return Number(digit) * (11 - (index + 1));
}


function addTogether(previousValue: number, currentValue: number): number {
  return previousValue + currentValue;
}


export const validateNhsNumber = (nhsNumber: string) => {
  // pre-flight checks
  if (
    nhsNumber === undefined ||
    nhsNumber === null ||
    Number.isNaN(Number(nhsNumber))
  ) {
    return false;
  }

  // Step 1: Multiply each of the first 9 numbers by (11 - position indexed from 1)
  // Step 2: Add the results together
  // Step 3: Divide the total by 11 to get the remainder
  const nhsNumberAsArray = nhsNumber.split('');
  const remainder = nhsNumberAsArray.slice(0,9)
                            .map(multiplyByPosition)
                            .reduce(addTogether, 0) % 11;

  let checkDigit = 11 - remainder;

  // replace 11 for 0
  if(checkDigit === 11){
    checkDigit = 0;
  }

  const providedCheckDigit = nhsNumberAsArray[9];

  // Do the check digits match?
  return checkDigit === Number(providedCheckDigit);
}


