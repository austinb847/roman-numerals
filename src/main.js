import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import {toRomanNumeral} from "./roman-numerals.js";


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