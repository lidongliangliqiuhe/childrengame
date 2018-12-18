//1 创建海葵的构造方法
var aneObj=function(){
    this.x=[];      //所有海葵的位置
    this.len=[];    //所有海葵的高度
}
//2 添加数量 50
aneObj.prototype.num=50
//3 添加初始化方法
aneObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.len[i]=180+Math.random()*20
        this.x[i]=16*i+Math.random()*20
    }
    console.log(this.x,this.len)
}
//4 添加绘制
aneObj.prototype.draw = function(){
    ctx2.save()     //保存画笔状态
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.strokeStyle = "#3b154e"
        ctx2.globalAlpha = 0.6; //
        ctx2.lineWidth = 20;    //线宽
        ctx2.lineCap = "round"  //圆角
        ctx2.moveTo(this.x[i],600)
        ctx2.lineTo(this.x[i],600-this.len[i])
        ctx2.stroke();
    }
    ctx1.restore()  //恢复画笔状态；
}
//5 将ane.js添加到index.html文件
//6 在main.js 创建海葵对象并调用响应方法；

