const technologiesImgs = document.querySelectorAll('.tools img');
const portDescrib = document.querySelectorAll('.tool p');
const closeBtns = document.querySelectorAll('p.description button');

const imgActive = function (){
    if (this.classList.contains("logoActive")){
        this.classList.remove("logoActive");
        portDescrib[[...technologiesImgs].indexOf(this)].classList.remove("descriptionActiveLeft");
        portDescrib[[...technologiesImgs].indexOf(this)].classList.remove("descriptionActiveRight");
        portDescrib[[...technologiesImgs].indexOf(this)].classList.remove("descriptionActiveGit");
        return;
    }
    technologiesImgs.forEach(el => el.classList.remove("logoActive"));
    this.classList.add("logoActive");

    portDescrib.forEach(el => el.classList.remove("descriptionActiveGit"));
    portDescrib.forEach(el => el.classList.remove("descriptionActiveLeft"));
    portDescrib.forEach(el => el.classList.remove("descriptionActiveRight"));

    if ([...technologiesImgs].indexOf(this) == 10){
        portDescrib[10].classList.add("descriptionActiveGit");
    } else if ([...technologiesImgs].indexOf(this) % 2 == 0){
        portDescrib[[...technologiesImgs].indexOf(this)].classList.add("descriptionActiveLeft");
    } else {
        portDescrib[[...technologiesImgs].indexOf(this)].classList.add("descriptionActiveRight");
    }

};

const closeDescribtion = () => {
    technologiesImgs.forEach(el => el.classList.remove("logoActive"));
    portDescrib.forEach(el => el.classList.remove("descriptionActiveGit"));
    portDescrib.forEach(el => el.classList.remove("descriptionActiveLeft"));
    portDescrib.forEach(el => el.classList.remove("descriptionActiveRight"));
};

technologiesImgs.forEach(el => el.addEventListener("click", imgActive));
closeBtns.forEach(el => el.addEventListener("click", closeDescribtion));

export {imgActive, closeDescribtion};
