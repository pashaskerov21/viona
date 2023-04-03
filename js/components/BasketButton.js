const basketButtonFunc = () => {
    if(document.querySelectorAll(".basket-button-2")){
        let basketButton_2 = document.querySelectorAll(".basket-button-2");
        for(let i = 0; i < basketButton_2.length; i++){
            (function(index){
                basketButton_2[i].addEventListener("click",function(){
                    if(basketButton_2[index].classList.contains("active")==false){
                        basketButton_2[index].classList.add("active");
                    }
                });
            })(i);
        };
    };
}

export default basketButtonFunc;