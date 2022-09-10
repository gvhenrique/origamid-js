// CONTEUDO DA IMAGEM CLICADA (tabNavegation)

function initTabNav() {
  const fotoAnimais = document.querySelectorAll(".js-tabmenu img");
  const textoAnimais = document.querySelectorAll(".js-tabcontent section");
  const activeClass = "ativo";

  if (fotoAnimais.length && textoAnimais.length) {
    textoAnimais[0].classList.add(activeClass);

    function clickAnimal(index) {
      textoAnimais.forEach((texto) => {
        texto.classList.remove(activeClass);
      })
      textoAnimais[index].classList.add(activeClass);
    }

    fotoAnimais.forEach((foto,index) => {
      foto.addEventListener("click", () => {
        clickAnimal(index);
      });
    });
  }
}
initTabNav();

// FAQ RESPOSTAS (Accordion List)


function initAccordion() {
  const perguntas = document.querySelectorAll(".js-accordion dt")
  const activeClass = "ativo";

  if (perguntas.length) {
    perguntas[0].classList.add(activeClass)
    perguntas[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion () {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    perguntas.forEach((pergunta) => {
      pergunta.addEventListener("click",activeAccordion)
    })
  }
}
initAccordion();

// SCROLL SUAVE 
function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']")

  function scrollContent(event) {
    event.preventDefault();
    const linkHref = event.currentTarget.getAttribute("href");
    const contentLink = document.querySelector(linkHref);
    
    contentLink.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener("click",scrollContent);
  })
}
initSmoothScroll();

// ANIMAÇÃO AO SCROLL

/* CÓDIGO SOZINHO
function initAnimationScroll () {
  const sections = document.querySelectorAll(".js-scroll")
  if (sections.length) {
   
    function animationScroll() {
      const scrollWindow = window.innerHeight + window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop + 150;
        
        if (scrollWindow > sectionTop) {
          section.classList.add("ativo")
        } else {
          section.classList.remove("ativo")
        }
      });
    }
    animationScroll(); // para ativar a função e checar o top do elemento pra dar a classe
    window.addEventListener("scroll",animationScroll)
  }
}
initAnimationScroll();
*/

// CORREÇÕES E OTIMIZAÇÕES

function initAnimationScroll () {
  const sections = document.querySelectorAll(".js-scroll")
  if (sections.length) {
   
    function animationScroll() {
      const windowSize = window.innerHeight * 0.6;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const reachElement = (sectionTop - windowSize) < 0;
        if (reachElement){
          section.classList.add("ativo")
        } else {
          section.classList.remove("ativo")
        }
      });
    }

    animationScroll(); //para ativar a função e checar o top do elemento pra dar a classe pro primeiro item

    window.addEventListener("scroll",animationScroll)
  }
}
initAnimationScroll();







  

