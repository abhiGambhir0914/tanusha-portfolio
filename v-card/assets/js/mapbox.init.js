mapboxgl.accessToken = 'pk.eyJ1IjoiYWJpMDA5IiwiYSI6ImNrNWZwcmVycTExa3Aza21oemxibHk1OW0ifQ.GySS_BQ9XC_Jdo-7gIysag';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [77.211722, 28.633342], // starting position
    zoom: 13 // starting zoom
});
		
// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'New Delhi, Delhi, India'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([77.211722, 28.633342])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');