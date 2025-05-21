declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ObjectConstructor {
    entries<T>(o: T): Entries<T>;
  }
}

type Entries<T> = Array<
  {
    [K in keyof T]: [K, T[K]];
  }[keyof T]
>;
