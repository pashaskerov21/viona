const scrollButtonFunc = () => {
    if(document.querySelector(".page-scroll-button")){
        let pageScrollButton = document.querySelector(".page-scroll-button");
        window.addEventListener("scroll",function(){
            if(scrollY > 400){
                pageScrollButton.classList.remove("d-none");
            }else{
                pageScrollButton.classList.add("d-none")
            }
        });
        pageScrollButton.addEventListener("click",function(){
            window.scrollTo(0,0);
        })
    }
}
export default scrollButtonFunc;