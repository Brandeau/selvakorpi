#!/usr/bin/env node

/**
 * Inquirer module
 * @module inquirer
 */
const inquirer = require('inquirer');

/**
 * Key/Value pairs for the SELVA KORPI code
 * 
 * @constant
 * @default
 */
const SELVAKORPI_CODE = Object.freeze({
    a: "i",
    á: "i",
    e: "o",
    é: "o",
    i: "a",
    í: "a",
    k: "s",
    l: "r",
    o: "e",
    ó: "e",
    p: "v",
    r: "l",
    s: "k",
    ú: "u",
    v: "p",
  });

/**
 * @typedef {keyof typeof SELVAKORPI_CODE} SelvaKorpiLetter
 */
/**
 * Array containing the characters belonging to SELVA KORPI
 * 
 * @constant
 * @type SelvaKorpiLetter
 * @default
 */
const LETTERS_TO_CODIFY = Object.keys(SELVAKORPI_CODE);

/**
 * Applies SELVA KORPI to the message
 * 
 * @param {@string} letter - individual letters from the message typed by the user
 * @returns {string}
 */
function applySelvaKorpi(letter){

    if (LETTERS_TO_CODIFY.includes(letter)){
        return SELVAKORPI_CODE[letter];
    }else{
        return letter;
    }
}

/** 
 * @param {string} message - message typed by the user on the console
 * @returns {string}
 */
function applySelvaKorpiToMessage(message){

    return message.toLowerCase()
                .split('')
                .map(element => applySelvaKorpi(element))
                .join('')
}

/**
 * @param {string} processedMessage - message after SELVA KORPI has been applied
 * @returns {string}
 */
function logMessage(processedMessage){

        console.log(`Tu mensaje en selvakorpi es: ${processedMessage}`);
        
}

/**
 * Self-contained inquirer module
 */
const prompt = inquirer.createPromptModule();
prompt([
    {
        type: "input",
        name: "question",
        message: "'¿Qué mensaje le gustaría codificar/decodificar?'"
    }
]).then((answer) => {

    const codifiedMessage = applySelvaKorpiToMessage(answer.question)

    logMessage(codifiedMessage);

    process.exit();
});

