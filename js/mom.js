//1 创建一个大鱼的构造函数
var momObj = function(){
    this.bigEye = [];       //保存图片对象
    this.bigBody = [];
    this.bigTail = [];
    this.x;
    this.y;
    this.angle;
    
    this.bigTailIndex=0;        //尾巴下标
    this.bigTailStart = 0;      //开始时间
    this.bigTailEnd = 60;      //结束时间

    this.bigBodyIndex=0;        //身体下标
    this.bigBodyStart = 0;      //开始时间
    this.bigBodyEnd = 3000;      //结束时间

    this.bigEyeIndex=0;        //眼睛下标
    this.bigEyeStart = 0;      //开始时间
    this.bigEyeEnd = 3000;      //结束时间
}
//2 为大鱼构造函数添加初始化方法
momObj.prototype.init = function(){
    this.x=canWidth*0.5;
    this.y=canHight*0.5;
    this.angle=0;
    for(var i=0;i<2;i++){
        this.bigEye[i] = new Image();
        this.bigEye[i].src="src/bigEye"+i+".png";
    }
    for(var i=0;i<8;i++){
        this.bigBody[i] = new Image();
        this.bigBody[i].src="src/bigSwim"+i+".png"
    }
    for(var i=0;i<8;i++){
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "src/bigTail"+i+".png"
    }
}
//3为大鱼构造函数添加绘制方法
momObj.prototype.draw = function(){
    //技算大鱼尾巴的下标切换
    this.bigTailStart+=deltaTime;                   //累加尾巴计时时间
    this.bigBodyStart+=deltaTime;
    this.bigEyeStart+=deltaTime;
    if(this.bigTailStart>this.bigTailEnd){          //超过结束时间切换下一张图片
        this.bigTailIndex = (this.bigTailIndex+1)%8;  //取余8 所以不会超过8
        this.bigTailStart = 0;
    }
    if(this.bigBodyStart>this.bigBodyEnd){
        this.bigBodyIndex = (this.bigBodyIndex+1)%8
        this.bigBodyStart = 0;
    }
    if(this.bigEyeStart>this.bigEyeEnd){
        this.bigEyeIndex = (this.bigBodyIndex+1)%2
        this.bigEyeStart = 0;
        //修改 城正常眨眼
        if(this.bigEyeIndex==0){
            this.bigEyeEnd=3000
        }else{
            this.bigEyeEnd=300;
        }
    }
    //让大鱼面向鼠标 慢慢游动过去
    this.x=lerpDistance(mx,this.x,0.98);
    this.y=lerpDistance(my,this.y,0.99);

    //修改角度
    //计算鼠标大鱼的位置差
    //鼠标与大鱼之间的角度差
    //大鱼新的角度
    var deltaX=mx-this.x;
    var deltaY=my-this.y;
    var beta = Math.atan2(deltaY,deltaX) //计算角度
    this.angle=lerpAngle(beta,this.angle,0.92)
    ctx1.save();
    ctx1.translate(this.x,this.y);//平移原点
    
    ctx1.rotate(this.angle+Math.PI);                  //旋转角度
    ctx1.drawImage(this.bigBody[this.bigBodyIndex],-this.bigBody[this.bigBodyIndex].width*0.5,-this.bigBody[this.bigBodyIndex].height*0.5)//大鱼的身体
    ctx1.drawImage(this.bigTail[this.bigTailIndex],-this.bigTail[this.bigTailIndex].width*0.5+30,-this.bigTail[this.bigTailIndex].height*0.5)//绘制大鱼的尾巴
    ctx1.drawImage(this.bigEye[this.bigEyeIndex],-this.bigEye[this.bigEyeIndex].width*0.5,-this.bigEye[this.bigEyeIndex].height*0.5)
    ctx1.restore();

}
//4 将mom。js添加到index。html
//5 在main.js创建大鱼对象 并且调用响应方法
//6 监听鼠标位置


