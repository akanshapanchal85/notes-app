const chalk = require('chalk')

const square = function (a){
    return a*a;
}

console.log(chalk.bgRed(square(4)));

const squareArrowFunction = (x) => {
    return x*x
}

console.log(chalk.bgBlack(squareArrowFunction(4)));

const squareArrow2ndVersion = (z) => z*z;  //only used when function have only single statement

console.log(chalk.bgGreen(squareArrow2ndVersion(4)));

//Arrow function as property on objects---------------------------------------------------------

const event = {
    name : 'Birthday Party',
    guest :['Shourya' , 'Babita' , 'Vikas' , 'Anshi' , 'Chinki'],
    guestList() {
    console.log('Guest List for ' + this.name)
    this.guest.forEach ((guestName) => {
        console.log(guestName + ' is attending my ' + this.name);
    })
        
    }
}
event.guestList()




