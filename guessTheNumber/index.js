let secretNumber = Math.floor(Math.random() * 100) + 1;
let chances = 10 ;

function checkGuess() {
    const num = parseInt(document.getElementById('num').value);

    if(num === '' || isNaN(num) || num < 1 || num > 100){
         document.getElementById('result').innerHTML = 'please enter valid number.'
         return;
    }

    chances --;

    if(num === secretNumber){
          document.getElementById('result').style.color = 'blue';
          document.getElementById('result').innerHTML = 'Congratulations!, You Guessed The Correct Number.'
          disableInputAndButton();
    }else{
        const hint = num > secretNumber ? 'higher' : 'lower'
        document.getElementById('result').style.color = 'black'
        document.getElementById('result').innerHTML = 'Your guess is ' + hint;
        document.getElementById('chances').innerHTML = chances;
 

    if(chances === 0) {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerHTML = `You failed!, Correct Number is ${secretNumber}`;
        disableInputAndButton();
        }
    }

}

function disableInputAndButton() {
    document.getElementById('num').disabled = true;
    document.getElementById('guess').disabled = true;
}

function replay() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    chances  = 10;

    document.getElementById('num').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').style.color = 'red';
    document.getElementById('chances').innerHTML = chances;
    document.getElementById('num').disabled = false;
    document.getElementById('guess').disabled = false;
}