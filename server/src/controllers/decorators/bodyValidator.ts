import { Metadatakeys } from './MetadataKeys';
import 'reflect-metadata';

export function bodyValidator(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(Metadatakeys.validator, keys, target, key);
  };
}
