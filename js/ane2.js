//第二个版本的海葵
//1 创建一个海葵的构造函数
var aneObj = function(){
    this.rootx = [];    //起点坐标
    this.headx = [];    //终点点坐标
    this.heady = [];    //
    this.amp = [];       //摆动幅度
    this.alpha = 0; //正弦函数的角度
}
//2 为构造函数添加数量属性
aneObj.prototype.num=50
//3 为构造函数添加初始化方法
aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.rootx[i] = 16*i+Math.random()*20;
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHight-250+Math.random()*40;
        this.amp[i] = Math.random()*20+20
    }
}
//4 为构造函数添加绘制方法
aneObj.prototype.draw =function(){
    ctx2.save();
    ctx2.strokeStyle="#3b154e";
    ctx2.golbalAlpha = 0.6;
    ctx2.lineCap = "round";
    ctx2.lineWidth = 20;
    this.alpha+= 12*0.008;
    var l = Math.sin(this.alpha)*12

    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHight);
        ctx2.quadraticCurveTo(this.rootx[i],canHight-100,this.headx[i]+l,this.heady[i]);
        ctx2.stroke()
    }
    ctx2.restore();
}
//5 将ane1.js 添加到index.html中
//6 在main.js 创建 对象并且调用相关方法