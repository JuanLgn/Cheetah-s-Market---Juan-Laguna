
// GOOGLE MAPS API
// La ubicación es de ejemplo y debido a problemas con el tema de la facturación para utilizar la api no he logrado utilizar al máximo esta api.


function iniciarMap(){
    var coord = {lat:-34.81712893743686, lng:-55.980763747169476};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 20,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}


