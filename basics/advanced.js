/** Intersection types */
var _a;
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
/**------------------------------------- */
/** Type Casting */
var userInputElement = (document.getElementById('user-input'));
var userInputElement1 = document.getElementById('user-input');
userInputElement.value = 'Hi';
userInputElement1.value = 'there';
var errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital letter!'
};
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var resultAdd = add2('Max', 'Lena');
resultAdd.split(' ');
/**----------------------------------------- */
/** Optional Chaining */
var fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', desc: 'Company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
/** ---------------------------------------- */
/** Nullish Coalescing */
var someInput = '';
var storedData = someInput || 'DEFAULT'; // In JS
var storedData2 = someInput !== null && someInput !== void 0 ? someInput : 'DEFAULT'; // In TS: only null and undefined
