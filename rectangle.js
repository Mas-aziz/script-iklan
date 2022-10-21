var cat1 = [
  "https://ads-load-rectangle.blogspot.com/2022/06/iklan1.html",
  "https://ads-load-rectangle.blogspot.com/2022/06/iklan2.html",
  "https://ads-load-rectangle.blogspot.com/2022/06/iklan3.html",
  "https://ads-load-rectangle.blogspot.com/2022/06/iklan4.html",
  "https://ads-load-rectangle.blogspot.com/2022/06/iklan5.html",
  "https://ads-load-rectangle.blogspot.com/2022/10/ads-video-chanel.html",
];

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
