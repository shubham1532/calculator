

"use strict";
function myFunction() {
  var number=parseInt(document.getElementById("input").value);
  console.log(number);
  var resultA = number.toString(2);
  var resultB = number.toString(8);
  var resultC = number.toString(16);

  document.getElementById("answerA").value=resultA;
  document.getElementById("answerB").value=resultB;
  document.getElementById("answerC").value=resultC;

}

document.getElementById("calculate").addEventListener("click", myFunction);
