import { assign } from 'lodash';
import { start_server } from './server';
import { Program } from './cli';
import { get_default_config } from './config';

const program: Program = new Program();
const programOptions = program.getOptions();
const options = assign(get_default_config(), programOptions);

program.start();
start_server(options);