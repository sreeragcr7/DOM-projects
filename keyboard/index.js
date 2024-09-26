// eventListener = Listen for specific events to create interactive web pages
//                 events: Keydown, keyup 
//                 document.addEventListener(event, callbck)


const main = document.getElementById('main')
const movement = 30  //movement speed
let x = 0
let y = 0


document.addEventListener('keydown', (event) => {
   
    if(event.key.startsWith('Arrow')){
        main.style.backgroundColor = 'tomato'

        event.preventDefault(); //to prevent scroll bar

        switch(event.key){
            case 'ArrowUp': y -= movement;
            break
            case 'ArrowDown': y += movement;
            break
            case 'ArrowRight': x += movement;
            break
            case 'ArrowLeft': x -= movement;
            break
        }

        main.style.top = `${y}px`;
        main.style.left = `${x}px`;
    }
})

document.addEventListener('keyup', (event) => {
    main.style.backgroundColor = 'greenyellow'
})


const one = document.getElementById('one')
document.addEventListener('keydown', (event) => {
    if(event.key ==='a'){
    one.textContent = 'a';
    one.style.backgroundColor = 'tomato';
    }
})

document.addEventListener('keyup', (event) => {
    if(event.key ==='a'){
    one.textContent = 'a';
    one.style.backgroundColor = 'white';
    }
})

const two = document.getElementById('two')
document.addEventListener('keydown', (event) => {
    if(event.key === 'b'){
    two.textContent = 'b';
    two.style.backgroundColor = 'tomato';
    }
})
document.addEventListener('keyup', (event) => {
    if(event.key === 'b'){
    two.textContent = 'b';
    two.style.backgroundColor = 'white';
    }
})

const three = document.getElementById('three')
document.addEventListener('keydown', (event) => {
    if(event.key === 'c'){
    three.textContent = 'c';
    three.style.backgroundColor = 'tomato';
    }
})
document.addEventListener('keyup', (event) => {
    if(event.key === 'c'){
    three.textContent = 'c';
    three.style.backgroundColor = 'white';
    }
})

const four = document.getElementById('four')
document.addEventListener('keydown', (event) => {
    if(event.key === 'd'){
    four.textContent = 'd';
    four.style.backgroundColor = 'tomato';
    }
})
document.addEventListener('keyup', (event) => {
    if(event.key === 'd'){
    four.textContent = 'd';
    four.style.backgroundColor = 'white';
    }
})

