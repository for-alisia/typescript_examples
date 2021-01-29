/** Intersection types */

/** With types */
type Admin = {
  name: string;
  priveleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Lena',
  priveleges: ['1', '2'],
  startDate: new Date(),
};

/** With interfaces */

interface IAdmin {
  name: string;
  priveleges: string[];
}

interface IEmployee {
  name: string;
  startDate: Date;
}

interface IElevatedEmployee extends IAdmin, IEmployee {}

/** With primitives */

type Combine = string | number;
type Numeric = number | boolean;

type Universal = Combine & Numeric; //only numbers in this case

/**-------------------------------------- */

/** Type Guards */

/** With Primitives */
function add(a: Combine, b: Combine): number | string {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

/** With Interfaces and Types */
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee): void {
  console.log('Name: ' + emp.name);
  if ('priveleges' in emp) {
    console.log('Priveleges: ' + emp.priveleges);
  }
  if ('startDate' in emp) {
    console.log('Start date is ' + emp.startDate);
  }
}

/** With Classes */
class Car1 {
  drive() {
    console.log('Drive');
  }
}

class Truck {
  drive(): void {
    console.log('Driving a truck');
  }

  loadCargo(amount: number): void {
    console.log('Loading cargo ' + amount);
  }
}

type Vehicle = Car1 | Truck;

function useVehicle(vehicle: Vehicle): void {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(3);
  }
}

/**-------------------------------------------- */

/** Descriminated Union (Pattern) */

interface IBird {
  type: 'bird';
  flyingSpeed: number;
}

interface IHorse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = IBird | IHorse;

function moveAnimal(animal: Animal): void {
  let speed;
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

const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')
);
const userInputElement1 = document.getElementById(
  'user-input'
) as HTMLInputElement;

userInputElement.value = 'Hi';
userInputElement1.value = 'there';

/** ------------------------------------- */

/** Index Properties */

interface IErrorContainer {
  [key: string]: string;
}

const errorBag: IErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital letter!',
};

/** --------------------------------------- */

/** Functions Overloads */

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: Combine, b: Combine): number | string {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const resultAdd = add2('Max', 'Lena');
resultAdd.split(' ');

/**----------------------------------------- */

/** Optional Chaining */

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', desc: 'Company' },
};

console.log(fetchedUserData?.job?.title);

/** ---------------------------------------- */

/** Nullish Coalescing */

const someInput = '';

const storedData = someInput || 'DEFAULT'; // In JS

const storedData2 = someInput ?? 'DEFAULT'; // In TS: only null and undefined
