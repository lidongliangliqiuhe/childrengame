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
    //3.1创建一个全局变量保存背景图片
    var bgPic = null;
    //3.2创建全局变量保存海葵对象
    var ane = null;
    //3.3创建全局变量保存食物对象
    var fruit=null;
    //3.4创建两个全局变量 上一贞 执行时间 两针时间差
    var lastTime=0;
    var deltaTime=0;


//4创建入口函数         game
function game(){
    init();
    lastTime=Date.now();
    deltaTime=0;
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
    //5.2创建海葵对象并且调用初始化方法
    ane= new aneObj();
    ane.init();
    //5.3创建食物对象并且调用初始化方法
    fruit=new fruitObj();
    fruit.init();

}
//6创建绘制函数         gameloop
function gameloop(){
    //console.log(2)
    //6.1创建只能的定时器执行循环;
    requestAnimFrame(gameloop);
    //6.11计算两帧的时间差
    var now =Date.now();
    deltaTime= now - lastTime;
    lastTime=now;
    //console.log(deltaTime)
    //6.2绘制游戏背景
    drawBackground();
    //6.2.1清楚第一块画布
    ctx1.clearRect(0,0,canWidth,canHight)
    //6.3监听画布
    fruitMonitor();




    //6.6绘制海葵
    ane.draw();
    //6.7绘制食物
    fruit.draw();
}
//7页面加载成功后调用    game
document.body.onload = game;
