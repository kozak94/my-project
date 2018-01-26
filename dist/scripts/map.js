$(document).ready(function initMap() {

    var uluru = { lat: 50.456, lng: 30.520 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

});