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

*/

//Vehicular Inheritance using Classes

class Vehicle{
    constructor(make, model, year, numWheels, numDoors, meansOfPropulsion,){
    this.make= make;
    this.model = model;
    this.year = year;
    this.numWheels = numWheels;
    this.numDoors = numDoors;
    this.meansOfPropulsion = meansOfPropulsion;
    this.soundAlert = function(){
        console.log("alertsound");
    }
    this.serviceVehicle = function(arr){
        var i = arr.length, j, temp;
        while(--i > 0){
            j = Math.floor(Math.random()*(i+1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;}
    console.log("You took your "+this.make+this.model+" to the shop, and they serviced your "+arr[0]+"!");
}
    }
}


class Car extends Vehicle{
    constructor(make, model, year, numWheels ,numDoors, meansOfPropulsion, isLocked){
        super(make, model, year, numWheels,numDoors,meansOfPropulsion,);
        isLocked = false;
        bodyType: if(numDoors = 2){
            this.bodyType = "coupe";
        } else {
            this.bodyType = "sedan";
        };
        this.soundAlert = function() {
            console.log("Your "+make+" "+model+" horn has sounded!");
        };
        this.componentPieces = [this.meansOfPropulsion, "brakes", "tires", "transmission", "oil", "windsheild wipers"];
        


        this.unlockDoors = function() {
            if(isLocked) {
                isLocked = false;
            };
            console.log("Your"+" "+this.make+" "+this.model+" is unlocked!");
        }
        
    
        this.lockDoors = function() {
            if(!isLocked) {
                isLocked = true;
            }
            console.log("Your"+" "+this.make+" "+this.model+" is locked!");
        }

    }
}

class Bike extends Vehicle{
    constructor(make, model, year, numWheels ,numDoors, meansOfPropulsion,){
        super(make, model, year, numWheels,numDoors,meansOfPropulsion,);
        bodyType: if(numWheels = 3){
            this.bodyType = "tricycle";
        } if(numWheels = 1) {
            this.bodyType = "unicycle";} else{
            this.bodyType = "bicycle";}
        

        this.soundAlert = function() {
            console.log("Your "+make+" "+model+" bell has sounded!");
        };
        this.componentPieces = [this.meansOfPropulsion, "brakes", "tires", "seat", "spokes", this.meansOfPropulsion];
        this.popWheelie = function(){
            if(this.hasSideCar) {
                console.log("Your"+this.make+this.model+" can not pop a wheelie due to the sidecar throwing off the balance!")
            } if(this.numWheels = 1){
                console.log("You can't pop a wheelie on a unicycle, try a bunnyhop instead!");} else {
                let wheelieAttemptRoll = Math.floor(Math.random() * 100);
                console.log(wheelieAttemptRoll);
                if(wheelieAttemptRoll <= 50) {
                    console.log("You fell and embarassed yourself!");
                } else {
                    console.log("You popped a wheelie, sick!");
                }
            }
        }
        this.bunnyHop = function(){
            let bunnyHopAttemptRoll = Math.floor(Math.random() * 100);
                console.log(bunnyHopAttemptRoll);
                if(bunnyHopAttemptRoll <= 70) {
                    console.log("You fell and embarassed yourself!");
                } else {
                    console.log("You did a bunny hop, that takes skill AND strength!");
                }
        }

    }
}

let teslaRoadster = new Car("Tesla", "Roadster", 2025, 4, 2, "electric motor");
teslaRoadster.soundAlert();
console.log(teslaRoadster);
teslaRoadster.serviceVehicle(teslaRoadster.componentPieces);
teslaRoadster.lockDoors();
teslaRoadster.unlockDoors();

let clownBike = new Bike("Circus", "Custom", 2000, 1, 0, "chain and pedals");
clownBike.soundAlert();
console.log(clownBike);
clownBike.serviceVehicle(clownBike.componentPieces);















