import { alphabet, morse } from './classes.js';
// uncomment the following input if you want to test the code
// import { englishStr, morseStr } from './test.js'

const morseToEnglish = (morseStr) => {
    return morseStr
        .split(' ')
        .map(char => {
            return morse[char];
        })
        .join('');
}

const englishToMorse = (englishStr) => {
    return englishStr
        .toLowerCase()
        .split('')
        .map(char => {
            return alphabet[char];
        })
        .join(' ');
}

const runTranslator = (event) => {
    event.preventDefault();
    
    const inputStr = document.getElementById("input").value;
    let outputStr = '';

    if (inputStr.match(/[a-zA-Z]/g)) {
        outputStr =  englishToMorse(inputStr);
    } else {
        outputStr =  morseToEnglish(inputStr);
    }
    
    const printOutput = (outputStr) => {
        const outputHTML = document.getElementById('output');
        const outputTitle = document.getElementById('outputTitle');
        const outputBox = document.getElementById('mainOutput');

        outputHTML.innerHTML = outputStr;
        outputTitle.innerHTML = "Output Message:";
        outputTitle.style.marginBottom = "5px";
        outputTitle.style.fontWeight = "bold";
        outputTitle.style.fontSize = "20px";
        outputTitle.style.marginTop = "30px";
        outputBox.style.border = "1px solid black";
        
    }
    
    printOutput(outputStr)
}

const clearMessage = (event) => {
    const outputHTML = document.getElementById('output');
    const outputTitle = document.getElementById('outputTitle');
    const outputBox = document.getElementById('mainOutput');

    outputHTML.innerHTML = "";
    outputTitle.innerHTML = "";
    outputBox.style.border = null;
}


const translatorForm = document.getElementById('translator');
translatorForm.addEventListener("submit", runTranslator);
translatorForm.addEventListener("reset", clearMessage);




