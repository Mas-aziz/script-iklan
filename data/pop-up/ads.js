document.write( '<script type="text/css" src="https://script-iklan.pages.dev/data/pop-up/style.css"></script>' );
document.write( '<div class='popbox csspop' id='popbox'>
<div aria-label='Close' class='pop-overlay' onclick='document.getElementById(&quot;popbox&quot;).style.display=&quot;none&quot;;removeClassonBody();' role='button' tabindex='0'/>
<div class='pop-content'>
Klick to close ads
<div class='popcontent'>
<script src="https://script-iklan.pages.dev/data/rectangle/banner.js"></script>
</div></div></div></div>' );
document.write( '<script>
//<![CDATA[
setTimeout(function(){
 document.getElementById('popbox').classList.remove('csspop');
 document.body.className+=" flowbox"
 }, 5000);
function removeClassonBody(){var element=document.body;element.className=element.className.replace(/\bflowbox\b/g,"")}
//]]>
 </script>' );
