export var toRomanNumeral = function(number) {
  if (number > 0 && number <= 3999) {
    var romanNumeralsDict = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V:5, IV: 4, I: 1};
    var roman = "";

    for (var key in romanNumeralsDict) {
      /* console.log(key);
      console.log(romanNumeralsDict[key]); */
      while(number >= romanNumeralsDict[key]) {
        roman = roman + key;
        number = number - romanNumeralsDict[key];
      }
    }
    
    return roman;

  } else {
    return false;
  }
};