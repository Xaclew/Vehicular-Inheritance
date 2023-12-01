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



