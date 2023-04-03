const mobileFilterButtonFunc = () => {
    if(document.querySelector(".open-filters-button")){
        let openFiltersButton = document.querySelector(".open-filters-button");
        let typeFilterForm = document.querySelector(".type-filter-form");
    
        openFiltersButton.addEventListener("click",function(){
            if(openFiltersButton.classList.contains("active")==false){
                openFiltersButton.classList.add("active");
                typeFilterForm.classList.remove("d-none");
            }else{
                openFiltersButton.classList.remove("active");
                typeFilterForm.classList.add("d-none");
            }
        })
    }
}

export default mobileFilterButtonFunc;