#!/usr/bin/env node

const inquirer = require('inquirer');

const SELVAKORPI_CODE = {

    's': 'k',
    'e': 'o',
    'é': 'o',
    'l': 'r',
    'v': 'p',
    'a': 'i',
    'á': 'i',
    'k': 's',
    'o': 'e',
    'ó': 'e',
    'r': 'l',
    'p': 'v',
    'i': 'a',
    'í': 'a',
    'ú': 'u'
}

const LETTERS_TO_CODIFY = Object.keys(SELVAKORPI_CODE);

function applySelvakorpi(letter){

    if (LETTERS_TO_CODIFY.includes(letter)){
        return SELVAKORPI_CODE[letter];
    }else{
        return letter;
    }
}

function receiveMessage(data){

        console.log(`Tu mensaje en selvakorpi es: ${data
            .toLowerCase()
            .split('')
            .map(element => applySelvakorpi(element))
            .join('')}`
           );
        process.exit();
}

const prompt = inquirer.createPromptModule();
prompt([
    {
        type: "input",
        name: "question",
        message: "'¿Qué mensaje le gustaría codificar/decodificar?'"
    }
]).then((answer) => {
    receiveMessage(answer.question);
});

