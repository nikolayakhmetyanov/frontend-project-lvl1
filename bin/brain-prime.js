#!/usr/bin/env node
import run from '../src/index.js';
import brainPrime from '../games/brain-prime.js';

run(brainPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
