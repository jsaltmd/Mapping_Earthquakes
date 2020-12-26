// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow"
// }).addTo(map);


// Skill Drill
let line = [
    [37.6213, -122.3790],
    [30.1974292, -97.6663058],
    [43.67771760000001, -79.62481969999999],
    [40.641766, -73.780968]
  ];

  L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dashArray: '5,5'

}).addTo(map);



//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

//  // Skill Drill - Light Yellow Circle with Black Lines
//  L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'lightyellow', // #ffffa1
//     fillOpacity: 0.5,
//     radius: 300
//  }).addTo(map);

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//    });

//Skill Drill orange Circle.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         color: 'orange',
//         lineweight: 4,
//         radius: city.population/200000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//    });

  // We create the tile layer that will be the background of our map. (streets-v11) (dark-v10) (satellite-streets-v11) (light-v10)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

 