//Back end logic
var toRomanNumeral = function(number) {
  if (number > 0 && number <= 3999) {
    return true;
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