function back(){
    window.history.back(-1)
}


function change(){
var a=document.getElementById("num");
var b=document.getElementById("rangeNumber");
console.log(a.value)
console.log(b.value)
console.log(a)
console.log(b)
a.value=b.value;


}
function getNumber(){
    if(inputNumber.value>=4&&inputerNumber.value<=18){
        a=b;
    }
    else{
        alert("请输入玩家人数");
    }
}
function add(){
    var a=document.getElementById("num");
var b=document.getElementById("rangeNumber");
    if(a.value<18){
        b.value++;
        change();
    }
}
function reduce(){
    var a=document.getElementById("num");
var b=document.getElementById("rangeNumber");
    if(a.value>0){
        b.value--;
        change();
    }
}