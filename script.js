let width = 0;

function increase() {
  let element = document.getElementById("myBar");
  element.style.width = element.style.width.split("%")[0] + 1 + "%";
  width += 20;
  console.log(width);
  if (width >= 100) window.location.href = "./success.html";
}
function decrease() {
  let element = document.getElementById("myBar");
  element.style.width = element.style.width.split("%")[0] - 1 + "%";
  width -= 20;
  console.log(width);
}

document.addEventListener('keydown', (event) => {
    console.log(event.code)
    setInterval(increase(),4000);
});

document.addEventListener('keyup', (event) => {

        setInterval(decrease(),2000)
});

