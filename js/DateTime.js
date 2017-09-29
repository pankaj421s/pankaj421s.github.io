// JavaScript Document
window.onload=insertDateTime;
function insertDateTime()
{
	var oNow=new Date();
	var sDateTime=oNow.toLocaleString();
	var oTarget=document.getElementById("output");
	//document.
	while(oTarget.firstChild)
	{
		oTarget.removeChild(oTarget.firstChild);
	}
	var oNewText=document.createTextNode(sDateTime);
	oTarget.appendChild(oNewText);
	var el=document.createElement("img");
	el.src="images/2014 - 24.jpg";
	var a=new Object();
	a.b=67;
	a.c=78;
	var str=JSON.stringify(a);
	//alert(str);
	//el.clo
	//document.d
	//el.setAttribute("src","C:\Users\pankaj421s\Desktop\naina\675px-Feb1991_Brooke_Shields_on_Sally_Jesse_Raphael.jpg");
	document.getElementById("root").appendChild(el);
	
	
		setTimeout(function(){
		oTarget.removeChild(oTarget.firstChild);
		oNow=new Date();
		sDateTime=oNow.toLocaleString();
		oNewText=document.createTextNode(sDateTime);
		oTarget.appendChild(oNewText);
		this.moveTo(50,100);
		setTimeout(arguments.callee,1000);
	},1000);


	
	alert(str);
}