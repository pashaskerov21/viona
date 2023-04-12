let categoryMobileFunction = () => {
    let category = document.querySelectorAll('.category-container.mobile .category');

    if(document.querySelector('.menu-button')){
        let menuButton = document.querySelector('.menu-button');
        menuButton.addEventListener('click',function(){
            let categoryMenu = document.querySelectorAll('.category .menu');
            let categoryButton = document.querySelectorAll('.category .name button');
            for(let i = 0; i < categoryMenu.length; i++){
                categoryMenu[i].classList.add('d-none');
            }
            for(let i = 0; i < categoryButton.length; i++){
                categoryButton[i].classList.remove('active')
            }
        })
    }


    for(let i = 0; i < category.length; i++){
        (function(index){
            if(category[index].querySelector('.menu')){
                category[index].querySelector('.name').classList.add('enable');
                category[index].querySelector('.menu').classList.add('enable');
                category[index].querySelector('.menu').classList.add('d-none');
            }else{
                category[index].querySelector('.name button').remove();
            }
        })(i);
    }

    let generalButton = document.querySelectorAll('.category .name.general button');
    let generalMenu = document.querySelectorAll('.category .menu.general');
    for(let i = 0; i < generalButton.length; i++){
        (function(index){
            generalButton[i].addEventListener('click',function(){
                // for(let i = 0; i < generalMenu.length; i++){
                //     generalMenu[i].classList.add('d-none');
                //     generalButton[i].classList.remove('active');
                // }
                generalMenu[index].classList.toggle('d-none');
                generalButton[index].classList.toggle('active');
            })
        })(i);
    }



    let categoryButton = document.querySelectorAll('.category .menu.general .name.enable button');
    let categoryMenu = document.querySelectorAll('.category .menu.general .menu.enable');
    for(let i = 0; i < categoryButton.length; i++){
        (function(index){
            categoryButton[i].addEventListener('click',function(){
                categoryButton[index].classList.toggle('active')
                categoryMenu[index].classList.toggle('d-none')
            })
        })(i);
    }
    
}

export default categoryMobileFunction