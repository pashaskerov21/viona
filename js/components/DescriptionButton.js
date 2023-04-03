const descriptionButtonFunc = () => {
    if(document.querySelector(".description-button")){
        let descriptionButton = document.querySelectorAll(".description-button");
        let chevron = document.querySelectorAll(".description-button .fa-chevron-down");
    
        for(let i = 0; i < descriptionButton.length; i++){
            (function(index){
                descriptionButton[i].addEventListener("click",function(){
                    chevron[index].classList.toggle("rotate-180");
                })
            })(i);
        }
    }
}

export default descriptionButtonFunc;