// Before a credit card is submitted to a financial institution, it generally
// makes sense to run some simple reality checks on the number. The numbers are
// a good length and it's common to make minor transcription errors when the
// card is not scanned directly.

// The first check people often do is to validate that the card matches a known
// pattern from one of the accepted card providers.

// Here's (a pretend example of) how to test if a card is valid or not:

// - Starting with the first digit and continuing with every other digit, multiply by 2
// - Sum all doubled and untouched digits in the number
// - If that sum is a multiple of 10, the number is valid

// Step 0: 4 4 0 8 0 4 1 2 3 4 5  6 7  8 9  3
// Step 1: 8 4 0 8 0 4 2 2 6 4 10 6 14 8 18 3
// Step 2: 8+4+0+8+0+4+2+2+6+4+10+6+14+8+18+3 = 70
// Step 3: 70 % 10 == 0

// That card is valid.

// One more example, 4417 1234 5678 9112:

// Step 0: 4 4 1 7 1 2 3 4 5  6 7  8 9  1 1 2
// Step 1: 8 4 2 7 2 2 6 4 10 6 14 8 18 1 2 2
// Step 2: 8+4+2+7+2+2+6+4+10+6+14+8+18+1+2+2 = 69
// Step 3: 69 % 10 != 0

// Write a function `isValidCC(ccnum)` that takes a string and returns true if the credit card entered is valid, false otherwise.

function isValid(ccnum) {
//   var noSpaces = ccnum.replace(/\s/g, '');
//   var arrCCnum = noSpaces.split('');
//   var someDoubled = arrCCnum.map(function(current, index, array){
//     if (index % 2 === 0) {
//       return Number(current) * 2;
//     } else {
//       return Number(current);
//     }
//   });
//   var total = someDoubled.reduce(function(rvs, current, index, array){
//     return rvs+current;
//   }, 0);
//   var divByTen = total % 10 === 0;
//   return divByTen;

  return ccnum
     .replace(/\s/g, '')
     .split('')
     .map(function(current, index, array){
        if (index % 2 === 0) {
        return Number(current) * 2;
        } else {
        return Number(current);
      }
      })
     .reduce(function(rvs, current, index, array){
        return rvs+current;
      }, 0) % 10 === 0;
}

// tests
// ---
console.assert(isValid("4408 0412 3456 7893") === false)
console.assert(isValid("5000 0000 0000 0000") === true)
console.assert(isValid("4408 0412 3456 2193") === true)
