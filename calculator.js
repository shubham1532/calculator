"use strict";

function fromDecimal() {
  var number = document.getElementById("answerD").value;
  console.log(number);
  var ansA = parseInt(number, 10).toString(2);
  var ansB = parseInt(number, 10).toString(8);
  var ansC = parseInt(number, 10).toString(16);



  document.getElementById("answerB").value = ansA;
  document.getElementById("answerO").value = ansB;
  document.getElementById("answerH").value = ansC;

}

function fromBinary() {
  var numA = document.getElementById("answerB").value;

  var ansA = parseInt(numA, 2).toString(10);
  var ansB = parseInt(numA, 2).toString(8);
  var ansC = parseInt(numA, 2).toString(16);

  document.getElementById("answerD").value = ansA;
  document.getElementById("answerO").value = ansB;
  document.getElementById("answerH").value = ansC;

}

function fromOctal() {
  var numB = document.getElementById("answerO").value;

  var ansA = parseInt(numB, 8).toString(10);
  var ansB = parseInt(numB, 8).toString(2);
  var ansC = parseInt(numB, 8).toString(16);

  document.getElementById("answerD").value = ansA;
  document.getElementById("answerB").value = ansB;
  document.getElementById("answerH").value = ansC;


}

function fromHexal() {
  var numC = document.getElementById("answerH").value;

  var ansA = parseInt(numC, 16).toString(10);
  var ansB = parseInt(numC, 16).toString(2);
  var ansC = parseInt(numC, 16).toString(8);

  document.getElementById("answerD").value = ansA;
  document.getElementById("answerB").value = ansB;
  document.getElementById("answerO").value = ansC;


}

document.getElementById("calculateD").addEventListener("click", fromDecimal);
document.getElementById("calculateB").addEventListener("click", fromBinary);
document.getElementById("calculateO").addEventListener("click", fromOctal);
document.getElementById("calculateH").addEventListener("click", fromHexal);
