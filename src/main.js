mapboxgl.accessToken =
  "pk.eyJ1IjoiZnBoYW1zZCIsImEiOiJja3lheXR5ZXcwNDRpMzFwaTV2a3ZvMDgzIn0.TCS6y3GFriHSO10wQpzO6Q";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-122.0879, 37.42247],
  zoom: 13,
});

// DIRECTION COMPONENT
map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  }),
  "top-left"
);

// GEOCODER SEARCH
// map.addControl(
//   new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl,
//   }),
//   "top-right"
// );

// GEOLOCATION COMPONENT
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true,
  })
);

// NAVIGATION CONTROL COMPONENT
map.addControl(new mapboxgl.NavigationControl());

// MAP STYLE COMPONENT
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

for (const input of inputs) {
  input.onclick = (layer) => {
    const layerId = layer.target.id;
    map.setStyle("mapbox://styles/mapbox/" + layerId);
  };
}

function showLayer() {
  if (layerList.classList.contains("hidden")) {
    layerList.classList.remove("hidden");
  } else {
    layerList.classList.add("hidden");
  }
}
