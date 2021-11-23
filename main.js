const digital = document.querySelector(".digital")
const hourHand =document.querySelector(".Hhand")
 const minuteHand =document.querySelector(".Mhand")
 const secondHand = document.querySelector(".Shand")
 


setInterval(clockFunction , 1000 );
function clockFunction(){
    const date = new Date();
    let hour = date.getHours();
    let minute =date.getMinutes();
    let second = date.getSeconds();
    let time = "AM"

    if (hour === 0){
        hour = 12 ;
    }
    if(hour>12){
        hour = hour -12
        time = "PM"
    }
    if(hour<10){
        hour = `0${hour}`
    }
    if(minute<10){
        minute = `0${minute}`
    }
    if(second<10){
        second = `0${second}`
    }
    digital.innerText = `${hour}:${minute}:${second} ${time}`

    

    let hr = date.getHours() * 30 ;
    let mn = date.getMinutes() * 6 ; 
    let sc = date.getSeconds() * 6 ;
    let Hr = hr + (mn/12) ;
    
    secondHand.style.transform = `rotate(${sc}deg)`
    minuteHand.style.transform = `rotate(${mn}deg)`
    hourHand.style.transform = `rotate(${Hr}deg)`
   




}


