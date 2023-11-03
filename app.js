var time=document.getElementById('time');
var timeformate=document.getElementById('timeformate');
var abc;
function start(){
   abc=  setInterval(function(){
    let date=new Date();

        let hr=date.getHours();
        let mins=date.getMinutes();
        let secs =date.getSeconds();
    
        hr=hr<10 ? `0${hr}`:hr;
        mins=mins<10 ? `0${mins}`:mins;
        secs=secs<10 ? `0${secs}`:secs;
        
        timeformate.innerHTML=hr>12 ? "PM":"AM"
        
    
        time.innerHTML = `${hr}:${mins}:${secs}`
    },10)
       document.getElementById("start").disabled=true
}


function stop(){
    clearInterval(abc)
    document.getElementById("start").disabled=false
}



























// var showtime = () => {
//    Interval=setInterval(()=>{
//     let date=new Date();

//     let hr=date.getHours();
//     let mins=date.getMinutes();
//     let secs =date.getSeconds();

//     hr=hr<10 ? `0${hr}`:hr;
//     mins=mins<10 ? `0${mins}`:mins;
//     secs=secs<10 ? `0${secs}`:secs;
    
//     timeformate.innerHTML=hr>12 ? "PM":"AM"
    

//     time.innerHTML = `${hr}:${mins}:${secs}`
    
// },1000)
// }



