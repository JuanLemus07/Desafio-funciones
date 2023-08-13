const azul = document.getElementById("color-1")
const rojo = document.getElementById("color-2")
const verde = document.getElementById("color-3")
const amarillo = document.getElementById("color-4")
/*color boxes*/
document.getElementById("color-1").style.backgroundColor = "blue"
document.getElementById("color-1").style.width = "200px";
document.getElementById("color-1").style.height = "200px";
document.getElementById("color-1").style.border = "solid 1px black";
document.getElementById("color-1").style.color = "blue";
document.getElementById("color-2").style.backgroundColor = "red"
document.getElementById("color-2").style.width = "200px";
document.getElementById("color-2").style.height = "200px";
document.getElementById("color-2").style.border = "solid 1px black";
document.getElementById("color-2").style.color = "red";
document.getElementById("color-3").style.backgroundColor = "green"
document.getElementById("color-3").style.width = "200px";
document.getElementById("color-3").style.height = "200px";
document.getElementById("color-3").style.border = "solid 1px black";
document.getElementById("color-3").style.color = "green";
document.getElementById("color-4").style.backgroundColor = "yellow"
document.getElementById("color-4").style.width = "200px";
document.getElementById("color-4").style.height = "200px";
document.getElementById("color-4").style.border = "solid 1px black";
document.getElementById("color-4").style.color = "yellow";
/*Event black*/
azul.addEventListener("click", () => {azul.style.backgroundColor = "black"});
rojo.addEventListener("click", () => {rojo.style.backgroundColor = "black"});
verde.addEventListener("click", () => {verde.style.backgroundColor = "black"});
amarillo.addEventListener("click", () => {amarillo.style.backgroundColor = "black"});
/*key*/
const key = document.getElementById("key")
const keys = {
	'a': 'pink',
  's': 'orange',
  'd': 'skyblue',
  'other' : 'white'
}
document.getElementById("key").style.backgroundColor = "white"
document.getElementById("key").style.width = "200px";
document.getElementById("key").style.height = "200px";
document.getElementById("key").style.border = "solid 1px black";
document.getElementById("key").style.color = "white"
/*generar div*/
function genDiv(color){
	let div = document.createElement('div');
  div.style.backgroundColor = color
  div.style.width = '200px'
	div.style.height = '200px'
	document.body.appendChild(div)
}
document.addEventListener('keydown', function(event){
  if(event.key === 'a'){
  key.style.backgroundColor = keys['a']
} else if(event.key === 's'){
  key.style.backgroundColor = keys['s']
} else if(event.key === 'd'){
  key.style.backgroundColor = keys['d']
} else if(event.key === 'q'){
  genDiv('purple')
} else if(event.key === 'w'){
  genDiv('gray')
} else if(event.key === 'e'){
	genDiv('brown')
} else {
  key.style.backgroundColor = keys['other']
  }
})
