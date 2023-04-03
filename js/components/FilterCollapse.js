const filterCollapseFunc = () => {
    if(document.querySelector(".filter-collapse-button")){
        let filterCollapseButton = document.querySelectorAll(".filter-collapse-button");
        let chevron2 = document.querySelectorAll(".filter-collapse-button i");
    
        for(let i = 0; i < filterCollapseButton.length; i++){
            (function(index){
                filterCollapseButton[i].addEventListener("click",function(){
                    chevron2[index].classList.toggle("rotate-90");
                })
            })(i);
        };
    }
}

export default filterCollapseFunc;