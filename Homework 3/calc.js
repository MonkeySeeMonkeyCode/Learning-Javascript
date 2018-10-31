var answer;
var repeater = "";
var input = 123;
var operator = "";
var firstString = "";
var secondString = "";
var clearFlag;
var equalFlag = "";

function fsStrings(num) {
    if (equalFlag!=="") {
        clearButton();
    }
    if(operator=="") {
        firstString = firstString.concat(num);
        $('#display').val(firstString);
        //console.log(firstString);
    }
    else {
        secondString = secondString.concat(num);
        $('#display').val(secondString);
        //console.log(secondString);
    };
};

function equalButton(){
        //handles equal button
        //spamming equals
        if (firstString!==""&&secondString==""&&repeater!=="") {
            //console.log("spamming equals button")
            //console.log(firstString,secondString,repeater,operator);
            secondString = repeater;
            operatorString(operator);
        }
        else if (firstString!==""&&operator!==""&&secondString=="") {
            //console.log("do you get here??");
            equalFlag="";
        }
        else if (firstString!==""&&secondString!==""&&operator!==""){
            operatorString(operator);
        }
        else if (equalFlag=='='&&operator!=="") {
            //$('#display').val(operator);
        }
        else if (equalFlag=='='&&secondString=="") {
            $('#display').val(firstString);
        }
}

function operatorString(op) {
    //handles operations on 1st and 2nd strings
    if(firstString!==""&secondString!==""){
        if(operator=='+') {
            answer = Number(firstString)+Number(secondString);
        }
        else if(operator=='-') {
            answer = Number(firstString)-Number(secondString);
        }
        else if(operator=='*') {
            answer = Number(firstString)*Number(secondString);
        }
        else if(operator=='/') {
            answer = Number(firstString)/Number(secondString);
        }
        firstString=answer;
        repeater = secondString;
        secondString="";
        $('#display').val(firstString);
        operator = op;
    }
    //sets operator
    else {
        operator = op;
        equalFlag = "";
        //$('#display').val(operator);
    }
};

function clearButton() {
    firstString=secondString=input=operator=answer=equalFlag=repeater='';
}

$('#button0').click(function() {
    //console.log("Button 0 was clicked")
    fsStrings($('#button0').val())
})

$('#button1').click(function (){
    //console.log("Button 1 was clicked")
    fsStrings($('#button1').val())
})

$('#button2').click(function() {
    //console.log("Button 2 was clicked")
    fsStrings($('#button2').val())
})

$('#button3').click(function() {
    //console.log("Button 3 was clicked")
    fsStrings($('#button3').val())
})

$('#button4').click(function() {
    //console.log("Button 4 was clicked")
    fsStrings($('#button4').val())
})

$('#button5').click(function() {
    //console.log("Button 5 was clicked")
    fsStrings($('#button5').val())
})

$('#button6').click(function() {
    //console.log("Button 6 was clicked")
    fsStrings($('#button6').val())
})

$('#button7').click(function() {
    //console.log("Button 7 was clicked")
    fsStrings($('#button7').val())
})

$('#button8').click(function() {
    //console.log("Button 8 was clicked")
    fsStrings($('#button8').val())
})

$('#button9').click(function() {
    //console.log("Button 9 was clicked")
    fsStrings($('#button9').val())
})

$('#addButton').click(function() {
    //console.log("Button + was clicked")
    operatorString('+')
})

$('#subtractButton').click(function() {
    //console.log("Button - was clicked")
    operatorString('-')
})

$('#multiplyButton').click(function() {
    //console.log("Button * was clicked");
    operatorString('*');
})

$('#divideButton').click(function() {
    //console.log("Button / was clicked");
    operatorString('/');
})

$('#equalsButton').click(function() {
    //console.log("Button = was clicked");
    equalFlag='=';
    equalButton();
    //operatorString();
})

$('#clearButton').click(function() {
    //console.log("Button Clear was clicked");
    $('#display').val('');
    clearButton();
    //firstString=secondString=input=operator=answer=equalFlag=repeater='';
})