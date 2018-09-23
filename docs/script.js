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
//var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// default interactivity ui components
//var ui = H.ui.UI.createDefault(map, defaultLayers);

// getting current location and rendering it to the map
function success(position) {

}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success)
} else {
    alert('Sorry, your browser doesn\'t support geolocation services.')
}

map.setCenter({ lat: 37.5486678, lng: -122.05929580000002 })
map.setZoom(14)

// creating markers
var svgMarkup = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 391.7 472.9" style="enable-background:new 0 0 391.7 472.9;" xml:space="preserve"><style type="text/css">.st0{fill:#00E9BA;} .st1{fill:none;stroke:#000000;stroke-width:19.9029;stroke-miterlimit:10;}</style><defs></defs><path class="st0" d="M334.4,334.4L195.9,472.9L57.4,334.4c-76.5-76.5-76.5-200.5,0-277l0,0c76.5-76.5,200.5-76.5,277,0l0,0C410.9,133.9,410.9,257.9,334.4,334.4z"/><g><path class="st1" d="M129.7,214.1c0,37,30,67,67,67h0c37,0,67-30,67-67"/><circle cx="126.6" cy="99.7" r="12.7"/><circle cx="265.1" cy="99.5" r="12.7"/><polyline class="st1" points="195.5,121 195.5,186.3 228.5,186.3"/></g></svg>'

var icon = new H.map.Icon(svgMarkup)

var locations = [
    {
        name: "42 School",
        coords: { lat: 37.5486678, lng: -122.05929580000002 }
    },
    {
        name: "Ghirardelli Square",
        coords: { lat: 37.805876, lng: -122.422950 }
    },
    {
        name: "Noisebridge",
        coords: { lat: 37.7624207, lng: -122.4214393 }
    },
    {
        name: "White House",
        coords: { lat: 38.8976763, lng: -77.1065676 }
    }
]

for (var i = 0; i < locations.length; i++) {
    var marker = new H.map.Marker(locations[i].coords, { icon: icon })
    map.addObject(marker)
}

var client = algoliasearch('SF8DPZRBL2', 'b2ace7fc89497633418fb34766c3f3e3');
var index = client.initIndex();

// adding to index
index.addObjects(locations, (err, content) => {

    // settings for index
    index.setSettings({
        'searchableAttributes': [
            'name'
        ]
    }, (err, content) => {

    })
})

$("#round").change(() => {
    index.search($("#round").val(), function (err, content) {
        map.setCenter(content.hits[0].coords)
    })
})