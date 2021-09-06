var mapbox_map = L.tileLayer(
'https://api.mapbox.com/styles/v1/mapbox/emerald-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbm1hcHMiLCJhIjoiY2t0OTJzNWYwMDRoZzJ2bXdqMGVpcnRtbyJ9.501CS6Mys0Mme-dHihtLoQ', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var mapbox_light = L.tileLayer(
'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbm1hcHMiLCJhIjoiY2t0OTJzNWYwMDRoZzJ2bXdqMGVpcnRtbyJ9.501CS6Mys0Mme-dHihtLoQ', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var mapbox_satellite = L.tileLayer(
'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbm1hcHMiLCJhIjoiY2t0OTJzNWYwMDRoZzJ2bXdqMGVpcnRtbyJ9.501CS6Mys0Mme-dHihtLoQ', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var mapbox_dark = L.tileLayer(
'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbm1hcHMiLCJhIjoiY2t0OTJzNWYwMDRoZzJ2bXdqMGVpcnRtbyJ9.501CS6Mys0Mme-dHihtLoQ', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
	}).addTo(map);


