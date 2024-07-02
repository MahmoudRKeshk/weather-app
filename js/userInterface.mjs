/* 
    * => Getting the dom APIs 
*/

// => menu navigation iteems
let weather_nav_item = document.getElementById("weather-nav-item");
let cities_nav_item = document.getElementById("cities-nav-item");
let setting_nav_item = document.getElementById("setting-nav-item");
let nav_items = document.getElementsByClassName('nav-item');  // returns html collection
// => modals
let cities_modal = document.getElementById("cities-modal");
let cities_modal_close = document.getElementById("cities-modal-close");
let setting_modal = document.getElementById('setting-modal');
let setting_modal_close = document.getElementById("setting-modal-close");
let blur_layer = document.getElementById("blur-layer")
// => data display elments
let cities = document.getElementsByClassName('city');  // returns html collection



/* 
    !=> exported main functions 
*/
export function playCitiesInterface(){
    // hide citties modal 
    cities_modal_close.addEventListener('click',()=>{
        removeActiveClass(nav_items);
        weather_nav_item.classList.add('active');
        hideModal(cities_modal);
    });
    // show citties modal 
    cities_nav_item.addEventListener('click', ()=>{
        removeActiveClass(nav_items);
        cities_nav_item.classList.add('active');
        showModal(cities_modal);
        toggleCitySelection();
    });
}
export function playSettingInterface(){
    // show setting modal
    setting_nav_item.addEventListener('click',()=>{
        removeActiveClass(nav_items)
        setting_nav_item.classList.add('active')
        showModal(setting_modal)
    })
    // hide setting modal
    setting_modal_close.addEventListener('click',()=>{
        removeActiveClass(nav_items);
        weather_nav_item.classList.add('active');
        hideModal(setting_modal);
    })

    
}



// ?=> utilities functions


function toggleCitySelection(){
    for(let i=0; i< cities.length; i++){
        cities[i].addEventListener('click',()=>{
            if(cities[i].classList.contains('city-selected')){
                
            } else {
                removeCitySelectedClass(cities);
                cities[i].classList.add('city-selected')
            }
        })
    }
}

function removeCitySelectedClass(list){
    for(let i=0; i< list.length; i++){
        list[i].classList.remove('city-selected')
    }
}
function removeActiveClass(list){
    for(let i=0; i< list.length; i++){
        list[i].classList.remove('active')
    }
}
function showModal(modal){
        modal.classList.remove('d-none');
        blur_layer.classList.remove('d-none');
        modal.classList.add('show');
        setTimeout(()=>{
            modal.classList.remove('show');
        },400);
}
function hideModal(modal){
    modal.classList.add('hide');
        setTimeout(()=>{
            modal.classList.add('d-none');
            blur_layer.classList.add('d-none');
            modal.classList.remove('hide');
        },350)
}