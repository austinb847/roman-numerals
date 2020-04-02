//Back end logic
var toRomanNumeral = function(number) {
  return number
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