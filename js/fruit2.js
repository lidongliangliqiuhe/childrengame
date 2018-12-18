//1 创建食物构造函数 fruitObj
var fruitObj=function(){
    this.aneNo = [];
    this.blue = new Image();
    this.orange = new Image();
    this.x = [];
    this.y = [];
    this.alive = [];
    this.l = [];
    this.spd = [];
    this.fruitType = []
}
//2 为构造函数添加属性数量 30
fruitObj.prototype.num=30;
//3 为构造函数添加初始化方法
fruitObj.prototype.init=function(){
    for(var i=0 ;i<this.num;i++){
        this.alive[i]=false;                    //初始不可见
        this.x[i] = 0;                          //位置和宽度
        this.y[i] = 0;
        this.l[i] = 0;
        this.fruitType[i]="";                   //类型
        this.spd[i]= Math.random()*0.087+0.003
    }
    this.blue.src="src/blue.png"
    this.orange.src="src/fruit.png"
} 
//4 为构造函数添加绘制方法
fruitObj.prototype.draw=function(){
    //活动 类型 由小变大 属于哪个海葵 向上漂浮 
    for( var i=0;i<this.num;i++){
        if(this.alive[i]){
            if(this.fruitType[i]=="blue"){
                var pic = this.blue;
            }else{
                var pic = this.orange;
            }
            if(this.l[i]<14){
                var no = this.aneNo[i]
                this.x[i]=ane.headx[no];
                this.y[i]=ane.heady[no];
                this.l[i]+=this.spd[i]*deltaTime
            }else{
                
                    this.y[i]-=this.spd[i]*deltaTime
                
            }
            ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i])
            //当前食物漂浮出屏幕改变状态 alive 为false
            if(this.y[i]<=0){this.alive[i]=false}
        }
    }
}
//5 将fruit2.js添加到 index.html文件

//6 创建一个函数 监听画布上食物的数量 如过活动的食物不足15个  
function fruitMonitor(){
    var sum=0;
    for (var i =0;i<fruit.num;i++){
        if(fruit.alive[i]){sum++}
        
    }
    if(sum<15){
        sendFruit()
        return;
    }
}

//7 c从食物中条选一个不活动的食物
function sendFruit(){
    for(var i=0; i<fruit.num;i++){
        if(fruit.alive[i]==false){
            fruit.born(i);
            return;
        }
    }
}
//8 当此食物出生时 活动
fruitObj.prototype.born=function(i){
    //指定海葵的下标
    var idx = Math.floor(Math.random()*ane.num)
    this.aneNo[i]=idx;
    //宽度
    this.l[i] = 0;
    //状态
    this.alive[i] = true;
    //类型
    this.fruitType[i] = Math.random()<0.9 ? "blue" : "orange"
}
//9 在main.js中调用监听方法
//食物飘出屏幕 在生一个
//食物出生在海葵中心
//食物漂浮速度




