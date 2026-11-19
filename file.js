
// function generatePassword() {

//     // Characters to use
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!";

//     // Password length
//     let passwordLength = 8;

//     // Empty password
//     let password = "";

//     // Generate password
//     for (let i = 0; i < passwordLength; i++) {

//         let randomNumber = Math.floor(Math.random() * characters.length);

//         password += characters[randomNumber];

//     }

//     // Display password
//     document.getElementById("password").value = password;

// }

function showPassword(){
    let password = "";
    input.type === "password" ? (input.type = "text") : (input.type = "password");
}

document.getElementById("password");
