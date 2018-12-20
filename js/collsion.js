//1 大鱼 碰撞食物
function momFruitCollsion(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<900){
                fruit.alive[i]=false;
            }
        }
    }
}

//2 大鱼 碰到小鱼
function momBabyCollsion(){
    //技术大鱼小鱼之间的距离
    var l=calLength2(mom.x,mom.y,baby.x,baby.y)
    if(l<900){
        baby.babyBodyIndex=0
    }
}