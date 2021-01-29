/** Intersection types */
var e1 = {
    name: 'Lena',
    priveleges: ['1', '2'],
    startDate: new Date()
};
/**-------------------------------------- */
/** Type Guards */
/** With Primitives */
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('priveleges' in emp) {
        console.log('Priveleges: ' + emp.priveleges);
    }
    if ('startDate' in emp) {
        console.log('Start date is ' + emp.startDate);
    }
}
/** With Classes */
var Car1 = /** @class */ (function () {
    function Car1() {
    }
    Car1.prototype.drive = function () {
        console.log('Drive');
    };
    return Car1;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo ' + amount);
    };
    return Truck;
}());
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(3);
    }
}
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
