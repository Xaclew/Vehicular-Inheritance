/* 
//Vehicular Inheritance using a "Proto" object.

let vehicleProto = {
    numWheels: null,
    numDoors: null,
    meansOfPropulsion: null
};

function createVehicle(numWheels, numDoors, meansOfPropulsion) {
    let vehicle = Object.create(vehicleProto);
    vehicle.numWheels = numWheels;
    vehicle.numDoors = numDoors;
    vehicle.meansOfPropulsion = meansOfPropulsion;
    return vehicle;
}

let bike = createVehicle(2, 0, "pedaling");
let car = createVehicle(4, 4, "motor");
console.log(bike, car);

*/

//Vehicular Inheritance using a "Vehicle" constructor.

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Car(make, model, year, coupeOrSedan) {
    Vehicle.call(this, make, model, year)
    if(coupeOrSedan = "coupe"){
        this.numDoors = 2; 
    } else {
        this.numDoors = 4;
    }
    numWheels = 4;
    meansOfPropulsion = "motor";
    isLocked = false;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.unlockDoors = function() {
        if(isLocked) {
            isLocked = false;
        };
        console.log("Your"+" "+this.make+" "+this.model+" is unlocked!");
    }

Car.prototype.lockDoors = function() {
        if(!isLocked) {
            isLocked = true;
        }
        console.log("Your"+" "+this.make+" "+this.model+" is locked!");
    }

function Bike(make, model, year, hasSideCar) {
    Vehicle.call(this, make, model, year)
    this.hasSideCar = hasSideCar;
    if(!hasSideCar){
        this.numDoors = 0; 
        this.numWheels = 2;
    } else {
        this.numDoors = 1;
        this.numWheels = 3;
    }
    meansOfPropulsion = "pedaling";
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.popWheelie = function() {
    if(this.hasSideCar) {
        console.log("Your"+this.make+this.model+" can not pop a wheelie due to the sidecar throwing off the balance!")
    } else {
        let wheelieAttemptRoll = Math.floor(Math.random() * 100);
        console.log(wheelieAttemptRoll);
        if(wheelieAttemptRoll <= 50) {
            console.log("You fell and embarassed yourself!");
        } else {
            console.log("You popped a wheelie, sick!");
        }
    }
}


let hondaNSX = new Car("Honda", "NSX", 2000, "coupe");
console.log(hondaNSX);
console.log(hondaNSX.numDoors);
hondaNSX.lockDoors();
hondaNSX.unlockDoors();

let schwinnBeachCruiser = new Bike("Schwinn", "Beach Cruiser", 1950, false);
console.log(schwinnBeachCruiser);
console.log(schwinnBeachCruiser.numDoors);
schwinnBeachCruiser.popWheelie();













