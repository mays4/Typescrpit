"use strict";
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('clicked');
});
// let userInput : unknown;
// // let userInput : any;
// let userName : string;
// userInput =5;
// userInput ="noor";
// if(typeof userInput ==='string'){
//   userName = userInput;
//   console.log(userName)
// };
// function generateError(message: string , code: number): never{
//   throw {message:message , errorCode:code};
// }
//  const result = generateError('an error occureed',500)
// generateError('an error occureed',500)
//  console.log(result)
