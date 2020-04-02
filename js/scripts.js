//Back end logic
var toRomanNumeral = function(number) {
  if (number > 0 && number <= 3999) {
    var romanNumeralsDict = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
    var roman = ""
    for (var key in romanNumeralsDict) {
        var value = romanNumeralsDict[key]
      if (value === number) {
        roman = key;
        break;
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