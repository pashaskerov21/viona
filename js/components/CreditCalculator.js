const creditCalculatorFunc = () => {
    if(document.querySelector('.credit-calculator')){
        let select = document.querySelector('.credit-calculator .form-select');
        let monthSpan = document.querySelector('.credit-calculator .result.month');
        let totalSpan = document.querySelector('.credit-calculator .result.total');
        
        let selectValue = parseFloat(select.value);
        let totalValue = parseFloat(totalSpan.innerHTML)

        let monthValue = totalValue / selectValue;
        monthSpan.innerHTML = monthValue.toFixed(2);



        select.addEventListener('change',function(){
            let selectValue = parseFloat(select.value);
            let totalValue = parseFloat(totalSpan.innerHTML)

            let monthValue = totalValue / selectValue;
            monthSpan.innerHTML = monthValue.toFixed(2);
        })
    }
}


export default creditCalculatorFunc;