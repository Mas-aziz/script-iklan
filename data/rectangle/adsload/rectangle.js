var cat1 = document.getUrl( 'https://script-iklan.pages.dev/data/rectangle/adsload/ads-link.js')[""];

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
