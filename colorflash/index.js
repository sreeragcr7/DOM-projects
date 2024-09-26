const colors = ['yellow', 'green', 'red', 'brown', 'black', 'blue','greenyellow', 'orange', 'deeppink', 'white','aqua','grey'];
let i = 0;

setInterval(() =>{

  i = i % colors.length;
  document.getElementById('main').style.backgroundColor = colors[i];

  if(colors[i] === 'black' || colors[i] === 'blue'){
    document.getElementById('h1').style.color = 'white';
  }else{
    document.getElementById('h1').style.color = 'black';
  }

i++;
},80)