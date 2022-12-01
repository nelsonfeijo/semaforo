const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

 const nextIndex = () => {
    //posição do array
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
 }

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const stopAutomatic = () => {
    clearInterval(intervalId);
}
const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
    // "event.target.id" mostra o id de onde ta acontecendo o evento (click do mouse)
    
}

const turnOn = {
    //quando "turnOn" for red, vai pegar img src e colocar ./img/vermelho.png
    'red' : () => img.src = './img/vermelho.png',
    'yellow' : () => img.src = './img/amarelo.png',
    'green' : () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000),
    
 }
buttons.addEventListener('click', trafficLight);