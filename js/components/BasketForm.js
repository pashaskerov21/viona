export const formButtonRowFunc = () => {
    if(document.querySelector(".form-buttons-row")){
        let rowButtons = document.querySelectorAll(".form-buttons-row .button");
        
        rowButtons[0].addEventListener("click",function(){
            rowButtons[1].classList.remove("active");
            rowButtons[0].classList.add("active");
        });
        rowButtons[1].addEventListener("click",function(){
            rowButtons[0].classList.remove("active");
            rowButtons[1].classList.add("active");
        });
        rowButtons[2].addEventListener("click",function(){
            rowButtons[3].classList.remove("active");
            rowButtons[2].classList.add("active");
        });
        rowButtons[3].addEventListener("click",function(){
            rowButtons[2].classList.remove("active");
            rowButtons[3].classList.add("active");
        });
    }
}

export const paymentCardInfoFunc = () => {
    if(document.querySelector('.payment-card-info')){
        let firstButton = document.querySelector('.form-buttons-row.payment .button:first-child');
        let lastButton = document.querySelector('.form-buttons-row.payment .button:last-child');
        let paymentCardInfo = document.querySelector('.payment-card-info');
        firstButton.addEventListener('click',function(){
            paymentCardInfo.classList.add('d-none');
        })
        lastButton.addEventListener('click',function(){
            paymentCardInfo.classList.remove('d-none');
        })
    }
}