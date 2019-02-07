const hobbiesImgs = document.querySelectorAll('.hobby');

const showHobbyClick = function (){
    let txt = this.querySelector("h2");
    txt.classList.toggle("hobbiesTxtActive");

};

hobbiesImgs.forEach(el => el.addEventListener("click", showHobbyClick));

export {showHobbyClick};