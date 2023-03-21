const key = "NgseBTB8vYw0qBBFM4X0XB1bZDj5sSnZ";


function openMap() {
    positionOnMap();
}

function positionOnMap(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        alert("Não conseguimos obter sua localização.")
    }
}

function getPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    callMapQuest(latitude, longitude)
}

function callMapQuest(latitude, longitude) {
    const url = `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${latitude},${longitude}&size=@2x&defaultMarker=marker-sm-22407F-3B5998&size=600,400@2x`;
    const img = document.createElement("img");
    img.src = url;
    document.getElementById("map").appendChild(img);
}


function navigateToLocation(){
    const locationURL = `https://www.google.com.br/maps/`;
    const locationLink = document.querySelector('#map');
    const newTab = window.open(locationURL, '_blank');
    newTab.focus();
    locationLink.addEventListener('click', () => {
        navigateToLocation(locationURL)
    })

}
function navigateToNearbyRestaurants(){
    const restaurantsURL = `https://www.google.com.br/maps/search/Restaurantes/data=!3m1!4b1`;
    const buttonRestaurants = document.querySelector('#buttonRestaurants');
    const newTab = window.open(restaurantsURL, '_blank');
    newTab.focus();
    buttonRestaurants.addEventListener('click', () => {
        navigateToNearbyRestaurants(restaurantsURL)
    })

}

function navigateToNearbyHotels(){
    const hotelsURL = `https://www.google.com.br/maps/search/Hot%C3%A9is/data=!3m1!4b1`;
    const buttonHotels = document.querySelector('#buttonHotels');
    const newTab = window.open(hotelsURL, '_blank');
    newTab.focus();
    buttonHotels.addEventListener('click', () => {
        navigateToNearbyHotels(hotelsURL)
    })

}

function navigateToNearbySpots(){
    const spotsURL = `https://www.google.com.br/maps/search/Coisas+legais+para+fazer`;
    const buttonSpots = document.querySelector('#buttonSpots');
    const newTab = window.open(spotsURL, '_blank');
    newTab.focus();
    buttonSpots.addEventListener('click', () => {
        navigateToNearbySpots(spotsURL)
    })

}
