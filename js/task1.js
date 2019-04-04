
function color() {
	var r = Math.round(Math.random() * 256);
	var g = Math.round(Math.random() * 256);
	var b = Math.round(Math.random() * 256);
	return 'rgb(' + r + ',' + g + ',' + b + ')'
}
var box = document.getElementsByClassName("a");
function change() {
	var newbox = [0, 1, 2, 3, 4, 5, 6, 7, 8]
	var a = [];
	var num = 3;
	for (var i = 1; i <= num; i++) {
		var num1 = Math.round(Math.random() * (newbox.length - 1));
		a.push(newbox[num1]);
		newbox.splice(num1, 1);
	} result();
	console.log(a)
	for (var i = 0; i < a.length; i++) {

		box[a[i]].style.backgroundColor = color();

	};
}
function result() {

	for (var i = 0; i <= 8; i++) {
		box[i].style.backgroundColor = "orange";
	}
}
var temp;
function bt1Click() {

	var bt1 = document.getElementById("bt1")
	bt1.style.backgroundColor = "orange";
	var x = document.getElementById('bt2')
	x.style.backgroundColor = "white"
	clearInterval(temp);
	temp = setInterval("change()", 1000);

}
function bt2Click() {
	result();
	var bt2 = document.getElementById("bt2")
	bt2.style.backgroundColor = "orange";
	var x = document.getElementById('bt1');
	x.style.backgroundColor = "white";
	clearInterval(temp);
}
