const sliderImg = document.querySelector('.slider img');
const leftBtnSmall = document.querySelector('i.left');
const rightBtnSmall = document.querySelector('i.right');
const leftBtnLarge = document.querySelector('i.leftMark');
const rightBtnLarge = document.querySelector('i.rightMark');
const dots = document.querySelectorAll('.dot');
const emploerName = document.querySelectorAll('span.employerName');
const jobTitle = document.querySelectorAll('span.jobTitle');
const jobDate = document.querySelectorAll('span.jobDates');
const jobDescribtion = document.querySelectorAll('p.jobDescribtion');
const showMobileBtn = document.querySelector("#showMobileDescribtion");
const mobileDescrition = document.querySelector('div.mobileDescribtion');
const closeDescribtionBtn = document.querySelector('.closeDescribtion');



const imgsUrls = ["./src/img/experience/job.png", "./src/img/experience/dnikariery.png", "./src/img/experience/hays.png", "./src/img/experience/radio.png"];
const employers = ["Jobsquare", "Dni Kariery - targi pracy, praktyk i staży", "Hays", "RadioGol"];
const jobTitles = ["Dyrektor sprzedaży", "Project Manager", "Associate Consultant", "Dziennikarz sportowy"];
const jobDates = ["05.2016 - 06.2018", "05.2015 - 03.2016","07.2015 - 08.2015", "2012 - 2014"];
const jobDescribtions = ["Jobsquare to startup, do którego dołączyłem na początku jego działalności, gdy firmie brakowało użytkowników. Aby przyciagnąć klientów powołaliśmy zespół, którego działania koordynowałem, samemu utrzymując relacje z głównymi klientami firmy. Do moich obowiązków należało koordynowanie działań zespołu sprzedażowego, który w największym momencie liczył ok. 15 osób, a po decyzji o przeniesieniu części działań operacyjnych z regionów Polski do Warszawy, 9 osób.", "Dni Kariery to organizacja targów pracy, praktyk i staży dla studentów. Jako koordynator zorganizowałem dwie edycje wydarzenia, w auli spadochronowej SGH oraz w Pałacu Kultury i Nauki. Kluczowa była współpraca logistyki, sprzedaży i marketingu. Zespół, którym zarządzałem liczył 13 osób. Frekwencja jednego dnia targowego wyniosła ponad 8000 odiwedzających. Budżet projektu to ponad 200 000 zł.", "W firmie rekrutacyjnej Hays spędziłem staż wakacyjny po 3. roku studiów. Chciałem nabrać doświadczenia w korporacji, poznać zasady działania dużej firmy. W Haysie poznałem, jak wyglądają rekrutacje na najwyższym poziomie, a także praca Head Huntera, którą często wykonywałem.", "RadioGol, to rozgłośnia nadająca relację z wydarzeń spotowych oraz prowadząca autorskie programy. Ramówka nadawana jest zawsze na żywo. Radio jest dla mnie ważny doświadczeniem, gdyż nauczyłem się opanowania podczas wystąpień publicznych, co przekłada się na wyrachowanie w stresujących sytuacjach w życiu codziennym i w pracy."];

let counter = -1;
let sliderInterval;
let screenWidth = screen.width;
let time = 0;
if (screenWidth < 1024){
    time = 3000;
} else {
    time = 10000;
}

const slide = () => {
    counter++;
    if (counter > 3){
        counter = 0;
    } else if (counter < 0){
        counter = 3;
    }
    sliderImg.src = imgsUrls[counter];
    [...emploerName].forEach(el => el.innerHTML = employers[counter]);
    [...jobTitle].forEach(el => el.innerHTML = jobTitles[counter]);
    [...jobDate].forEach(el => el.innerHTML = jobDates[counter]);
    [...jobDescribtion].forEach(el => el.innerHTML = jobDescribtions[counter]);

    dots.forEach(el => el.classList.remove("activeDot"));
    dots[counter].classList.add("activeDot");
};
slide();
sliderInterval = setInterval(slide, time);

const slideLeft = () => {
    clearInterval(sliderInterval);
    counter -= 2;
    slide();
    sliderInterval = setInterval(slide, time);
};

const slideRight = () => {
    clearInterval(sliderInterval);
    slide();
    sliderInterval = setInterval(slide, time);
};

const dotSlide = function () {
    clearInterval(sliderInterval);
    counter = [...dots].indexOf(this) - 1;
    slide();
    sliderInterval = setInterval(slide, time);
};

const showMobileDescribtion = () => {
    clearInterval(sliderInterval);
    mobileDescrition.style.display = "block";
};

const closeMobileDescribtion = () => {
    mobileDescrition.style.display = "none";
    slide();
    sliderInterval = setInterval(slide, time);
};

leftBtnSmall.addEventListener("click", slideLeft);
rightBtnSmall.addEventListener("click", slideRight);
leftBtnLarge.addEventListener("click", slideLeft);
rightBtnLarge.addEventListener("click", slideRight);
dots.forEach(el => el.addEventListener("click", dotSlide));
showMobileBtn.addEventListener("click", showMobileDescribtion);
closeDescribtionBtn.addEventListener("click", closeMobileDescribtion);

export {slide, slideLeft, slideRight, dotSlide, showMobileDescribtion, closeMobileDescribtion};