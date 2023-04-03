const sectionTitleFunc = () => {
    if(document.querySelector(".section-header")){
        let mainSpan = document.querySelectorAll(".section-header .main-span");
        let shadowSpan = document.querySelectorAll(".section-header .shadow-span");
    
        for(let i = 0; i < mainSpan.length; i++){
            (function(index){
                let mainSpanValue = mainSpan[index].innerHTML;
                // mainSpan[index].innerHTML = mainSpanValue.toLocaleUpperCase();
                // let lowerValue = mainSpanValue.toLocaleLowerCase();
                // let upperLetter = lowerValue[0].toLocaleUpperCase();
                // let shadowSpanValue = upperLetter + lowerValue.slice(1);
                shadowSpan[index].innerHTML = mainSpanValue;
            })(i);
        }
    }
}

export default sectionTitleFunc;