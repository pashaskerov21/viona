const favoriSectionFunc = () => {
    if(document.querySelector(".favori-products-section")){
        let productCardCol = document.querySelectorAll(".favori-products-section .col-12.col-sm-6.col-lg-4.col-xl-3");
        let favoriteButton = document.querySelectorAll(".favori-products-section .product-card .favorite-button");
    
        for(let i = 0; i < favoriteButton.length; i++){
            (function(index){
                favoriteButton[i].addEventListener("click",function(){
                    productCardCol[index].remove();
                })
            })(i);
        }
    }
}

export default favoriSectionFunc;