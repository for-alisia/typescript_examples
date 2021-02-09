@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boat is ${this.color}`;
  }

  @logError('A boat was sunk in the ocean!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      throw new Error();
    }
  }
}

/** The simpliest decorator structure */
/** Target is a prototype (object with all methods of a class Boat) and key is a string - name of the method or property
 *  the decorator was used on.  */
function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
  console.log(target[key]); // undefined if applied to a property (prototype doesn't have properties, only methods definitions)
}

/** Decorator for method's parameter */
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

/** Decorator for whole class */
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
/** If doesn't use the @ in a class we can just do this: */

// testDecorator(Boat.prototype, 'pilot');

/** Decorators applies once only with class creation and doesn't apply when we create an instance */

/** Example how function-decorator converts in plain JS */

// var __decorate = function(decorators, target, key, desc) {
//   var desc = Object.getOwnPropertyDescriptor(target, key);

//   for (var decorator of decorators) {
//     decorator(target, key, desc);
//   }
// }

/** Decorator to handle an error in a method */
function logErrorWithoutCustomMsg(
  target: any,
  key: string,
  desc: PropertyDescriptor
) {
  /** We can't directly change the methods on a target (like target[key] = ...).
   * We need to access to it's value using object Property Descriptor (common ES5 syntax).
   * It contains an object
   * {
   *  value: 'method value here',
   *  writable: true,
   *  configurable: true,
   *  ennumerous: true
   * }
   */
  const method = desc.value;

  /** Change the method's value to handle an error */
  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, boat was sunk!');
    }
  };
}

/** Decorator factories */
/** If we want to customize decorator message just wrap the decorator function with an additional one */
function logError(msg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(msg);
      }
    };
  };
}

new Boat().pilot('fast', false);

/** Decorator can render some template */
/** Returns new class based on original constructor function, where we can
 * add new functionality
 */
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
