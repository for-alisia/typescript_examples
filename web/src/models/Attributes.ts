/** Common class to deal with attributes inside the other class */
export class Attributes<T> {
  constructor(private data: T) {}
  /** Constraint the values with generic type keys (K) */
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
