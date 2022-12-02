'use strict'
/* create a function that generates random colors using math.random  and math.trunc 
 multiply it by hexacode ( 16777215) is a number representing rgba  then turn it to string by using toString()
 */ 

 const randomColors = () => {
    const randomColors = "#" + Math.trunc(Math.random() * 16777215).toString(16);
    return randomColors
 };

//  create an event listner , for every click the background changes color

const btnClick = document.querySelector('.btn');

btnClick.addEventListener("click", function(e) {
    e.preventDefault()
    const colorFlip = (document.querySelector("body").style.backgroundColor = randomColors());
})

// task completed !!
