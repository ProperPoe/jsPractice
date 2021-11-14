const bob = document.querySelector('.face')
const textDisplay = document.querySelector('.text')
const emotions = ['Yo', 'man', 'bro']
const newWord = emotions.join(' ')
let count = 0;

function moveBob(){
    count += 50;
    console.log(count);
    bob.style.left = count + 'px';
    

}

textDisplay.innerHTML = newWord
console.log(newWord)

/*const num = [34, 56, 24, 31]

const res = num.reduce((x, y) => x + y)

console.log(res)*/

bob.addEventListener('click', moveBob)

