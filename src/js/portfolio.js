const portfolioImgs = document.querySelectorAll('.projectImg');
const links = document.querySelectorAll('.projectImg a');

const addPortfolioClass = function () {
    let link = this.querySelector("a");
    if (this.classList.contains("activeImg")) {
        this.classList.remove("activeImg");
        link.style.display = "none";
        return;
    }
    portfolioImgs.forEach(el => el.classList.remove("activeImg"));
    links.forEach(el => el.style.display = "none");
    this.classList.add("activeImg");
    link.style.display = "block";
};

portfolioImgs.forEach(el => el.addEventListener("click", addPortfolioClass));

export {addPortfolioClass};