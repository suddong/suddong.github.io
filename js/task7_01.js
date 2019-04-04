var temp=0
function dj(){
    var x0=document.getElementById("jump")//获取简化版的节点
    var x1=document.getElementById("gameName");//获取游戏名称的节点
    var x2=document.getElementById("edition1");//获取版本的节点
    var x3=document.getElementById("edition2");//获取版本的节点
    //修改获得节点的html
    if(temp%2==0){
        x1.innerHTML="杀人游戏";
        x2.innerHTML="警版";
        x3.innerHTML="3.0版";
    }
    else{
        x1.innerHTML="捉鬼游戏";
        x2.innerHTML="猜词版";
        x3.innerHTML="白痴版"
    }
    //获取下方四个园的节点
    var y=document.getElementsByClassName("cirle")
    //设置四个院背景色为白色
    for(var i=0;i<y.length;i++){
        y[i].style.backgroundColor="#f0f0f0"
    }
    //设置以temp值为索引的园为蓝色
    y[temp].style.backgroundColor="#69d1e9"
    //设置鼠标点击temp值递增到4循环
    temp++;
    if(temp==4){
        temp=0;
    }
} 
//点击简化版进行跳转
function jump(){
    if(temp%2==1){
        window.location.href="task7_04.html";

    }
}
function submit(){
    //获取玩家输入的值
    var x=document.getElementById("input").value;
    //判断是否符合条件
    var y=x.indexOf(".")
    if(x<4 || x>18 || isNaN(x)||y!=-1) {
        alert("请输入正确的数量")
    }
    else{
        var numPm=Math.round(x/2+x/6+x/24.1)
        var numLr=x-numPm;
        document.getElementById("lr").innerHTML=numLr;
        document.getElementById("pm").innerHTML=numPm;
        var wanJia=new Array;
        for(var i=1;i<=numPm;i++){
            wanJia.push("平民")
        }
        for(var i=1;i<=numLr;i++){
            wanJia.push("狼人")
        }
        var jueSe=[];
for(var i=0;i<wanJia.length;i++){
    jueSe[i]=i;
}
for(var i=jueSe.length;i>1;i--){
    var num=Math.round(Math.random()*(i-1));
    console.log(num)
    var temp=0;
    temp=jueSe[num];
    jueSe[num]=jueSe[i-1];
    jueSe[i-1]=temp;
}
console.log(jueSe)
    }
}
document.onkeydown=function(a){
         var code=a.keyCode;
         if(code === 13){
             submit();

         }
    }

function gk(){
    window.location.href="task7_gk.html"
}
function sz(){
    window.location.href="task7_sz.html"
}
function bz(){
    window.location.href="task7_bz.html"
}
function gy(){
    window.location.href="task7_gy.html"
}
function back(){
    window.history.back(-1)
}
