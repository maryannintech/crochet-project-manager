export let currentLocation = localStorage.getItem("currentLocation") || "projects";

export function setCurrentLocation(location) {
    currentLocation = location;
    saveCurrentLocation();
}

function saveCurrentLocation() {
    localStorage.setItem("currentLocation", currentLocation)
}