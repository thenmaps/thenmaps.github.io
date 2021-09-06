var basemaps = {"Map":mapbox_map, "Light":mapbox_light, "Dark":mapbox_dark, "Satellite":mapbox_satellite,"OpenStreetMap": osmLayer}
var title = L.control();
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'ctl title');
    this.update();
    return this._div;
};
title.update = function(props) {
    this._div.innerHTML = "Berlin Then and Now";
};
title.addTo(map);
L.control.layers(basemaps,overlaymaps, {collapsed: false}).addTo(map);
L.control.scale().addTo(map);
L.control.sideBySide(overlaylist).addTo(map);
