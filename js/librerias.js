
/* const alerta = document.querySelector(".infobutton")

alerta.onclick = () => {
    swal({
        title: "Un pokémon apareció en tu camino, ¿qué deseas hacer?",
        buttons: {
            cancel: "Tengo miedo",
            catch: "Le tiro una master ball pq soy un bad boy",
            defeat: "Exterminado"
        }
    })
    
    .then( valor => {
        if( valor === "catch") {
            swal(" Yo quiero ser siempre el mejor ")
        } else if ( valor === "defeat" ) {
            swal(" Ganaste 1 punto dew experiencia")
        } else {
            swal("El pokémon te ha quitado 1000 pesos")
        }
    }) 
} */


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });