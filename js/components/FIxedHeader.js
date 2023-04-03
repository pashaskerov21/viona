const fixHeaderFunc = () => {
    if(document.querySelector("header")){
        let mobileHeader = document.querySelector('.mobile-header');
        let generalHeader = document.querySelector('.general-header');
        let categoryRow = document.querySelector('.general-header .categories-wrapper');
    
        window.addEventListener("scroll",function(){
            if(scrollY > 280){
                mobileHeader.classList.add("fixed-top");
                generalHeader.classList.add("fixed-top");
                categoryRow.classList.add('d-none');
            }else{
                mobileHeader.classList.remove("fixed-top");
                generalHeader.classList.remove("fixed-top");
                categoryRow.classList.remove('d-none');
    
            }
        });
    }
}
export default fixHeaderFunc;