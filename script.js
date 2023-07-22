var count = 10;
var sec = setInterval(function(){
    count--;
    document.getElementById("countdown").textContent = count;
    if(count <=1)
    {
        clearInterval(sec);
    }
},1000)


var element = document.getElementById("element");
setInterval(() => {
    
}, interval);( function(){
    console.log("Happy independence day");
},10000)
