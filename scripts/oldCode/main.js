import { alphabet, morse } from './objects.js';
// uncomment the following input if you want to test the code
// import { englishStr, morseStr } from './test.js'
const translatorForm = document.getElementById('translator');

const morseToEnglish = (morseStr, languageObj = morse) => {
    return morseStr
        .split(' ')
        .map(char => {
            return languageObj[char];
        })
        .join('');
}

const englishToMorse = (englishStr, languageObj = alphabet) => {
    return englishStr
        .toLowerCase()
        .split('')
        .map(char => {
            return languageObj[char];
        })
        .join(' ');
}

const printOutput = (outputStr) => {
    document.getElementById('output').innerHTML = outputStr;
    document.getElementById('outputTitle').innerHTML = "Output Message:";
    document.getElementById('mainOutput').style.border = "1px solid black";
}

const runTranslator = (event) => {
    event.preventDefault();
    
    const inputStr = document.getElementById("input").value;
    let outputStr = '';

    if (inputStr.match(/[a-zA-Z0-9]/g)) {
        outputStr =  englishToMorse(inputStr);
    } else {
        outputStr =  morseToEnglish(inputStr);
    }
    
    printOutput(outputStr)
}

const clearMessage = (event) => {
    document.getElementById('output').innerHTML = "";
    document.getElementById('outputTitle').innerHTML = "";
    document.getElementById('mainOutput').style.border = null;
}


translatorForm.addEventListener("submit", runTranslator);
translatorForm.addEventListener("reset", clearMessage);
