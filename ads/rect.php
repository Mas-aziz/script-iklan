$url = "http://ads-load-rectangle.blogspot.com/sitemap.xml" ;
$xml = simplexml_load_file($url);
$link = $xml->url[mt_rand(0,count($xml->url)-1)]->loc ; // Get Random Location 

Header("Location:" . $link); 
