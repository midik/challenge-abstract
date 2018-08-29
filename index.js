import EventEmitter from 'events';

// import db from 'interfaces/db';
import Network from './interfaces/network';

// import app from 'lib/app';
// import validator from 'lib/validator';

// ---

const source = new EventEmitter();

const network = new Network(source);


// send the data to network here


// external data source (mock)
source.emit('send', 'blabla');
source.emit('send', 'blabla1');
source.emit('send', 'blabla2');
source.emit('send', 'blabla3');
