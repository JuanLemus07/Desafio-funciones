/*req 3.1*/
const ele = document.getElementById("ele1")
/*req 3.2*/
ele.addEventListener("click",() => {
  ele.style.backgroundColor = 'yellow'
});
/*req 3.3*/
document.getElementById("ele1").style.backgroundColor = "green";
ele.addEventListener("click",() => {
  ele.style.backgroundColor = 'yellow'
});
