const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt message
console.log("Welcome to the password validator tool! \n");


// Beginning of readline
reader.question("Password must be at least 10 characters, and contain at least one upper case, one lower case, and one number. \n What is the password you would like to validate?", function(input){

//tokens = input.split(' ');

password = input.split(``); 

// upperCase = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];
// lowerCase = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]; 
// passNum = [0,1,2,3,4,5,6,7,8,9];


if (password.length >= 10) {
    console.log(`${password} is at least 10 characters long. Success!`); 

    // if(password.includes(upperCase) === true) {
    //     console.log(`${password} includes an upperCase!`) 
    // } else {
    //     console.log(`${password} Fail! does not includes an upperCase!`) 
    // }

    // if(password.includes([lowerCase]) === true) {
    //     console.log(`${password} includes an lowerCase!`)
    // } else {
    //     console.log(`${password} Fail! does not includes an lowerCase!`)
    // }

    // if(password.includes([passNum]) === true) {
    //     console.log(`${password} includes a number!`)
    //     } else {
    //         console.log(`${password} Fail! does not includes a number!`)
    //     }

} else {
    console.log(`${password} is not at least 10 characters. Fail!`);
}

// if (password.includes([upperCase]) && password.includes(lowerCase) && password.includes(passNum)) {
//     console.log(`${password} has met all conditions! Good work, your password is successful!`)
// } else {
//     console.log(`${password} does not meet minimum requirements. You have failed!!!`)
// }








reader.close(); 

}); 
