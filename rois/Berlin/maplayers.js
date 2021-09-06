var Berlin_map_1772 = L.tileLayer('https://www.mapsdev.com/then-now/Berlin/Berlin_map_1772/{z}/{x}/{y}.png', {
	tms: true,transparent: true, opacity: 1, 
	attribution: '', 
	minZoom: 1, maxZoom: 17
	})
var Berlin_map_1884 = L.tileLayer('https://www.mapsdev.com/then-now/Berlin//Berlin_map_1884/{z}/{x}/{y}.png', {
	tms: true,transparent: true, opacity: 1, 
	attribution: '', 
	minZoom: 1, maxZoom: 17
	})	
var Berlin_KH_1980 = L.tileLayer('https://www.mapsdev.com/then-now/Berlin//Berlin_KH_1980/{z}/{x}/{y}.png', {
	tms: true,transparent: true, opacity: 1, 
	attribution: '', 
	minZoom: 1, maxZoom: 16
	}).addTo(map);
var Berlin_KH_1980_PS = L.tileLayer('https://www.mapsdev.com/then-now/Berlin//Berlin_KH_1980_PS/{z}/{x}/{y}.png', {
	tms: true,transparent: true, opacity: 1, 
	attribution: '', 
	minZoom: 1, maxZoom: 16
	})
var overlaymaps = {"Berlin Map 1772": Berlin_map_1772,"Berlin Map 1884": Berlin_map_1884,"Berlin 1980 B/W": Berlin_KH_1980,"Berlin 1980 Color":Berlin_KH_1980_PS}
var overlaylist = [Berlin_map_1772,Berlin_map_1884,Berlin_KH_1980,Berlin_KH_1980_PS]
