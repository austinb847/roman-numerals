//Back end logic
var toRomanNumeral = function(number) {
  if (number > 0 && number <= 3999) {
    var romanNumeralsDict = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1};
    var roman = [];
    var keys = Object.keys(romanNumeralsDict);
    var currValue;
    var index;
    var count = 1;
    
    for (var numeral in romanNumeralsDict) {
      currValue = romanNumeralsDict[numeral];
      index = keys.indexOf(numeral);

      while(number >= currValue) {
        if(count < 4) {
          roman.push(numeral)
        }
      }
    }
    
    
    
    return roman;

  } else {
    return false;
  }
};






//Front end logic
$(document).ready(function() {
  $("#roman-numeral").submit(function(event) {
    event.preventDefault();
    var userNum = parseInt($("input#userNum").val());
    var result = toRomanNumeral(userNum);
    $(".numInput").text(userNum);
    $(".romanNumeral").text(result);
    $("#result").show();
  });

});