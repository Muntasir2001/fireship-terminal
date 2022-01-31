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

await welcome();
