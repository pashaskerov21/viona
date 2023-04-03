const dateCounterFunc = () => {
    if(document.querySelector(".dates-wrapper")){
        let datesWrapper = document.querySelectorAll(".dates-wrapper");
        let daySpan = document.querySelectorAll(".dates-wrapper .day-span");
        let hourSpan = document.querySelectorAll(".dates-wrapper .hour-span");
        let minuteSpan = document.querySelectorAll(".dates-wrapper .minute-span");
        let secondSpan = document.querySelectorAll(".dates-wrapper .second-span");
    
        for(let i = 0; i < datesWrapper.length; i++){
            (function(index){
                let countDownFunction = setInterval(function(){
                    let date_value = datesWrapper[index].getAttribute("data-time");
                    let currentDate = new Date();
                    let countDownDate = new Date(date_value);
                    
                    let distance = countDownDate.getTime() - currentDate.getTime();
    
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    daySpan[index].innerHTML = days;
                    hourSpan[index].innerHTML = hours;
                    minuteSpan[index].innerHTML = minutes;
                    secondSpan[index].innerHTML = seconds;
    
                    if(distance < 0){
                        clearInterval(countDownFunction);
                        daySpan[index].innerHTML = 0;
                        hourSpan[index].innerHTML = 0;
                        minuteSpan[index].innerHTML = 0;
                        secondSpan[index].innerHTML = 0;
                    }
                },1000)            
            })(i);
        }
    }
}
export default dateCounterFunc;