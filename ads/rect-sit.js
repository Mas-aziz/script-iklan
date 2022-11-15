var cat1 = ['https://ads-load-rectangle.blogspot.com/feeds/posts/default?orderby=published&amp;alt=json-in-script&amp;callback=showrecentposts&amp;max-results=500'];

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
