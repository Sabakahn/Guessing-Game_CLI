#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() *10 + 1);
const answer = await inquirer.prompt([
    {
    name: "userGuessedNumber",
    type: "number",
    message : "Pleaze Guess a number between 1-10",
},
]);
if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations you Guessed right number");
    }else{
        console.log("you Gussed wrong number");
    }
