var numDisplay = document.getElementById("display");
var numButtons = document.getElementsByClassName("num");
var equals = document.getElementById("equals");
var addUp = document.getElementById("add");
var subtraction = document.getElementById("subtract");
var multiplication = document.getElementById("multiply");
var division = document.getElementById("divide");
var clear = document.getElementById("clear");

document.addEventListener("DOMContentLoaded", function(){
for(i = 0; i< numButtons.length; i++){
  numButtons[i].addEventListener("click", function(){
   var value = this.value;
   var textNode = document.createTextNode(value);
    numDisplay.appendChild(textNode);
   console.log(numDisplay.innerHTML);
   clear.addEventListener("click", function(){
   numDisplay.innerHTML = "";
   numButtons.value = 0;
    });
  });
}

    subtraction.addEventListener("click" , function(){
    var currentNumbers = numDisplay.innerHTML;
    console.log(currentNumbers);
    var nums = parseFloat(currentNumbers);
    numDisplay.innerHTML = "";
    equals.addEventListener("click",function subtractionEvent(){
      var secondCurrentNumbers = numDisplay.innerHTML;
      var secondNums = parseFloat(secondCurrentNumbers);
      var total = nums - secondNums;
      numDisplay.innerHTML = total;
      equals.removeEventListener("click",subtractionEvent);
    });
 });

  addUp.addEventListener("click", function(){
    var currentNumbers = numDisplay.innerHTML;
    var nums = parseFloat(currentNumbers);
    numDisplay.innerHTML = "";
     equals.addEventListener("click",function addEvent(){
      var secondCurrentNumbers = numDisplay.innerHTML;
      var secondNums = parseFloat(secondCurrentNumbers);
      var total = nums + secondNums;
      numDisplay.innerHTML = total;
      equals.removeEventListener("click",addEvent);

    });
  });


  division.addEventListener("click" , function division(){
    var currentNums = numDisplay.innerHTML;
    var nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function divisionEvent(){
      var secondCurrentNums = numDisplay.innerHTML;
      var secondNums = parseFloat(secondCurrentNums);
      var total = nums / secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
      equals.removeEventListener("click",divisionEvent);

    });
  });

    multiplication.addEventListener("click" , function multiplication(){
    var currentNums = numDisplay.innerHTML;
    var nums = parseFloat(currentNums);
    numDisplay.innerHTML = "";
    equals.addEventListener("click" , function multiplicationEvent(){
      var secondCurrentNums = numDisplay.innerHTML;
      var secondNums = parseFloat(secondCurrentNums);
      var total = nums * secondNums;
      console.log(total);
      numDisplay.innerHTML = total;
      equals.removeEventListener("click",multiplicationEvent);

    });
  });
});
