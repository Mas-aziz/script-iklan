//<![CDATA[
setTimeout(function(){
 document.getElementById('popbox').classList.remove('csspop');
 document.body.className+=" flowbox"
 }, 1000);
function removeClassonBody(){var element=document.body;element.className=element.className.replace(/\bflowbox\b/g,"")}
//]]>
 
