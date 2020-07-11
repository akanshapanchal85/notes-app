// const fs = require('fs')


// const book = {
//     title : 'EGO IS THE ENEMY',
//     author : 'Ryan holiday'
// }


// const bookJSON = JSON.stringify(book);

//fs.writeFileSync('1-json.json' , bookJSON)

// const dataBuffer  = fs.readFileSync('1-json.json')

// const dataString = dataBuffer.toString()

// const stringifyData = JSON.parse(dataString);

// console.log(stringifyData.title)



// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseDATA = JSON.parse(JSON.stringify(book)) //------------------------VERY IMPORTANT-------------------------------
// console.log (parseDATA.author)

const fs = require('fs');
const { userInfo } = require('os');


const dataBuffer = fs.readFileSync('1-json.json')
const dataSrting = dataBuffer.toString();
const parsedD = JSON.parse(dataSrting);

parsedD.name = 'Simran';
parsedD.age = 20;

const nameJSON = JSON.stringify(parsedD)
console.log(nameJSON)

fs.writeFileSync('1-json.json' ,nameJSON )
