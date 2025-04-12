// navigation fuction

const mobile_nav = document.querySelector(".mobile-version");
const nav_header = document.querySelector(".header-section");
const toggleNavbar = () => {
    nav_header.classList.toggle('active');
};

mobile_nav.addEventListener('click', () => toggleNavbar());


// footer function

// const footer_nav = document.querySelector("link-toggle1");
// const nav_footer = document.querySelector(".usefull-link");
// const toggleFooterbar = () => {
//     nav_footer.classList.toggle ('active');
// };


// footer_nav.addEventListener('click', () => toggleFooterbar());


// function fnCommonFooterLinkHandeler(footerContainerId) {
//     $(footerContainerId + ' .footer--toggle--bar').click (function () {
//         $(footerContainerId + ' .usefull-link').toggle();
//     })
// }


// $(document).ready(function () {
//     $('.usefull-link').hide();
//     fnCommonFooterLinkHandeler('#link-toggle1');
//     fnCommonFooterLinkHandeler('#link-toggle2');
//     fnCommonFooterLinkHandeler('#link-toggle3');
// });


// let name = 'rahul'
// console.log(name);

// let myName = "rahul"
// console.log(myName);


// let num = 100
// console.log(num);

// let isadmin = true
// console.log(isadmin);


// let myage
// console.log(myage);

// let myage1 = null
// console.log(myage1);


// BigInt = 7845985696
// console.log(BigInt);

// types of operator:
// 1. assigment op =
// 2. arithemetic op + - * /
// 3. comperison op == (loosly) , === (strict), >== ,  <== , !=

// 4. logical op
// &&(logical AND) , (logical OR)|| , (logical NOT)!

// 5. conditional op 
// if -else

// 6. ternery op ?:


// let a = 20
// let b = 5

// console.log(a + b);
// console.log(a - b);

// console.log(a * b);
// console.log(a / b);


// different between ==(loosly) and === (stickly)?
// double == only compare number & === compare number with datatype

// example
// let num1 = 30
// let num2 = '30'
// console.log(num1 == num2);
// console.log(num1 === num2);

// 5. condition op
// calcullate voter/no voter using if else

// universal structure

// if (conditioin) {
//     console.log();
// }
// else {
//     console.log();
// }

// let age = 18

// if (age => 18) {
//     console.log('voter');
// } else {
//     console.log('non-voter');
// }



// let num5 = 10

// if (num5 % 2 == 0) {
//     console.log('even');
// }
// else {
//     console.log('odd');
// }



// let leap = 1996

// if (leap % 4 == 0) {
//     console.log('leap year');
// }
// else {
//     console.log('not leap year');
// }



// ternary op/ conditional op:
// ?:
//condition?printmsg:printmsg

// let age1 = 19;
// (age1 => 18) ? console.log('voter') : console.log('non-voter')

// loop: doing a same task a repeting way, until condition was not faulse, lopop are three type 
// 1 loop
// 2 while loop
//do-while-loop

// for loop :
// basic structure of for loop.


// for (intialization; Condition; increment/decrement){
//     body of loop
// }

// print 1 2 3 4 5 using for loop

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }


// print your name 5 time

// const nameOf = 'suman'

// for (let s = 1; s <= 5; s++) {
//     console.log(nameOf);
// }


// while loop
// let i = 1
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let s = 1
// while (s <= 9) {
//     console.log(s);
//     s += 2;
// }


// for and while is entry Controller, do-while is exit controlled.

// do-while:
// let j = 10

// do {
//     console.log(j);
//     j--;
// }
// while (j >= 1);



// let number = 1
// switch (number) {
//     case 1:
//         console.log("indra");

//         break;

//     case 2:
//         console.log("suman");

//         break;

//     case 3:
//         console.log("swarnomoni");

//         break;

//     case 4:
//         console.log("priyanjan");

//         break;
// }