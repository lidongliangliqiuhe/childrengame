//1 创建小鱼的构造函数
var babyObj=function(){
    this.x;
    this.y;
    this.babyEye = [];
    this.babyBody = [];
    this.babyTail = [];
    this.angle;
}
//2 为小鱼的构造函数添加初始化方法
babyObj.prototype.init=function(){
    this.x = canWidth/2;
    this.y = canHight/2;
    this.angle = 0;
    for(var i=0 ;i<2;i++){
        this.babyEye[i] = new Image();
        this.babyEye[i].src= "src/babyEye"+i+".png";
    }
    for(var i=0;i<20;i++){
        this.babyBody[i] = new Image();
        this.babyBody[i].src = `src/babyFade${i}.png`;
    }
    for(var i=0;i<8;i++){
        this.babyTail[i] = new Image();
        this.babyTail[i].src= `src/babyTail${i}.png`;
    }
}
//3 为小鱼的构造函数添加绘制方法
babyObj.prototype.draw=function(){
    //让小雨面向大鱼慢慢的游动过去
    this.x = lerpDistance(mom.x,this.x,0.98);
    this.y = lerpDistance(mom.y,this.y,0.98);
    var deltaX = mom.x-this.x;
    var deltaY = mom.y-this.y;
    var beta = Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpAngle(beta,this.angle,0.92)
    ctx1.save();
    ctx1.translate(this.x,this.y)
    ctx1.rotate(this.angle)
    ctx1.drawImage(this.babyBody[0],-this.babyBody[0].width*0.5,-this.babyBody[0].height*0.5)
    ctx1.drawImage(this.babyTail[0],-this.babyTail[0].width*0.5+25,-this.babyTail[0].height*0.5)
    ctx1.drawImage(this.babyEye[0],-this.babyEye[0].width*0.5,-this.babyEye[0].height*0.5)
    ctx1.restore();
   
}
//4 jiangbaby.js添加到index.html中
//5 在main.js中创建小鱼对象并且调用响应的方法