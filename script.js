$(document).ready(function() {

    //var width = $(window).width();
     //should get calc width directly using jquery
    //$(".calculator").css("margin-left", (($(window).width()/2) - 140));

    var history = "";

    var currentDisplay = "";
    var value1;
    //var value2;
    var result;
    var operator;

    var operatorPressed = false;
    var equalsPressed = false;

    var operatorCount = 0;

    $(".value").on("click", function() {

        if (operatorPressed === true) {
            currentDisplay = "";
            operatorPressed = false;
        }
        else if (equalsPressed === true) {
            currentDisplay = "";
            value1 = undefined;
            equalsPressed = false;
        }

        currentDisplay += this.innerText;
        $("#display").text(currentDisplay);

    });

    $(".operator").on("click", function () {
        operatorPressed = true;
        operatorCount++;

        if (operatorCount === 1) {
            value1 = parseFloat(currentDisplay);
        }
        else {
            var value2 = parseFloat(currentDisplay);

            if (operator === "+") {
                value1 += value2;
            }
            else if (operator === "-") {
                value1 -= value2;
            }
            else if (operator === "x") {
                value1 *= value2;
            }
            else if (operator === "÷") {
                value1 /= value2;
            }
            else {
                console.log("Oops a daisy: " + operator);
            }

            console.log(value1);
        }
        operator = this.innerText;

    });

    //should convert inside of following func into named function for reuse in operator method when chaining
    $("#equals").on("click", function () {
        //what if no operator or second value entered?
        var value2 = parseFloat(currentDisplay);
        equalsPressed = true;
        operatorCount = 0;

        if (value1 === undefined) {
            currentDisplay = value2;
        }
        else if (operator === "+") {
            currentDisplay = value1 + value2;
        }
        else if (operator === "-") {
            currentDisplay = value1 - value2;
        }
        else if (operator === "x") {
            currentDisplay = value1 * value2;
        }
        else if (operator === "÷") {
            currentDisplay = value1 / value2;
        }
        else {
            console.log("Oops: " + operator);
        }

        $("#display").text(currentDisplay);
    });

    $("#ac").on("click", function () {
        //completely resets calculator
        currentDisplay = "";
        value1 = undefined;
        result = undefined;
        operator = undefined;
        operatorPressed = false;
        equalsPressed = false;
        operatorCount = 0;

        $("#display").text("0");

    });

});