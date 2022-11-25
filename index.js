let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.63377, lng: 77.449267 },
        zoom: 8,
    });
}

window.initMap = initMap;