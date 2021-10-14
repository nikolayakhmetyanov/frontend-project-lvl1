#!/usr/bin/env node
import run from '../src/index.js';
import { game, regulation } from '../src/games/brain-gcd.js';

run(game, regulation);
