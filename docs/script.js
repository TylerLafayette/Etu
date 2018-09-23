console.log('Yes the script has loaded *smooch*')

// connecting to platform
var platform = new H.service.Platform({
    'app_id': 'ArXx0S0cOjZm6XAvwmOk',
    'app_code': 'OdzeFc1dnAJpiwgpGydBfw'
});

// creating map layers
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
});

// create map that's at default at the world view
var map = new H.Map(document.getElementById('map'),
    defaultLayers.normal.map, { pixelRatio: pixelRatio });

// giving the map interactivity
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// default interactivity ui components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// getting current location and rendering it to the map
function success(position) {
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
    map.setZoom(14)

    // creating markers
    var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">H</text></svg>'

    var icon = new H.map.Icon(svgMarkup),
        coords = { lat: position.coords.latitude, lng: position.coords.longitude },
        marker = new H.map.Marker(coords, { icon: icon });

    map.addObject(marker);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success)
} else {
    alert('Sorry, your browser doesn\'t support geolocation services.')
}
