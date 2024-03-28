let second = 0
const p = document.querySelector('p');

const timesecond = setInterval(function (){
    second = second + 1;
    console.log(second);
    p.innerHTML = second
} , 1000)


function clears (){
    clearInterval(timesecond)
}
 


