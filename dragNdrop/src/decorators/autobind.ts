/** Decorator allows to bind "this" to a method */
export function Autobind(_: any, __: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  return {
    configurable: true,
    enumerable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
}
