var map;
var sf = {lat:37.7676188, lng: -122.4373549};

function initMap() {

    var marker = new google.maps.Marker({
        position: sf,
        animation: google.maps.Animation.DROP,
        icon: new google.maps.MarkerImage('assets/img/pin.png',
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null,
        new google.maps.Size(22.580, 30)),
        title:"SF"
    });
    
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.6922924, lng: -121.6141804},
    zoom: 10,
    disableDefaultUI: true,
    styles: [
    {
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#101116"
        }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#212121"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#757575"
        },
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#9e9e9e"
        }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#bdbdbd"
        }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#181818"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#616161"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#1b1b1b"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#2c2c2c"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#4234ff"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#373737"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#0A2463"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#4e4e4e"
        }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#616161"
        }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#000000"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#3d3d3d"
        }
        ]
    }]});
    marker.setMap(map);
}