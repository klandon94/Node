module.exports= function (){
    return{
        add:function(x,y){
            console.log(x+y);  
        },
        multiply:function(x,y){
            console.log(x*y);
        },
        square:function(x){
            console.log(x*x);
        },
        random:function(x,y){
            console.log(x + Math.floor(Math.random() * y));
        }
    }
}