const basketCalculateFunc = () => {
    if(document.querySelector(".basket-table")){
        let productInitialPrice = document.querySelectorAll(".product-initial-price span");
        let productFinalPrice = document.querySelectorAll(".product-final-price span");
    
        let decrementButton = document.querySelectorAll(".product-amount .decrement-button");
        let amountInput = document.querySelectorAll('.product-amount input');
        let incrementButton = document.querySelectorAll(".product-amount .increment-button");
    
        for(let i = 0; i < productFinalPrice.length; i++){
            (function(index){
                let initialPriceValue = parseFloat(productInitialPrice[index].innerHTML);
                let amountInputValue = parseInt(amountInput[index].value);
                let finalValue = initialPriceValue * amountInputValue;
                productFinalPrice[index].innerHTML = finalValue.toFixed(2);
            })(i);
        };
        for(let i = 0; i < incrementButton.length; i++){
            (function(index){
                incrementButton[i].addEventListener("click",function(){
                    let initialPriceValue = parseFloat(productInitialPrice[index].innerHTML);
                    let amountInputValue = parseInt(amountInput[index].value);
                    let finalValue = initialPriceValue * amountInputValue;
                    productFinalPrice[index].innerHTML = finalValue.toFixed(2);
                });
            })(i);
        }
        for(let i = 0; i < decrementButton.length; i++){
            (function(index){
                decrementButton[i].addEventListener("click",function(){
                    let initialPriceValue = parseFloat(productInitialPrice[index].innerHTML);
                    let amountInputValue = parseInt(amountInput[index].value);
                    let finalPriceValue = parseFloat(productFinalPrice[index].innerHTML);
                    
                    if(amountInputValue == 1){
                        productFinalPrice[index].innerHTML = productInitialPrice[index].innerHTML;
                    }else{
                        let finalValue = finalPriceValue - initialPriceValue;
                        productFinalPrice[index].innerHTML = finalValue.toFixed(2);
                    }
    
                })
            })(i);
        };
        
        let productRow = document.querySelectorAll(".basket-table .product-row");
        let productDeleteButton = document.querySelectorAll(".product-delete-button");
        for(let i = 0; i < productDeleteButton.length; i++){
            (function(index){
                productDeleteButton[i].addEventListener("click",function(){
                    productRow[index].remove();
                })
            })(i);
        }
    }
}

export default basketCalculateFunc;