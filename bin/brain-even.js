#!/usr/bin/env node
import run from '../src/index.js';
import brainEven from '../games/brain-even.js';

run(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
