//创建文件main.js
//console.log(11)
//2在index.html 中加载main.js
//3创建全局变量
    //两个画布两个画笔 画面宽高
    var can1;//前
    var can2;//后
    var ctx1;
    var ctx2;
    var canWidth;
    var canHight;



//4创建入口函数         game
function game(){
    init();
    gameloop();
}

//5创建初始化函数       init
function init(){
    //console.log(1)
    can1 = document.getElementById("canvas1");
    can2 = document.getElementById("canvas2");
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
    canWidth = can1.width;
    canHight = can1.height;
    //5.1：创建背景图片 并下载；
    bgPic =new Image();
    bgPic.src="src/timg.jpg";

}
//6创建绘制函数         gameloop
function gameloop(){
    //console.log(2)
    //6.1创建只能的定时器执行循环;
    requestAnimFrame(gameloop);
}
//7页面加载成功后调用    game
document.body.onload = game;
