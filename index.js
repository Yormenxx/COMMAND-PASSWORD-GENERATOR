import inquirer from "inquirer";
import chalk from 'chalk';
import figlet from "figlet";

figlet("PASSWORD GENERATOR", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
});


let letters ='abcdefghijklmñnopqrstvwxyz';

const upperLetters = letters.toUpperCase();
const lowerLetter = letters.toLowerCase();
const numbers ="1234567890";
const specialChars ='!#$%&/()=?¡';

let CHARS = upperLetters + lowerLetter + numbers + specialChars;


function generatePassword(len){


    let password= "";

    for(let i = 0; i < len; i++ ){
        password += CHARS.charAt(Math.floor(Math.random() * CHARS.length)) 
    }

    return password;
}



// const longitud  =20
// console.log(`La contraseña es: `, generatePassword(longitud))

const questions = [
    {
        type: 'input',
        name:"password_length",
        message: chalk.blue("Input the password length required"),
      }
]

inquirer.prompt(questions).then((answers) => {

    const password_length = answers.password_length
    if(password_length==0){
        console.log(chalk.bgMagenta(`Password can´t be generated`))
        return;
    }

  console.log(chalk.yellow.underline.bold(`La contraseña es: `, generatePassword(answers.password_length)))
  });





