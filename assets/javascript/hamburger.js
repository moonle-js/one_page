var hamburger = document.querySelector('#hamburger');
var ham_item = document.querySelectorAll('.ham_item'),
    hum_menu = document.querySelector('#hum_menu');

hamburger.addEventListener('click', () => {

    if(!hamburger.classList.contains('inactive')){
        hum_menu.style.display = "flex";

        if(window.innerWidth >= 600){
            ham_item[0].style.transform = "translateY(11px) rotateZ(90deg)";
        }else{
            ham_item[0].style.transform = "translateY(8px) rotateZ(90deg)";
        }
        ham_item[2].style.backgroundColor = 'inherit';
        hamburger.classList.add('inactive');
    }else{
        hum_menu.style.display = "none";

        ham_item[0].style.transform = " rotateZ(0deg)";
        ham_item[2].style.backgroundColor = 'gray';
        hamburger.classList.remove('inactive');
    }





})
