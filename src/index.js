const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let i = 0, j = 10; j <= expr.length; i += 10, j += 10) {
    const charBit = expr.slice(i, j);
    let morse = "";
    if (charBit === "**********") morse = " ";
    else {
      for (let a = 0, b = 2; b <= 10; a += 2, b += 2) {
        const charCode = charBit.slice(a, b);
        if (charCode === "10") morse += ".";
        else if (charCode === "11") morse += "-";
      }
    }
    result += morse === " " ? morse : MORSE_TABLE[morse];
  }
  return result;
}

module.exports = {
  decode,
};
