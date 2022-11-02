// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
//
//   All non-vowels including non alpha characters (spaces,commas etc.) should be included.
//
//   Examples:
//
// vowelOne( "abceios" ) // "1001110"
//
// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
  let spl = s.split('')
  let o = '';
  for (let i = 0; i <= spl.length; i++) {
    if (spl[i] === 'a' || spl[i] === 'i' || spl[i] === 'e' || spl[i] === 'o' || spl[i] === 'u' || spl[i] === 'A' || spl[i] === 'I' || spl[i] === 'E' || spl[i] === 'O' || spl[i] === 'U' ) {
      o += 1;
    } else {
      o += 0;
    }}
  return o = o.substring(0, o.length - 1); }