var cat1 = [
"https://ads-load-rectangle.blogspot.com/2022/06/iklan1.html",
"https://ads-load-rectangle.blogspot.com/2022/06/iklan2.html",
"https://ads-load-rectangle.blogspot.com/2022/06/iklan3.html",
"https://ads-load-rectangle.blogspot.com/2022/06/iklan4.html",
"https://ads-load-rectangle.blogspot.com/2022/06/iklan5.html",
"https://ads-load-rectangle.blogspot.com/p/pasang-iklan.html",
"https://ads-load-rectangle.blogspot.com/2022/11/nike-ads.html",
"https://ads-load-rectangle.blogspot.com/2022/11/rekomendasi.html",
"https://ads-load-rectangle.blogspot.com/2022/11/kumpulan-etalase.html",
"https://ads-load-rectangle.blogspot.com/2023/01/fanspage-resep-only.html",
"https://ads-load-rectangle.blogspot.com/2023/01/fanspage-santri-indonesia.html",
"https://ads-load-rectangle.blogspot.com/2024/09/shopee-spill.html"]
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
