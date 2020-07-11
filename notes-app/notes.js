const fs = require('fs');
const chalk = require('chalk')


const getNotes = () => {
    return 'My notes!'
}

const addNotes = (title , body) => {
   const notes = loadNotes();
   // const duplicateNotes =  notes.filter ((note) => note.title === title)
   //const dublicateNotes = notes.filter ((note) =>  note.title === title)
   const duplicateNote = notes.find((note) => note.title === title)
   
   if(!duplicateNote){
      notes.push({
         title: title,
         body: body
     })
   
      saveNotes(notes);
      console.log(chalk.bgGreen('New Notes added!'))
   }else{
      console.log(chalk.bgRed('Notes already exists!'))
   }

}

const saveNotes = (notes) => {
   const dataJson = JSON.stringify(notes);
   fs.writeFileSync('jsonFile.json', dataJson)
}

const loadNotes =() =>{
   try{
    const dataBuffer = fs.readFileSync('jsonFile.json')
    const dataJSON = dataBuffer.toString();
    return(JSON.parse(dataJSON))
      } 
   catch (e){
    return [];
   }
}

const removeNotes =(title)=> {
    const rnotes = loadNotes();
    const Notestokeep  = rnotes.filter((note) => note.title !== title)

  if(rnotes.length > Notestokeep.length ){
     saveNotes(Notestokeep)
     console.log(chalk.bgGreen("Note-Removed!"));
  }else{
     console.log(chalk.bgRed('No Note found!'))
  }
}

const listNotes = () => {

   const notes = loadNotes()

   console.log(chalk.yellow('your notes '));

   notes.forEach(note => {
      console.log(note.title)
   });

   // const notesList = this.notes.forEach(note => {
   //    console.log(chalk.yellow('your notes : ' + this.notesList)) 
   // });
  
}

const readNotes = (title) => {
   const notes = loadNotes()
   const note = notes.find((note)=> note.title=== title)
   if(note){
      console.log(chalk.inverse(note.title))
      console.log(note.body)
   }else{
      console.log(chalk.inverse.bgRed('NO notes found'))
   }
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}