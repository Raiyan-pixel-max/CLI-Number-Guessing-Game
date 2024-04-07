#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to Raiyan's CLI Guessing Game\n\t")

let randomNumber = Math.floor(Math.random()  * 6 + 1)

let answer = await inquirer.prompt([
    {
        name: "userGuessedNum",
        type: "number",
        message: "Enter your guess number (from 1 to 6):"
    }
])

if (randomNumber === answer.userGuessedNum){
    console.log(`Congratulations You answered ${answer.userGuessedNum} is an correct number`)

}

else{
    console.log("Try again, the number is wrong")
}
 console.log(`The random number was ${randomNumber}`)