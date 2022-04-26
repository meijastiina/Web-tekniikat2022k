// Implement the following functionality:
// Create a car object with plate number OOP-001.
// Set car's speed to 120 km/h.
let car = {
    plateNumber: "OOP-001",
    currentSpeed: 120
}

// Print out the info about the car (plate number and current speed).
document.getElementById("printHere").innerHTML = "Car with plate number " + car.plateNumber + " is driving " + car.currentSpeed + " km/h.";

// Create another instance with different data. 
let car2 = {
    plateNumber: "OOP-313",
    currentSpeed: 80
}
// Print out the info.
document.getElementById("printHere").innerHTML += "<br>Car with plate number " + car2.plateNumber + " is driving " + car2.currentSpeed + " km/h.";
// Change the second car's speed. 
car2.currentSpeed = 90;
// Make sure everything works as expected.
// Print out the info.
document.getElementById("printHere").innerHTML += "<br>Car with plate number " + car2.plateNumber + " is driving " + car2.currentSpeed + " km/h.";