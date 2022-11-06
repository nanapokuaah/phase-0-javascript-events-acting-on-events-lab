// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = 50;

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight(){
  const rightNumbers = dodger.style.left.replace("px", "");
  const left = parseInt (rightNumbers, 10);
  if (left < 360)
  dodger.style.left = `${left + 1}px`;
}

document.addEventListener("keydown", function (e){

  if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
});

  //const orange = document.querySelector("button")
//orange.addEventListener("click", alert("I made it"))


//const Richy = document.querySelector("h1")
//function highlightName(){
 // Richy.innerText = "orange"
  //Richy.style.backgroundColor = "blue"
//Richy.addEventListener("mouseover", highlightName)

//document.addEventListener("keydown", function (event) {
  //console.log(event);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});