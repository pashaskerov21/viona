const numberCounterFunc = () => {
    if(document.querySelector(".counter-span")){
        let counterSpan = document.querySelectorAll(".counter-span");
        let statusArray = Array(counterSpan.length).fill(false);
    
        let counterSection = document.querySelector(".counter-section");
    
        window.addEventListener("scroll",function(){
            for(let i = 0; i < counterSpan.length; i++){
                (function(index){
                    if(scrollY > (counterSpan[index].offsetTop + counterSection.offsetTop) - 500){
                        statusArray[index] = true;
                    }
                })(i);
            }
        });
    
        //alert(counterSpan[0].offsetTop + counterSection.offsetTop - 500)
        for(let i = 0; i < counterSpan.length; i++){
            (function(index){
                let startValue = 0;
                let endValue = parseInt(counterSpan[index].getAttribute("data-val"));
                let countSecond = 10;
                let remainder = 0;
                let counter = setInterval(function(){
                    if(statusArray[index] == true){
                        if(endValue < 100){
                            startValue += 1;
                        }
                        if(endValue >  100 && endValue < 1000){
                            startValue += 5;
                            remainder = endValue % 5;
                            endValue = endValue - remainder;
                        }
                        if(endValue > 1000){
                            startValue += 25;
                            remainder = endValue % 25;
                            endValue = endValue - remainder;
                        }
                    };
                    counterSpan[index].innerHTML = startValue;
                    if(startValue == endValue){
                        clearInterval(counter);
                        counterSpan[index].innerHTML = parseInt(counterSpan[index].getAttribute("data-val")) + "+";
                        counterSpan[index].classList.add("end-count");
                    }
                },countSecond)
            })(i);
        }
    }
}
export default numberCounterFunc;