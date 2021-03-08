// Specs:
// This script should take a string (morse or englis) when the submit button is clicked  and translate it english or morse, respectively
// The functions I need:
const { alphabet, morse} = require('./objects.js');


/**
 * letterTranslate --> takes an single character as an input and a translate object (i.e., an object that converts english to morse) and outputs the translation of that object
 * @param {string} letter - a singe letter/ charater
 * @param {object translateObject} - object that translate from ome langauge to other (morse to english or english to morse)
 * @returns {string} translatedLetter - Single letter / character
 */
const letterTranslate = (letter, translateObject) => {
    if (!translateObject.hasOwnProperty(letter)) {
       throw new Error('Key does\'t exist'); 
    };

    return translateObject[letter];
};


/**
 * SplitStr --> takes the input string and splits it by work and character and outputs a 2D array
 * @param {string} inputStr- string of input text from the DOM
 * @param {string} wordDel -- breaks up the works
 * @param {string} charDel -- break the charaters in a word
 * @returns {array}  - 2D array the splited by word and character
 */
const splitStr = (inputStr, wordDel, charDel) => {
    if (typeof inputStr !== 'string') {
        throw new Error('Input is not a string');
    }
    
    if (typeof wordDel !== 'string') {
        throw new Error('Input is not a string');
    }

    if (typeof charDel !== 'string') {
        throw new Error('Input is not a string');
    }

    return inputStr.split(wordDel).map(word => word.split(charDel));
};


/**
 * joinArrToStr --> takes the input 2d array and joins it into a string
 * @param {array} inputArr- 2D array of characters 
 * @param {string} wordDel - breaks up the works
 * @param {string} charDel - break the charaters in a word
 * @returns {array}  - 2D array the splited by word and character
 */

const joinArrToStr = (inputArr, wordDel, charDel) => {
    if (inputArr.constructor !== Array || inputArr.length != 2) {
        throw new Error('Input is not a 2D Array');
    };
    
    if (typeof wordDel !== 'string') {
        throw new Error('Input is not a string');
    };

    if (typeof charDel !== 'string') {
        throw new Error('Input is not a string');
    };
    console.log(inputArr.map(word => word.join(charDel)).join(wordDel))
    return inputArr.join(charDel).join(wordDel);
}


/**
// isStringEnglish --> this function identifies the langauage that is inputed
* @param {string} inputStr - string of input text from the DOM
 * @returns {boolean}  - true if the string is english, false if it is morse
 */

const isStringEnglish  = (inputStr) => {
    if (typeof inputStr !== 'string') {
        throw new Error('Input is not a string');
    };

    const englishRegex = /[a-zA-Z0-9]/g;

    return inputStr.match(englishRegex);
}

/**
// runTranslator --> this function translate morse to english or english to mores
* @param {string} inputStr - string of input text from the DOM
* @param {Object} morse - object translating morse to english
* @param {alphabet} alphabet - object translating english to morse
 * @returns {string} translated string
 */
const runTranslator = (inputStr, morseObj = morse, englishObj = alphabet) => {
    const englishWordDel = ' ';
    const englishCharDel = '';
    const morseWordDel = ' / ';
    const morseCharDel = ' ';

    if (isStringEnglish(inputStr)) {
        const inputSplitArr = splitStr(inputStr.toLowerCase(), englishWordDel, englishCharDel);

        const inputTranslateArr = inputSplitArr.map(word => 
            word.map(letter => letterTranslate(letter, englishObj)));
        
        console.log(inputTranslateArr)
        return joinArrToStr(inputTranslateArr, morseWordDel, morseCharDel);
    };
    
    const intputSplitStr = splitStr(inputStr, morseWordDel, morseCharDel);
    const inputTranslateArr = letterTranslate(intputSplitStr, morseObj);
    return joinArrToStr(inputTranslateArr, morseWordDel, morseCharDel);
}

module.exports = {
    letterTranslate,
    splitStr,
    joinArrToStr,
    isStringEnglish,
    runTranslator
}