let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.685175, lng: 139.7528 },
    zoom: 15,
  });
}