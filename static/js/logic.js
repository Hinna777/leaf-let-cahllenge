// Creating Map with centered at the geographical centre of United States
var myMap = L.map("map", {
  center: [39.82, -98.58],
  zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// Use this link to get the GeoJSON data of earthquakes in the last 7 days.
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


function chooseColor(depth) {
      if (depth < 10 ) return "yellow";
      else if (depth < 30) return "red";
      else if (depth < 50) return "orange";
      else if (depth < 70) return "green";
      else if (depth < 90) return "purple";
      else return "black";
}

// Getting our GeoJSON data
d3.json(link).then(function (data){
  createFeatures(data.features);
})

function createFeatures(data1){
  function onEachFeature(feature,layer){
      layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p></h4><hr><p>Magnitude: ${feature.properties.mag}</p>`);
  }

  var markertype = {
        fillColor: chooseColor(feature.geometry.coordinates[2]),
        color: "white",
        weight: 1.5,
        opacity: 0.75,
        fillOpacity: 0.75
      };
      return L.circle(coordinate, markertype);
    
}
