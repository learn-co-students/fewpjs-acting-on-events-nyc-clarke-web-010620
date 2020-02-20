// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    console.log(leftNumbers)
    let left = parseInt(leftNumbers);
    console.log(left)
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers)
    if (left > 0){
        dodger.style.left = `${left + 1}px`
    }
}
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowRight") {
        moveDodgerRight();
        }
  });