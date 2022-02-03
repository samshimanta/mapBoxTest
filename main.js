mapboxgl.accessToken = "pk.eyJ1Ijoibmlyb2JzaGltYW50YSIsImEiOiJja3o2dTFkem0xM21vMnVueDg3emo4eXJ1In0.t8ze-VoI0o6JUHTz9z-nlQ";
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/dark-v10', // style URL
center: [79.873 , 6.937], // starting position [lng, lat]
zoom: 14.15 // starting zoom
});