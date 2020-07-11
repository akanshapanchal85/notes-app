const yargs = require ('yargs')
const chalk = require ('chalk')
const notes = require("./notes.js")
const { argv } = require('yargs')

//yargs version
yargs.version('1.1.0')

//add the notes
yargs.command ({
    command : 'add',
    describe : 'Add the notes app',
    builder : {
        title : {
            describe : 'Note title' ,
            demandOption: true,
            type : 'string'
        },
    
        body : {
        describe: 'This is the body of notes' , 
        demandOption : true , 
        type : 'string'
    }
},
    handler(argv) {
        notes.addNotes(argv.title , argv.body)
    }

})

//remove the notes
yargs.command ({
    command : 'remove',
    describe : 'Remove the notes',
    builder : {
          title : {
              describe : 'Title of notes',
              demandOption :true,
              type : 'string'
          }
    },
    handler (argv) {
          notes.removeNotes(argv.title)
    }
})

//list the notes
yargs.command ({
    command : 'list',
    describe : 'List the notes in the particular order',
    handler (argv){
          notes.listNotes();
    }
})

//read the notes

yargs.command ({
    command : 'read',
    describe : 'Reading the notes',
    builder : {
        title : {
            describe : 'Reading The notes',
            demandOption :true,
            type : 'string'
        }
    },
    handler(argv) {
         notes.readNotes(argv.title)
    }
})

yargs.parse()