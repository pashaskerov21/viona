const toolbarFunc = () => {
    if(document.querySelector(".web-toolbar")){
        let webToolbar = document.querySelector(".web-toolbar");
        window.addEventListener("scroll",function(){
            if(scrollY > 50){
                webToolbar.classList.remove("d-none");
            }
        });
    };
}

export default toolbarFunc;