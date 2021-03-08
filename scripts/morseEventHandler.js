const {
    letterTranslate,
    splitStr,
    joinArrToStr,
    isStringEnglish,
    runTranslator
  } = require('./morse.js');

const translatorForm = document.getElementById('translator');

// printOutput -- edits the DOM -- THIS IS NOT TESTABLE
const printOutput = (event) => {
    event.preventDefault();
    const inputStr = document.getElementById("input").value;
    
    const outputStr = runTranslator(inputStr);

    document.getElementById('output').innerHTML = outputStr;
    document.getElementById('outputTitle').innerHTML = "Output Message:";
    document.getElementById('mainOutput').style.border = "1px solid black";
}

// clearMessage ---> it clears the DOM-- THIS IS NOT TESTABLE
const clearMessage = (event) => {
    document.getElementById('output').innerHTML = "";
    document.getElementById('outputTitle').innerHTML = "";
    document.getElementById('mainOutput').style.border = null;
}


// The eventHandler --> when clicked it will run the script
translatorForm.addEventListener("submit", printOutput);
// The eventHandler --> when clicked it will clear the output DOM
translatorForm.addEventListener("reset", clearMessage);