const favoriButtonFunct = () => {
    if((document.querySelector(".favorite-button"))){
        let favoriteButton = document.querySelectorAll(".favorite-button");
        let regularHeart = document.querySelectorAll(".favorite-button .fa-regular.fa-heart");
        let solidHeart = document.querySelectorAll(".favorite-button .fa-solid.fa-heart");
    
        for(let i = 0; i < favoriteButton.length; i++){
            (function(index){
                favoriteButton[i].addEventListener("click",function(){
                    if(regularHeart[index].classList.contains("d-none")==false){
                        regularHeart[index].classList.add("d-none");
                        solidHeart[index].classList.remove("d-none");
                    }else{
                        solidHeart[index].classList.add("d-none");
                        regularHeart[index].classList.remove("d-none");
                    }
                })
            })(i);
        }
    }
}

export default favoriButtonFunct;