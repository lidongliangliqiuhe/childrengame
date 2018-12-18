//1 创建食物构造函数
var fruitObj=function(){
    this.blue = new Image();        //蓝色图片
    this.orange = new Image();      //橙色图片
    this.x = [];                    //食物位置
    this.y = [];
    this.fruitType = [];            //食物类型
    this.l = []                     //食物生长宽度
    this.alive = [];                //食物活动状态
    this.spd = [];                  //食物速度

}
//2 为构造函数添加数量30；
fruitObj.prototype.num=30;
//3 为构造函数添初始化函数
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=true;            //所有食物都是活动的
        this.x[i]=Math.random()*canWidth;
        this.y[i]=Math.random()*canHight
        this.l[i]=0;
        this.spd[i]=Math.random()*0.8+0.02;
        this.fruitType[i]=Math.random()<0.9 ? "blue" : "orange" ;


    }
    this.blue.src="src/blue.png";
    this.orange.src="src/fruit.png";
}
//4 为构造函数添加绘制函数
fruitObj.prototype.draw=function(){
    //1 创建循环
    for(var i=0;i<this.num;i++){
      //2 判断状态是否活动
      if(this.alive[i]){
         //3依据字符串判断使用哪张图 
         if(this.fruitType[i]=="blue"){
             var pic =this.blue
         }else{
             var pic = this.orange
        }
        //4先由小变大
        if(this.l[i]<=14){
            this.l[i]+=this.spd[i];
        }else{
            this.y[i]-=this.spd[i]
        }
        ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]) //宽高相同
      }
    

    //5 向上漂浮  
    }
    
}
//5 将 fruit.js 添加到index.html中
//6 在main.js中创建食物对象 并且调用相关方法