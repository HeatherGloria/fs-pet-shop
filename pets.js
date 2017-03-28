//Finally, your application must also handle the `create` subcommand. Only when given an `age`, `kind`, and `name` will it create a record in the database. Remember to convert the `age` into an integer. For example:

'use strict'
const fs = require('fs')
const path = require('path')
const petsjson = path.join(__dirname,'pets.JSON');
const readPets = fs.readFileSync(petsjson, 'utf8')
const pets = JSON.parse(readPets)

const args = process.argv;

const cmd = args[2];

//handles no argument
if(!args[2]) (console.error("Usage: node pets.js [read | create | update | destroy]"), process.exit(1))

//Grabs pet data
fs.readFile(petsjson, 'utf8', (err, petsData) => {
    if (err) throw err

    //parse json data
    const parsePets = JSON.parse(petsData);

    if (cmd === 'read') {

        if (args.length === 3) console.log(parsePets)

        else if (args[3] && (args[3] >= 0) && (args[3] < parsePets.length)) {
            console.log(parsePets[args[3]]);
        }
    }
})

//creating a pet
if (cmd === 'create') {
  if (args[3] === null || args[4] === undefined  || args[5] === undefined) {
    console.error('Usage: node pets.js create AGE KIND NAME')
    process.exit(1)
  } else {
    const newPet = {}
    var age = Number.parseInt(args[3])
    newPet.age = age
    newPet.kind = args[4]
    newPet.name = args[5]
    pets.push(newPet)
    var createPet = JSON.stringify(pets)
    fs.writeFile('./pets.json', createPet, (err) => {
      if (err) throw err;
      console.log(newPet);
      });
  }

}
