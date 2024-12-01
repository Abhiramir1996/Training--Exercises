function updateCities()
{
var state = document.getElementyId("state").value;
var citySelect = document.getElementById("city");
citySelect.innerHTML = "";

var defaultOption = document.createElement("option");
defaultOption.text = "Select a city";
citySelect.add(defaultOption);

 var cities = [];
            if (state === "Kerala") {
                cities = ["Pathanamthitta", "Kottayam", "Kollam"];
            } else if (state === "Karnataka") {
                cities = ["Bangalore", "Dallas", "Austin"];
            } else if (state === "Tamilnadu") {
                cities = ["Kambam", "Theni", "Palani"];
            }
for (var i = 0; i < cities.length; i++) {
                var option = document.createElement("option");
                option.text = cities[i];
                citySelect.add(option);
            }
        }