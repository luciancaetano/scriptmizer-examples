#!/usr/bin/env ts-node-script
import { runScripts } from 'scriptmizer';

import './run-ls';

runScripts(process.argv, 'scriptmizer-example');
