var cat1 = [
//<![CDATA[
var numfeed = 100;
var startfeed = 0;
var urlblog = "https://ads-load-rectangle.blogspot.com";
var charac = 0;
var urlprevious, urlnext;
function kodebloggerkufeed(e,t){for(var n=e.split("<"),r=0;r<n.length;r++)-1!=n[r].indexOf(">")&&(n[r]=n[r].substring(n[r].indexOf(">")+1,n[r].length));return n=n.join(""),n=n.substring(0,t-1)}function showrecentpostsae(e){var t,n,r,a,i,s="";urlprevious="",urlnext="";for(var l=0;l<e.feed.link.length;l++)"previous"==e.feed.link[l].rel&&(urlprevious=e.feed.link[l].href),"next"==e.feed.link[l].rel&&(urlnext=e.feed.link[l].href);for(var d=0;d<numfeed&&d!=e.feed.entry.length;d++){t=e.feed.entry[d],n=t.title.$t;for(var l=0;l<t.link.length;l++)if("alternate"==t.link[l].rel){r=t.link[l].href;break}i="content"in t?t.content.$t:"summary"in t?t.summary.$t:"",a="media$thumbnail"in t?t.media$thumbnail.url:"https://3.bp.blogspot.com/-BHuXHny1kOk/VXrkSyxKCjI/AAAAAAAACas/pZLJAEUDtds/s1600/no-image.png",s+="<div class='recentpostel'>",s+="<a href='"+r+"' target='_blank'><img src='"+a+"' /></a>",s+="<h6><a href='"+r+"' target='_blank'>"+n+"</a></h6>",s+="<p>"+kodebloggerkufeed(i,charac)+"</p>",s+="</div>"}document.getElementById("recentpostsae").innerHTML=s,s="",s+=urlprevious?"<a href='javascript:navigasifeed(-1);' class='previous'><i class='fas fa-arrow-left'></i></a>":"<span class='noactived previous'><i class='fas fa-arrow-left'></i></span>",s+=urlnext?"<a href='javascript:navigasifeed(1);' class='next'><i class='fas fa-arrow-right'></i></a>":"<span class='noactived next'><i class='fas fa-arrow-right'></i></span>",s+="<a href='javascript:navigasifeed(0);' class='home'><i class='fas fa-home'></i></a>",document.getElementById("recentpostnavfeed").innerHTML=s}function navigasifeed(e){var t,n;-1==e?(t=urlprevious.indexOf("?"),n=urlprevious.substring(t)):1==e?(t=urlnext.indexOf("?"),n=urlnext.substring(t)):n="?start-index=1&max-results="+numfeed+"&orderby=published&alt=json-in-script",n+="&callback=showrecentpostsae",incluirscript(n)}function incluirscript(e){1==startfeed&&removerscript(),document.getElementById("recentpostsae").innerHTML="<div id='recentpostload'></div>",document.getElementById("recentpostnavfeed").innerHTML="";var t=urlblog+"/feeds/posts/default"+e,n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",t),n.setAttribute("id","kodebloggerkulabel"),document.getElementsByTagName("head")[0].appendChild(n),startfeed=1}function removerscript(){var e=document.getElementById("kodebloggerkulabel"),t=e.parentNode;t.removeChild(e)}onload=function(){navigasifeed(0)};
//]]> ];

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
