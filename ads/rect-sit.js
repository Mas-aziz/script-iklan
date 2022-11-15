var cat1 = [https://];

var myFrame = document.getElementsByClassName("frame")[0];

function getRandomUrl(myFrame) {
  var index = Math.floor(Math.random() * cat1.length);
  var url = cat1[index];
  myFrame.src = url;
}

function codeAddress() {
  getRandomUrl(myFrame);
}

codeAddress();

console.log(myFrame.src);
