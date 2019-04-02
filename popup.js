/*window.onload=function(){
var txt=$('#txt');
	txt.value=localStorage.getItem('txt');
	var button=$('#btn');
	button.click(function(){
		localStorage.setItem("txt",txt.value);
	})
var txt=document.getElementById("txt");
var   g=document.getElementById("g");

txt.value=localStorage.getItem('txt');
var  button=document.getElementById('btn');
button.addEventListener("click",saveData);
function saveData(){
	localStorage.setItem("txt",txt.value);
}


}*/
$(document).ready(function(){
var txt=$('#txt');
txt.text(localStorage.getItem('txt'));
var button=$('#btn');
button.click(function (){
	localStorage.setItem("txt",txt.val());
	console.log('adddddddddddd'+txt.text());
});

})