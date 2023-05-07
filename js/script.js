
// randomizes how many times image icon shows up
function randomizeImage() {
  let containter = document.getElementById("background-container");
  let numImages = Math.floor(Math.random() * 4) + 1;
  console.log(numImages);
  let maxSize = 250;
  let minSize = 250;

  let imagArr = [];

  for (let i = 0; i < numImages; i++) {
    let image = document.createElement("img");
    image.src = "../imgs/leaf.png"

    //randomizes the location + making sure the values are within frame
    var x = Math.floor(Math.random() * (window.innerWidth));
    var y = Math.floor(Math.random() * (window.innerHeight));
    var size = Math.random() * (maxSize - minSize) + minSize;

    //allows the position to appear anywhere or else it'll just be right next to each other
    image.style.position = "relative";
    image.style.top = y + "px";
    image.style.left = x + "px";
    image.style.width = size + "px";
    containter.appendChild(image);

  }

}

window.onload = function () {
  randomizeImage();
}