
// map api

mapboxgl.accessToken = 'pk.eyJ1Ijoid3J4Z3V5MjAxMiIsImEiOiJjbHUza2RrZDcwdmd6MmlvdDYxdTUweDExIn0.UlzVSehyIZ2n_PHtU0mNUw';
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-74.5, 40], // starting position [lng, lat]
	zoom: 9, // starting zoom
});
