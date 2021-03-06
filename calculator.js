function getHistory() {
    return document.getElementById("history-value").textContent;
}
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } 
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
function translate(num){
    return document.getElementById("num1").value  = +(Math.round(num + "e+2")  + "e-2");
}
function getFormattedNumber(num) {
    var num = num.toString(); 
    if (num == "-") {
        return "";
    }
    else if (num.includes(".")) {
        return num;
    }
    var n = Number(num);
    var value = n;
    return value;
}
function reverseNumberFormat(num) {
    return (num);
}
var operator = document.getElementsByClassName("operator");
const tag = document.querySelector(".calculator")        


for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        
        if (this.id == "clear") {
            output = "0";
            printOutput(output);
            printHistory("");
        }
        else if (this.id == "%") {
            var output = getOutput()
            let tempout
            let outpercent
        
            var history = getHistory()
            theOP = history[history.length-1]
            function firstNum (x){
                let xy = ""
                for(i=0; i < x.length-1;i++){
                    xy += x[i]  
                };return xy
            }
            console.log(firstNum(history))
            console.log(output)
            outpercent = output
            tempout = eval(`${firstNum(history)} * (${(output)}/100)`)
            output =eval(`${firstNum(history)} ${theOP} ${tempout}`)
            printOutput(output);
            printHistory(`${firstNum(history)} ${theOP} (${outpercent}%)`)
        }
        else if (this.id === "negative"){
            var output = reverseNumberFormat(getOutput()).toString();
            output = eval(output+"*-1" );
            printOutput(output);
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output.length > 1) {//if output has a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
            else if (output.length === 1){
                printOutput(0);
            }
            
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput((Math.round(result + "e+2")  + "e-2"));
                    translate(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;

                    printHistory(history);
                    printOutput("");
                }
            }
        }

    });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {

        var output = reverseNumberFormat(getOutput());
        if (output != NaN) { //if output is a number
            output = output + this.id;
            printOutput(output);
        }



    });
}