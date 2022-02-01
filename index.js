#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
   const rainbowTitle = chalkAnimation.rainbow('Who wants to be no one? \n');

   await sleep();
   rainbowTitle.stop();
   console.log(`
      ${chalk.bgBlue('HOW TO PLAY')}
      I am a process on your computer.
      If you get any question wrong, you will be ${chalk.bgRed('gone')}
      So get all the questions right!!
   `);
}

async function askName() {
   const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name?',
      default() {
         return 'Player';
      },
   });

   playerName = answers.player_name;
}

async function askQuestion1() {
   const answer1 = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'JavaScript was created on 10 days and released on \n',
      choices: [
         'May 23rd 1995',
         'Nov 24th 1995',
         'Dec 4th 1995',
         'Dec 17 1996',
      ],
   });

   return handleAnswer(answer1.question_1 == 'Dec 4th 1995');
}

async function handleAnswer(isCorrect) {
   const spinner = createSpinner('Checking answer...').start();
   await sleep();

   if (isCorrect) {
      spinner.success({ text: `Nice work ${playerName}!` });
   } else {
      spinner.error({ text: `You failed ${playerName}` });
      process.exit(1);
   }
}

async function winner() {
   console.clear();
   const msg = `Congrats, ${playerName} ! ! \n $1 , 0 0 0 , 0 0 0`;

   figlet(msg, (err, data) => {
      console.log(gradient.pastel.multiline(data));
   });
}

await welcome();
await askName();
await askQuestion1();
await winner();
