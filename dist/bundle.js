!function(e){var t={};function i(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(o,c,function(t){return e[t]}.bind(null,c));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="dist",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);$(document).on("scroll",function(){const e=$(this).scrollTop(),t=$(".education").children();e+screen.height>$(".edu:nth-child(1)").offset().top+$(".edu:nth-child(1)").outerHeight()&&$(".edu:nth-child(1)").addClass("eduActive"),e+screen.height>$(".edu:nth-child(2)").offset().top+$(".edu:nth-child(2)").outerHeight()&&$(".edu:nth-child(2)").addClass("eduActive"),e+screen.height>$(".edu:nth-child(3)").offset().top+$(".edu:nth-child(3)").outerHeight()&&$(".edu:nth-child(3)").addClass("eduActive"),e+screen.height>$(".edu:nth-child(4)").offset().top+$(".edu:nth-child(4)").outerHeight()&&$(".edu:nth-child(4)").addClass("eduActive"),e+screen.height>$(".edu:nth-child(5)").offset().top+$(".edu:nth-child(5)").outerHeight()&&$(".edu:nth-child(5)").addClass("eduActive"),e<100&&t.removeClass("eduActive")});const o=document.querySelector(".slider img"),c=document.querySelector("i.left"),r=document.querySelector("i.right"),a=document.querySelector("i.leftMark"),n=document.querySelector("i.rightMark"),s=document.querySelectorAll(".dot"),l=document.querySelectorAll("span.employerName"),d=document.querySelectorAll("span.jobTitle"),u=document.querySelectorAll("span.jobDates"),h=document.querySelectorAll("p.jobDescribtion"),y=document.querySelector("#showMobileDescribtion"),m=document.querySelector("div.mobileDescribtion"),p=document.querySelector(".closeDescribtion"),f=["./src/img/experience/job.png","./src/img/experience/dnikariery.png","./src/img/experience/hays.png","./src/img/experience/radio.png"],v=["Jobsquare","Dni Kariery - targi pracy, praktyk i staży","Hays","RadioGol"],g=["Dyrektor sprzedaży","Project Manager","Associate Consultant","Dziennikarz sportowy"],k=["05.2016 - 06.2018","05.2015 - 03.2016","07.2015 - 08.2015","2012 - 2014"],z=["Jobsquare to startup, do którego dołączyłem na początku jego działalności, gdy firmie brakowało użytkowników. Aby przyciagnąć klientów powołaliśmy zespół, którego działania koordynowałem, samemu utrzymując relacje z głównymi klientami firmy. Do moich obowiązków należało koordynowanie działań zespołu sprzedażowego, który w największym momencie liczył ok. 15 osób, a po decyzji o przeniesieniu części działań operacyjnych z regionów Polski do Warszawy, 9 osób.","Dni Kariery to organizacja targów pracy, praktyk i staży dla studentów. Jako koordynator zorganizowałem dwie edycje wydarzenia, w auli spadochronowej SGH oraz w Pałacu Kultury i Nauki. Kluczowa była współpraca logistyki, sprzedaży i marketingu. Zespół, którym zarządzałem liczył 13 osób. Frekwencja jednego dnia targowego wyniosła ponad 8000 odiwedzających. Budżet projektu to ponad 200 000 zł.","W firmie rekrutacyjnej Hays spędziłem staż wakacyjny po 3. roku studiów. Chciałem nabrać doświadczenia w korporacji, poznać zasady działania dużej firmy. W Haysie poznałem, jak wyglądają rekrutacje na najwyższym poziomie, a także praca Head Huntera, którą często wykonywałem.","RadioGol, to rozgłośnia nadająca relację z wydarzeń spotowych oraz prowadząca autorskie programy. Ramówka nadawana jest zawsze na żywo. Radio jest dla mnie ważny doświadczeniem, gdyż nauczyłem się opanowania podczas wystąpień publicznych, co przekłada się na wyrachowanie w stresujących sytuacjach w życiu codziennym i w pracy."];let w,L=-1,b=screen.width,j=0;j=b<1024?3e3:1e4;const A=()=>{++L>3?L=0:L<0&&(L=3),o.src=f[L],[...l].forEach(e=>e.innerHTML=v[L]),[...d].forEach(e=>e.innerHTML=g[L]),[...u].forEach(e=>e.innerHTML=k[L]),[...h].forEach(e=>e.innerHTML=z[L]),s.forEach(e=>e.classList.remove("activeDot")),s[L].classList.add("activeDot")};A(),w=setInterval(A,j);const E=()=>{clearInterval(w),L-=2,A(),w=setInterval(A,j)},S=()=>{clearInterval(w),A(),w=setInterval(A,j)},q=function(){clearInterval(w),L=[...s].indexOf(this)-1,A(),w=setInterval(A,j)};c.addEventListener("click",E),r.addEventListener("click",S),a.addEventListener("click",E),n.addEventListener("click",S),s.forEach(e=>e.addEventListener("click",q)),y.addEventListener("click",()=>{clearInterval(w),m.style.display="block"}),p.addEventListener("click",()=>{m.style.display="none",A(),w=setInterval(A,j)});const x=document.querySelectorAll(".hobby"),C=function(){this.querySelector("h2").classList.toggle("hobbiesTxtActive")};x.forEach(e=>e.addEventListener("click",C));const H=document.querySelectorAll(".projectImg"),I=document.querySelectorAll(".projectImg a"),O=function(){let e=this.querySelector("a");if(this.classList.contains("activeImg"))return this.classList.remove("activeImg"),void(e.style.display="none");H.forEach(e=>e.classList.remove("activeImg")),I.forEach(e=>e.style.display="none"),this.classList.add("activeImg"),e.style.display="block"};H.forEach(e=>e.addEventListener("click",O));const M=$("#menu"),D=$("#menu div:nth-child(1) i"),T=$("ul.menuList"),P=$("header ul li"),R=$(".menuList li"),G=$("footer li"),N=$("header").css("height").slice(0,3),_=$(".title").css("height").slice(0,2);let K=[...$("section")].map(e=>e.id);const J=function(){let e=$(this).find("a").attr("class"),t="#"+K.filter(t=>t==e);$("body, html").animate({scrollTop:$(t).offset().top-$("#menu").css("height").slice(0,2)},1e3)};D.on("click",()=>{T.toggleClass("menuListActive")}),P.on("click",J),R.on("click",J),R.on("click",()=>{T.removeClass("menuListActive")}),G.on("click",J),$(document).on("scroll",()=>{if($(document).scrollTop()>Number(N)+Number(_))M.removeClass("hideMenu"),M.addClass("menuActive");else{if(!($(document).scrollTop()<Number(N)+Number(_)&&M.hasClass("menuActive")))return;M.removeClass("menuActive"),M.addClass("hideMenu")}});const W=document.querySelectorAll(".tools img"),B=document.querySelectorAll(".tool p"),F=document.querySelectorAll("p.description button"),Z=function(){if(this.classList.contains("logoActive"))return this.classList.remove("logoActive"),B[[...W].indexOf(this)].classList.remove("descriptionActiveLeft"),B[[...W].indexOf(this)].classList.remove("descriptionActiveRight"),void B[[...W].indexOf(this)].classList.remove("descriptionActiveGit");W.forEach(e=>e.classList.remove("logoActive")),this.classList.add("logoActive"),B.forEach(e=>e.classList.remove("descriptionActiveGit")),B.forEach(e=>e.classList.remove("descriptionActiveLeft")),B.forEach(e=>e.classList.remove("descriptionActiveRight")),10==[...W].indexOf(this)?B[10].classList.add("descriptionActiveGit"):[...W].indexOf(this)%2==0?B[[...W].indexOf(this)].classList.add("descriptionActiveLeft"):B[[...W].indexOf(this)].classList.add("descriptionActiveRight")},Q=()=>{W.forEach(e=>e.classList.remove("logoActive")),B.forEach(e=>e.classList.remove("descriptionActiveGit")),B.forEach(e=>e.classList.remove("descriptionActiveLeft")),B.forEach(e=>e.classList.remove("descriptionActiveRight"))};W.forEach(e=>e.addEventListener("click",Z)),F.forEach(e=>e.addEventListener("click",Q))}]);