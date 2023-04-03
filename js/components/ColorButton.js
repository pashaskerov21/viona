export const colorSwiperButtonFunc = () => {
    if(document.querySelector(".color-item")){
        let colorItems = document.querySelectorAll(".color-item");
    
        for(let i = 0; i < colorItems.length; i++){
            (function(index){
                colorItems[i].addEventListener("click",function(){
                    for(let i = 0; i < colorItems.length;i++){
                        colorItems[i].classList.remove("active");
                    }
                    colorItems[index].classList.add("active")
                })
            })(i);
        };
    }
}

export const colorRadioButtonFunct = () => {
    if(document.querySelector(".colors-checkbox .c-item label.c-label")){
        let colorLabel = document.querySelectorAll(".colors-checkbox .c-item label.c-label");
    
        for(let i = 0; i < colorLabel.length; i++){
            (function(index){
                colorLabel[i].addEventListener("click",function(){
                    colorLabel[index].classList.toggle("active");
                })
            })(i);
        }
    }
}