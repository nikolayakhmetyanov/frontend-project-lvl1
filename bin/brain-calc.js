#!/usr/bin/env node
import run from '../src/index.js';
import brainCalc from '../games/brain-calc.js';

run(brainCalc, 'What is the result of the expression?');
