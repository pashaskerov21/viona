const contactFilialFunc = () => {
    if(document.querySelector(".filial-collapse-button")){
        let filialCollapseButton = document.querySelector(".filial-collapse-button");
        filialCollapseButton.addEventListener("click",function(){
            if(filialCollapseButton.classList.contains("active")==false){
                filialCollapseButton.classList.add("active");
            }else{
                filialCollapseButton.classList.remove("active");
            }
        });
        let collapseButtonName = document.querySelector(".filial-collapse-button span");
        let filialItems = document.querySelectorAll("#filial-collapse .filial-items .filial-name");
        let filialCollapse = document.getElementById("filial-collapse");
        let filialContainer = document.querySelectorAll(".filial-container");
    
        for(let i = 0; i < filialItems.length; i++){
            (function(index){
                filialItems[i].addEventListener("click",function(){
                    collapseButtonName.innerHTML = filialItems[index].innerHTML;
                    filialCollapseButton.classList.add("collapsed");
                    filialCollapse.classList.remove("show");
    
                    for(let i = 0; i < filialContainer.length; i++){
                        filialContainer[i].classList.remove("active");
                    };
                    filialContainer[index].classList.add("active");
                })
            })(i);
        };
    };
}


export default contactFilialFunc;