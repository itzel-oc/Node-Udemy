const validator= require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs= require('yargs');


//customize yargs version
yargs.version('1.1.0');


//Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading the note')
    }
})

//Create List command

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing notes')
    }
})
//Add, remove, read, list

yargs.parse();
