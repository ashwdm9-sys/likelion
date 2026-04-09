const num = document.getElementsByTagName("p")[0];

const plusclick = document.getElementsByTagName("button")[0];

let current = Number(num.innerText);

function updateColor() {
  if (current > 0) {
    num.style.color = "#00ff00";
  } else if (current < 0) {
    num.style.color = "#ff0000";
  } else {
    num.style.color = "#000000";
  }
}
plusclick.addEventListener("click", () => {
    current++;
    num.innerText = current;
    updateColor();
});

const minusclick = document.getElementsByTagName("button")[1];

minusclick.addEventListener("click", () => {
    current--;
    num.innerText = current;
    updateColor();
})

