var cat1 = [
"<?=$url = "http://ads-load-rectangle.blogspot.com/sitemap.xml" ;
$xml = simplexml_load_file($url);
$link = $xml->url[mt_rand(0,count($xml->url)-1)]->loc ; // Get Random Location 

Header("Location:" . $link)?>"
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
