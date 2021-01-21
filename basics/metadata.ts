import 'reflect-metadata';

/** Metadata with a simple object */

const plane = {
  color: 'red'
};

/** Adding and getting metadata to an object */
Reflect.defineMetadata('note', 'hi, there', plane);
Reflect.defineMetadata('height', 10, plane);
const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

/**  Adding and getting metadata to an object's property */
Reflect.defineMetadata('newNote', 'hello', plane, 'color');
const newNote = Reflect.getMetadata('newNote', plane, 'color');

/** Metadata with a class */

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('12345')
  fly(): void {
    console.log('vrrrr');
  }
}

/** Decorator for the method */
function markFunction(secretInfo: string) {
  return function(target: any, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

/** Decorator for the whole class */
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);

    console.log(secret);
  }
}
