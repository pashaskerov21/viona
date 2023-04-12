const priceRangeInputFunc = () => {
    if(document.querySelector(".range-wrapper")){
        const rangeInput = document.querySelectorAll(".range-input input");
        const priceInput = document.querySelectorAll(".price-input input");
        const progress = document.querySelector(".slider .progress");
        
        if(rangeInput[0].min == rangeInput[1].min && rangeInput[0].max == rangeInput[1].max){
            //rangeInput[0].value = rangeInput[0].min;
            //rangeInput[1].value = rangeInput[1].max;
            priceInput[0].value = rangeInput[0].value;
            priceInput[1].value = rangeInput[1].value;
        }
        
        rangeInput.forEach(input =>{
            input.addEventListener("input", () =>{
                let minVal = parseInt(rangeInput[0].value);
                let maxVal = parseInt(rangeInput[1].value);
    
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
    
                
            })
        });
    
        priceInput.forEach(input =>{
            input.addEventListener("input", () =>{
                let minVal = parseInt(priceInput[0].value);
                let maxVal = parseInt(priceInput[1].value);
    
                rangeInput[0].value = minVal;
                rangeInput[1].value = maxVal;
                            
            })
        })
    }
}

export default priceRangeInputFunc;