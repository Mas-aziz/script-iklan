var qwer1 = document.write( '<script src="https://script-iklan.pages.dev/data/rectangle/adsload/ads-link.js"></script>' );
var myFrame = document.getElementsByClassName("frame")[0];

function getRandomUrl(myFrame) {
  var index = Math.floor(Math.random() * qwer1.length);
  var url = qwer1[index]
  myFrame.src = url;
}

function codeAddress() {
  getRandomUrl(myFrame);
}

codeAddress();

console.log(myFrame.src);
