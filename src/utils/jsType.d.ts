declare global {
  interface ObjectConstructor {
    entries<T>(o: T): Entries<T>;
  }
}

type Entries<T> = Array<
  {
    [K in keyof T]: [K, T[K]];
  }[keyof T]
>;
