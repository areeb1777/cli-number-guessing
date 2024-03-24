#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result

const randomNumber: number = Math.floor(Math.random() * 10 + 1 );

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess number: ",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations! You Won");
} else {
  console.log("You Lose");
}
