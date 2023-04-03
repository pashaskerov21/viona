const productAmountFunc = () => {
    if(document.querySelector(".product-amount")){
        let decrementButton = document.querySelectorAll(".product-amount .decrement-button");
        let amountInput = document.querySelectorAll('.product-amount input');
        let incrementButton = document.querySelectorAll(".product-amount .increment-button");
    
        for(let i = 0; i < amountInput.length; i++){
            (function(index){
                let amountInputValue = parseInt(amountInput[index].value);
                incrementButton[i].addEventListener('click',function(){
                    amountInputValue += 1;
                    amountInput[index].value = amountInputValue; 
                });
                decrementButton[i].addEventListener('click',function(){
                    if(amountInputValue == 1){
                        amountInputValue -= 0;
                        
                    }else{
                        amountInputValue -= 1;
                        amountInput[index].value = amountInputValue;
                    }
                })
            })(i);
        }
    }
}

export default productAmountFunc;