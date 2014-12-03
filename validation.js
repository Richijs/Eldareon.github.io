
window.onload = function(){
 var button = document.getElementById("submit");
 button.onclick = validateForm;
 
};
function validateForm()
{
	var a=document.forms["contactForm"]["firstName"].value;//name
	var b=document.forms["contactForm"]["lastName"].value;//last name
	var c=document.forms["contactForm"]["email"].value;//email
	var d=document.forms["contactForm"]["age"].value;//age
	var e=document.forms["contactForm"]["reason"].value;//reason
	
	var atpos=c.indexOf("@"); //epasts @ simbola pozicija
	var dotpos=c.lastIndexOf("."); //epasta punkta pozicija
	
if (a==null || a=="" || !isNaN(a))
  {
  alert("Type in name");
  return false;
  }
if (b==null || b=="" || !isNaN(b)){
	alert("Type in last name");
	return false;
}

if(atpos < 1 || dotpos < atpos + 2 || dotpos +2 >= c.length){
	alert("Type in email")
	return false;
}

if (d<0 || d>100 || isNaN(d) || d===""){
	alert("Type in number between 0 and 100");
	return false;
}


if (e==="s0"){
	alert("choose reason");
	return false;
}

}
