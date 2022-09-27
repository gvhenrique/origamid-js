import outsideClick from "./outsideclick.js"

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["click","touchstart"];
  const ativo = "active";

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add(ativo)
      menuButton.classList.add(ativo)
      event.preventDefault()
      
      outsideClick(menuList,eventos,() => {
        menuList.classList.remove(ativo)
        menuButton.classList.remove(ativo)
      })
    }
    eventos.forEach((evento) =>{
      menuButton.addEventListener(evento,openMenu);
    })
  }
}