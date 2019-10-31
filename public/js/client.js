console.log("js loaded");

let coords = [0,0];
var mymap = L.map('map').setView([50,-50],6);
const latlon = L.marker([0,0]).addTo(mymap)
    .bindPopup('ISS')
    .openPopup();

let url =  "/iss"

let attribution = "&copy <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
let tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tile = L.tileLayer(tileUrl,{attribution});
tile.addTo(mymap);

async function getIssLoc(){
    let response = await fetch(url);
    let data = await response.json();
    let {latitude,longitude} = data;
    latlon.setLatLng([latitude,longitude]);
    document.getElementById("lat").innerText = latitude;
    document.getElementById("lon").innerText = longitude;
    
}

let tid = setInterval(getIssLoc,2000);


