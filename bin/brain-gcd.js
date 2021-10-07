#!/usr/bin/env node
import run from '../src/index.js';
import brainGcd from '../games/brain-gcd.js';

run(brainGcd, 'Find the greatest common divisor of given numbers.');
