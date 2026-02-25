
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SourceIngredient
 * 
 */
export type SourceIngredient = $Result.DefaultSelection<Prisma.$SourceIngredientPayload>
/**
 * Model SourceUnit
 * 
 */
export type SourceUnit = $Result.DefaultSelection<Prisma.$SourceUnitPayload>
/**
 * Model TargetIngredient
 * 
 */
export type TargetIngredient = $Result.DefaultSelection<Prisma.$TargetIngredientPayload>
/**
 * Model TargetUnit
 * 
 */
export type TargetUnit = $Result.DefaultSelection<Prisma.$TargetUnitPayload>
/**
 * Model SourceTargetIngredient
 * 
 */
export type SourceTargetIngredient = $Result.DefaultSelection<Prisma.$SourceTargetIngredientPayload>
/**
 * Model SourceTargetUnit
 * 
 */
export type SourceTargetUnit = $Result.DefaultSelection<Prisma.$SourceTargetUnitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MappingMethod: {
  HUMAN: 'HUMAN',
  FUZZY_V1: 'FUZZY_V1',
  CHAT_GPT: 'CHAT_GPT'
};

export type MappingMethod = (typeof MappingMethod)[keyof typeof MappingMethod]


export const SourceType: {
  GROCY: 'GROCY'
};

export type SourceType = (typeof SourceType)[keyof typeof SourceType]


export const TargetType: {
  JOW: 'JOW',
  GROCY: 'GROCY'
};

export type TargetType = (typeof TargetType)[keyof typeof TargetType]

}

export type MappingMethod = $Enums.MappingMethod

export const MappingMethod: typeof $Enums.MappingMethod

export type SourceType = $Enums.SourceType

export const SourceType: typeof $Enums.SourceType

export type TargetType = $Enums.TargetType

export const TargetType: typeof $Enums.TargetType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SourceIngredients
 * const sourceIngredients = await prisma.sourceIngredient.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SourceIngredients
   * const sourceIngredients = await prisma.sourceIngredient.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sourceIngredient`: Exposes CRUD operations for the **SourceIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceIngredients
    * const sourceIngredients = await prisma.sourceIngredient.findMany()
    * ```
    */
  get sourceIngredient(): Prisma.SourceIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceUnit`: Exposes CRUD operations for the **SourceUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceUnits
    * const sourceUnits = await prisma.sourceUnit.findMany()
    * ```
    */
  get sourceUnit(): Prisma.SourceUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targetIngredient`: Exposes CRUD operations for the **TargetIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TargetIngredients
    * const targetIngredients = await prisma.targetIngredient.findMany()
    * ```
    */
  get targetIngredient(): Prisma.TargetIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targetUnit`: Exposes CRUD operations for the **TargetUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TargetUnits
    * const targetUnits = await prisma.targetUnit.findMany()
    * ```
    */
  get targetUnit(): Prisma.TargetUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceTargetIngredient`: Exposes CRUD operations for the **SourceTargetIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceTargetIngredients
    * const sourceTargetIngredients = await prisma.sourceTargetIngredient.findMany()
    * ```
    */
  get sourceTargetIngredient(): Prisma.SourceTargetIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceTargetUnit`: Exposes CRUD operations for the **SourceTargetUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceTargetUnits
    * const sourceTargetUnits = await prisma.sourceTargetUnit.findMany()
    * ```
    */
  get sourceTargetUnit(): Prisma.SourceTargetUnitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SourceIngredient: 'SourceIngredient',
    SourceUnit: 'SourceUnit',
    TargetIngredient: 'TargetIngredient',
    TargetUnit: 'TargetUnit',
    SourceTargetIngredient: 'SourceTargetIngredient',
    SourceTargetUnit: 'SourceTargetUnit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sourceIngredient" | "sourceUnit" | "targetIngredient" | "targetUnit" | "sourceTargetIngredient" | "sourceTargetUnit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SourceIngredient: {
        payload: Prisma.$SourceIngredientPayload<ExtArgs>
        fields: Prisma.SourceIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>
          }
          findFirst: {
            args: Prisma.SourceIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>
          }
          findMany: {
            args: Prisma.SourceIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>[]
          }
          create: {
            args: Prisma.SourceIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>
          }
          createMany: {
            args: Prisma.SourceIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>[]
          }
          delete: {
            args: Prisma.SourceIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>
          }
          update: {
            args: Prisma.SourceIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>
          }
          deleteMany: {
            args: Prisma.SourceIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>[]
          }
          upsert: {
            args: Prisma.SourceIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceIngredientPayload>
          }
          aggregate: {
            args: Prisma.SourceIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceIngredient>
          }
          groupBy: {
            args: Prisma.SourceIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<SourceIngredientCountAggregateOutputType> | number
          }
        }
      }
      SourceUnit: {
        payload: Prisma.$SourceUnitPayload<ExtArgs>
        fields: Prisma.SourceUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>
          }
          findFirst: {
            args: Prisma.SourceUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>
          }
          findMany: {
            args: Prisma.SourceUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>[]
          }
          create: {
            args: Prisma.SourceUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>
          }
          createMany: {
            args: Prisma.SourceUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>[]
          }
          delete: {
            args: Prisma.SourceUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>
          }
          update: {
            args: Prisma.SourceUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>
          }
          deleteMany: {
            args: Prisma.SourceUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>[]
          }
          upsert: {
            args: Prisma.SourceUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUnitPayload>
          }
          aggregate: {
            args: Prisma.SourceUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceUnit>
          }
          groupBy: {
            args: Prisma.SourceUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceUnitCountArgs<ExtArgs>
            result: $Utils.Optional<SourceUnitCountAggregateOutputType> | number
          }
        }
      }
      TargetIngredient: {
        payload: Prisma.$TargetIngredientPayload<ExtArgs>
        fields: Prisma.TargetIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>
          }
          findFirst: {
            args: Prisma.TargetIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>
          }
          findMany: {
            args: Prisma.TargetIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>[]
          }
          create: {
            args: Prisma.TargetIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>
          }
          createMany: {
            args: Prisma.TargetIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TargetIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>[]
          }
          delete: {
            args: Prisma.TargetIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>
          }
          update: {
            args: Prisma.TargetIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>
          }
          deleteMany: {
            args: Prisma.TargetIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TargetIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TargetIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>[]
          }
          upsert: {
            args: Prisma.TargetIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetIngredientPayload>
          }
          aggregate: {
            args: Prisma.TargetIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargetIngredient>
          }
          groupBy: {
            args: Prisma.TargetIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<TargetIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<TargetIngredientCountAggregateOutputType> | number
          }
        }
      }
      TargetUnit: {
        payload: Prisma.$TargetUnitPayload<ExtArgs>
        fields: Prisma.TargetUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>
          }
          findFirst: {
            args: Prisma.TargetUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>
          }
          findMany: {
            args: Prisma.TargetUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>[]
          }
          create: {
            args: Prisma.TargetUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>
          }
          createMany: {
            args: Prisma.TargetUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TargetUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>[]
          }
          delete: {
            args: Prisma.TargetUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>
          }
          update: {
            args: Prisma.TargetUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>
          }
          deleteMany: {
            args: Prisma.TargetUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TargetUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TargetUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>[]
          }
          upsert: {
            args: Prisma.TargetUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetUnitPayload>
          }
          aggregate: {
            args: Prisma.TargetUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargetUnit>
          }
          groupBy: {
            args: Prisma.TargetUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<TargetUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetUnitCountArgs<ExtArgs>
            result: $Utils.Optional<TargetUnitCountAggregateOutputType> | number
          }
        }
      }
      SourceTargetIngredient: {
        payload: Prisma.$SourceTargetIngredientPayload<ExtArgs>
        fields: Prisma.SourceTargetIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceTargetIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceTargetIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>
          }
          findFirst: {
            args: Prisma.SourceTargetIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceTargetIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>
          }
          findMany: {
            args: Prisma.SourceTargetIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>[]
          }
          create: {
            args: Prisma.SourceTargetIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>
          }
          createMany: {
            args: Prisma.SourceTargetIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceTargetIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>[]
          }
          delete: {
            args: Prisma.SourceTargetIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>
          }
          update: {
            args: Prisma.SourceTargetIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>
          }
          deleteMany: {
            args: Prisma.SourceTargetIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceTargetIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceTargetIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>[]
          }
          upsert: {
            args: Prisma.SourceTargetIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetIngredientPayload>
          }
          aggregate: {
            args: Prisma.SourceTargetIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceTargetIngredient>
          }
          groupBy: {
            args: Prisma.SourceTargetIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceTargetIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceTargetIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<SourceTargetIngredientCountAggregateOutputType> | number
          }
        }
      }
      SourceTargetUnit: {
        payload: Prisma.$SourceTargetUnitPayload<ExtArgs>
        fields: Prisma.SourceTargetUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceTargetUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceTargetUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>
          }
          findFirst: {
            args: Prisma.SourceTargetUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceTargetUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>
          }
          findMany: {
            args: Prisma.SourceTargetUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>[]
          }
          create: {
            args: Prisma.SourceTargetUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>
          }
          createMany: {
            args: Prisma.SourceTargetUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceTargetUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>[]
          }
          delete: {
            args: Prisma.SourceTargetUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>
          }
          update: {
            args: Prisma.SourceTargetUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>
          }
          deleteMany: {
            args: Prisma.SourceTargetUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceTargetUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceTargetUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>[]
          }
          upsert: {
            args: Prisma.SourceTargetUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceTargetUnitPayload>
          }
          aggregate: {
            args: Prisma.SourceTargetUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceTargetUnit>
          }
          groupBy: {
            args: Prisma.SourceTargetUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceTargetUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceTargetUnitCountArgs<ExtArgs>
            result: $Utils.Optional<SourceTargetUnitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sourceIngredient?: SourceIngredientOmit
    sourceUnit?: SourceUnitOmit
    targetIngredient?: TargetIngredientOmit
    targetUnit?: TargetUnitOmit
    sourceTargetIngredient?: SourceTargetIngredientOmit
    sourceTargetUnit?: SourceTargetUnitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SourceIngredientCountOutputType
   */

  export type SourceIngredientCountOutputType = {
    mappings: number
  }

  export type SourceIngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | SourceIngredientCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * SourceIngredientCountOutputType without action
   */
  export type SourceIngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredientCountOutputType
     */
    select?: SourceIngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceIngredientCountOutputType without action
   */
  export type SourceIngredientCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceTargetIngredientWhereInput
  }


  /**
   * Count Type SourceUnitCountOutputType
   */

  export type SourceUnitCountOutputType = {
    mappings: number
  }

  export type SourceUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | SourceUnitCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * SourceUnitCountOutputType without action
   */
  export type SourceUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnitCountOutputType
     */
    select?: SourceUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceUnitCountOutputType without action
   */
  export type SourceUnitCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceTargetUnitWhereInput
  }


  /**
   * Count Type TargetIngredientCountOutputType
   */

  export type TargetIngredientCountOutputType = {
    mappings: number
  }

  export type TargetIngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | TargetIngredientCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * TargetIngredientCountOutputType without action
   */
  export type TargetIngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredientCountOutputType
     */
    select?: TargetIngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TargetIngredientCountOutputType without action
   */
  export type TargetIngredientCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceTargetIngredientWhereInput
  }


  /**
   * Count Type TargetUnitCountOutputType
   */

  export type TargetUnitCountOutputType = {
    mappings: number
  }

  export type TargetUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | TargetUnitCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * TargetUnitCountOutputType without action
   */
  export type TargetUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnitCountOutputType
     */
    select?: TargetUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TargetUnitCountOutputType without action
   */
  export type TargetUnitCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceTargetUnitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SourceIngredient
   */

  export type AggregateSourceIngredient = {
    _count: SourceIngredientCountAggregateOutputType | null
    _min: SourceIngredientMinAggregateOutputType | null
    _max: SourceIngredientMaxAggregateOutputType | null
  }

  export type SourceIngredientMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    label: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceIngredientMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    label: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceIngredientCountAggregateOutputType = {
    id: number
    externalId: number
    label: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SourceIngredientMinAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceIngredientMaxAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceIngredientCountAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SourceIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceIngredient to aggregate.
     */
    where?: SourceIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceIngredients to fetch.
     */
    orderBy?: SourceIngredientOrderByWithRelationInput | SourceIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceIngredients
    **/
    _count?: true | SourceIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceIngredientMaxAggregateInputType
  }

  export type GetSourceIngredientAggregateType<T extends SourceIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceIngredient[P]>
      : GetScalarType<T[P], AggregateSourceIngredient[P]>
  }




  export type SourceIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceIngredientWhereInput
    orderBy?: SourceIngredientOrderByWithAggregationInput | SourceIngredientOrderByWithAggregationInput[]
    by: SourceIngredientScalarFieldEnum[] | SourceIngredientScalarFieldEnum
    having?: SourceIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceIngredientCountAggregateInputType | true
    _min?: SourceIngredientMinAggregateInputType
    _max?: SourceIngredientMaxAggregateInputType
  }

  export type SourceIngredientGroupByOutputType = {
    id: string
    externalId: string
    label: string
    source: string
    createdAt: Date
    updatedAt: Date
    _count: SourceIngredientCountAggregateOutputType | null
    _min: SourceIngredientMinAggregateOutputType | null
    _max: SourceIngredientMaxAggregateOutputType | null
  }

  type GetSourceIngredientGroupByPayload<T extends SourceIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], SourceIngredientGroupByOutputType[P]>
        }
      >
    >


  export type SourceIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mappings?: boolean | SourceIngredient$mappingsArgs<ExtArgs>
    _count?: boolean | SourceIngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceIngredient"]>

  export type SourceIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sourceIngredient"]>

  export type SourceIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sourceIngredient"]>

  export type SourceIngredientSelectScalar = {
    id?: boolean
    externalId?: boolean
    label?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SourceIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "label" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["sourceIngredient"]>
  export type SourceIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | SourceIngredient$mappingsArgs<ExtArgs>
    _count?: boolean | SourceIngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SourceIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SourceIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceIngredient"
    objects: {
      mappings: Prisma.$SourceTargetIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
      label: string
      source: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sourceIngredient"]>
    composites: {}
  }

  type SourceIngredientGetPayload<S extends boolean | null | undefined | SourceIngredientDefaultArgs> = $Result.GetResult<Prisma.$SourceIngredientPayload, S>

  type SourceIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceIngredientCountAggregateInputType | true
    }

  export interface SourceIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceIngredient'], meta: { name: 'SourceIngredient' } }
    /**
     * Find zero or one SourceIngredient that matches the filter.
     * @param {SourceIngredientFindUniqueArgs} args - Arguments to find a SourceIngredient
     * @example
     * // Get one SourceIngredient
     * const sourceIngredient = await prisma.sourceIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceIngredientFindUniqueArgs>(args: SelectSubset<T, SourceIngredientFindUniqueArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceIngredientFindUniqueOrThrowArgs} args - Arguments to find a SourceIngredient
     * @example
     * // Get one SourceIngredient
     * const sourceIngredient = await prisma.sourceIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceIngredientFindFirstArgs} args - Arguments to find a SourceIngredient
     * @example
     * // Get one SourceIngredient
     * const sourceIngredient = await prisma.sourceIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceIngredientFindFirstArgs>(args?: SelectSubset<T, SourceIngredientFindFirstArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceIngredientFindFirstOrThrowArgs} args - Arguments to find a SourceIngredient
     * @example
     * // Get one SourceIngredient
     * const sourceIngredient = await prisma.sourceIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceIngredients
     * const sourceIngredients = await prisma.sourceIngredient.findMany()
     * 
     * // Get first 10 SourceIngredients
     * const sourceIngredients = await prisma.sourceIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceIngredientWithIdOnly = await prisma.sourceIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceIngredientFindManyArgs>(args?: SelectSubset<T, SourceIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceIngredient.
     * @param {SourceIngredientCreateArgs} args - Arguments to create a SourceIngredient.
     * @example
     * // Create one SourceIngredient
     * const SourceIngredient = await prisma.sourceIngredient.create({
     *   data: {
     *     // ... data to create a SourceIngredient
     *   }
     * })
     * 
     */
    create<T extends SourceIngredientCreateArgs>(args: SelectSubset<T, SourceIngredientCreateArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceIngredients.
     * @param {SourceIngredientCreateManyArgs} args - Arguments to create many SourceIngredients.
     * @example
     * // Create many SourceIngredients
     * const sourceIngredient = await prisma.sourceIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceIngredientCreateManyArgs>(args?: SelectSubset<T, SourceIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceIngredients and returns the data saved in the database.
     * @param {SourceIngredientCreateManyAndReturnArgs} args - Arguments to create many SourceIngredients.
     * @example
     * // Create many SourceIngredients
     * const sourceIngredient = await prisma.sourceIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceIngredients and only return the `id`
     * const sourceIngredientWithIdOnly = await prisma.sourceIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceIngredient.
     * @param {SourceIngredientDeleteArgs} args - Arguments to delete one SourceIngredient.
     * @example
     * // Delete one SourceIngredient
     * const SourceIngredient = await prisma.sourceIngredient.delete({
     *   where: {
     *     // ... filter to delete one SourceIngredient
     *   }
     * })
     * 
     */
    delete<T extends SourceIngredientDeleteArgs>(args: SelectSubset<T, SourceIngredientDeleteArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceIngredient.
     * @param {SourceIngredientUpdateArgs} args - Arguments to update one SourceIngredient.
     * @example
     * // Update one SourceIngredient
     * const sourceIngredient = await prisma.sourceIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceIngredientUpdateArgs>(args: SelectSubset<T, SourceIngredientUpdateArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceIngredients.
     * @param {SourceIngredientDeleteManyArgs} args - Arguments to filter SourceIngredients to delete.
     * @example
     * // Delete a few SourceIngredients
     * const { count } = await prisma.sourceIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceIngredientDeleteManyArgs>(args?: SelectSubset<T, SourceIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceIngredients
     * const sourceIngredient = await prisma.sourceIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceIngredientUpdateManyArgs>(args: SelectSubset<T, SourceIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceIngredients and returns the data updated in the database.
     * @param {SourceIngredientUpdateManyAndReturnArgs} args - Arguments to update many SourceIngredients.
     * @example
     * // Update many SourceIngredients
     * const sourceIngredient = await prisma.sourceIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceIngredients and only return the `id`
     * const sourceIngredientWithIdOnly = await prisma.sourceIngredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceIngredient.
     * @param {SourceIngredientUpsertArgs} args - Arguments to update or create a SourceIngredient.
     * @example
     * // Update or create a SourceIngredient
     * const sourceIngredient = await prisma.sourceIngredient.upsert({
     *   create: {
     *     // ... data to create a SourceIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceIngredient we want to update
     *   }
     * })
     */
    upsert<T extends SourceIngredientUpsertArgs>(args: SelectSubset<T, SourceIngredientUpsertArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceIngredientCountArgs} args - Arguments to filter SourceIngredients to count.
     * @example
     * // Count the number of SourceIngredients
     * const count = await prisma.sourceIngredient.count({
     *   where: {
     *     // ... the filter for the SourceIngredients we want to count
     *   }
     * })
    **/
    count<T extends SourceIngredientCountArgs>(
      args?: Subset<T, SourceIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceIngredientAggregateArgs>(args: Subset<T, SourceIngredientAggregateArgs>): Prisma.PrismaPromise<GetSourceIngredientAggregateType<T>>

    /**
     * Group by SourceIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceIngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceIngredientGroupByArgs['orderBy'] }
        : { orderBy?: SourceIngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceIngredient model
   */
  readonly fields: SourceIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends SourceIngredient$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, SourceIngredient$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceIngredient model
   */
  interface SourceIngredientFieldRefs {
    readonly id: FieldRef<"SourceIngredient", 'String'>
    readonly externalId: FieldRef<"SourceIngredient", 'String'>
    readonly label: FieldRef<"SourceIngredient", 'String'>
    readonly source: FieldRef<"SourceIngredient", 'String'>
    readonly createdAt: FieldRef<"SourceIngredient", 'DateTime'>
    readonly updatedAt: FieldRef<"SourceIngredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SourceIngredient findUnique
   */
  export type SourceIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceIngredient to fetch.
     */
    where: SourceIngredientWhereUniqueInput
  }

  /**
   * SourceIngredient findUniqueOrThrow
   */
  export type SourceIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceIngredient to fetch.
     */
    where: SourceIngredientWhereUniqueInput
  }

  /**
   * SourceIngredient findFirst
   */
  export type SourceIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceIngredient to fetch.
     */
    where?: SourceIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceIngredients to fetch.
     */
    orderBy?: SourceIngredientOrderByWithRelationInput | SourceIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceIngredients.
     */
    cursor?: SourceIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceIngredients.
     */
    distinct?: SourceIngredientScalarFieldEnum | SourceIngredientScalarFieldEnum[]
  }

  /**
   * SourceIngredient findFirstOrThrow
   */
  export type SourceIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceIngredient to fetch.
     */
    where?: SourceIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceIngredients to fetch.
     */
    orderBy?: SourceIngredientOrderByWithRelationInput | SourceIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceIngredients.
     */
    cursor?: SourceIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceIngredients.
     */
    distinct?: SourceIngredientScalarFieldEnum | SourceIngredientScalarFieldEnum[]
  }

  /**
   * SourceIngredient findMany
   */
  export type SourceIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceIngredients to fetch.
     */
    where?: SourceIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceIngredients to fetch.
     */
    orderBy?: SourceIngredientOrderByWithRelationInput | SourceIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceIngredients.
     */
    cursor?: SourceIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceIngredients.
     */
    skip?: number
    distinct?: SourceIngredientScalarFieldEnum | SourceIngredientScalarFieldEnum[]
  }

  /**
   * SourceIngredient create
   */
  export type SourceIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceIngredient.
     */
    data: XOR<SourceIngredientCreateInput, SourceIngredientUncheckedCreateInput>
  }

  /**
   * SourceIngredient createMany
   */
  export type SourceIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceIngredients.
     */
    data: SourceIngredientCreateManyInput | SourceIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceIngredient createManyAndReturn
   */
  export type SourceIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many SourceIngredients.
     */
    data: SourceIngredientCreateManyInput | SourceIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceIngredient update
   */
  export type SourceIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceIngredient.
     */
    data: XOR<SourceIngredientUpdateInput, SourceIngredientUncheckedUpdateInput>
    /**
     * Choose, which SourceIngredient to update.
     */
    where: SourceIngredientWhereUniqueInput
  }

  /**
   * SourceIngredient updateMany
   */
  export type SourceIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceIngredients.
     */
    data: XOR<SourceIngredientUpdateManyMutationInput, SourceIngredientUncheckedUpdateManyInput>
    /**
     * Filter which SourceIngredients to update
     */
    where?: SourceIngredientWhereInput
    /**
     * Limit how many SourceIngredients to update.
     */
    limit?: number
  }

  /**
   * SourceIngredient updateManyAndReturn
   */
  export type SourceIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * The data used to update SourceIngredients.
     */
    data: XOR<SourceIngredientUpdateManyMutationInput, SourceIngredientUncheckedUpdateManyInput>
    /**
     * Filter which SourceIngredients to update
     */
    where?: SourceIngredientWhereInput
    /**
     * Limit how many SourceIngredients to update.
     */
    limit?: number
  }

  /**
   * SourceIngredient upsert
   */
  export type SourceIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceIngredient to update in case it exists.
     */
    where: SourceIngredientWhereUniqueInput
    /**
     * In case the SourceIngredient found by the `where` argument doesn't exist, create a new SourceIngredient with this data.
     */
    create: XOR<SourceIngredientCreateInput, SourceIngredientUncheckedCreateInput>
    /**
     * In case the SourceIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceIngredientUpdateInput, SourceIngredientUncheckedUpdateInput>
  }

  /**
   * SourceIngredient delete
   */
  export type SourceIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
    /**
     * Filter which SourceIngredient to delete.
     */
    where: SourceIngredientWhereUniqueInput
  }

  /**
   * SourceIngredient deleteMany
   */
  export type SourceIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceIngredients to delete
     */
    where?: SourceIngredientWhereInput
    /**
     * Limit how many SourceIngredients to delete.
     */
    limit?: number
  }

  /**
   * SourceIngredient.mappings
   */
  export type SourceIngredient$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    where?: SourceTargetIngredientWhereInput
    orderBy?: SourceTargetIngredientOrderByWithRelationInput | SourceTargetIngredientOrderByWithRelationInput[]
    cursor?: SourceTargetIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceTargetIngredientScalarFieldEnum | SourceTargetIngredientScalarFieldEnum[]
  }

  /**
   * SourceIngredient without action
   */
  export type SourceIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceIngredient
     */
    select?: SourceIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceIngredient
     */
    omit?: SourceIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceIngredientInclude<ExtArgs> | null
  }


  /**
   * Model SourceUnit
   */

  export type AggregateSourceUnit = {
    _count: SourceUnitCountAggregateOutputType | null
    _min: SourceUnitMinAggregateOutputType | null
    _max: SourceUnitMaxAggregateOutputType | null
  }

  export type SourceUnitMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    label: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceUnitMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    label: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceUnitCountAggregateOutputType = {
    id: number
    externalId: number
    label: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SourceUnitMinAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceUnitMaxAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceUnitCountAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SourceUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceUnit to aggregate.
     */
    where?: SourceUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceUnits to fetch.
     */
    orderBy?: SourceUnitOrderByWithRelationInput | SourceUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceUnits
    **/
    _count?: true | SourceUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceUnitMaxAggregateInputType
  }

  export type GetSourceUnitAggregateType<T extends SourceUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceUnit[P]>
      : GetScalarType<T[P], AggregateSourceUnit[P]>
  }




  export type SourceUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceUnitWhereInput
    orderBy?: SourceUnitOrderByWithAggregationInput | SourceUnitOrderByWithAggregationInput[]
    by: SourceUnitScalarFieldEnum[] | SourceUnitScalarFieldEnum
    having?: SourceUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceUnitCountAggregateInputType | true
    _min?: SourceUnitMinAggregateInputType
    _max?: SourceUnitMaxAggregateInputType
  }

  export type SourceUnitGroupByOutputType = {
    id: string
    externalId: string
    label: string
    source: string
    createdAt: Date
    updatedAt: Date
    _count: SourceUnitCountAggregateOutputType | null
    _min: SourceUnitMinAggregateOutputType | null
    _max: SourceUnitMaxAggregateOutputType | null
  }

  type GetSourceUnitGroupByPayload<T extends SourceUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceUnitGroupByOutputType[P]>
            : GetScalarType<T[P], SourceUnitGroupByOutputType[P]>
        }
      >
    >


  export type SourceUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mappings?: boolean | SourceUnit$mappingsArgs<ExtArgs>
    _count?: boolean | SourceUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceUnit"]>

  export type SourceUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sourceUnit"]>

  export type SourceUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sourceUnit"]>

  export type SourceUnitSelectScalar = {
    id?: boolean
    externalId?: boolean
    label?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SourceUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "label" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["sourceUnit"]>
  export type SourceUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | SourceUnit$mappingsArgs<ExtArgs>
    _count?: boolean | SourceUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SourceUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SourceUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceUnit"
    objects: {
      mappings: Prisma.$SourceTargetUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
      label: string
      source: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sourceUnit"]>
    composites: {}
  }

  type SourceUnitGetPayload<S extends boolean | null | undefined | SourceUnitDefaultArgs> = $Result.GetResult<Prisma.$SourceUnitPayload, S>

  type SourceUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceUnitCountAggregateInputType | true
    }

  export interface SourceUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceUnit'], meta: { name: 'SourceUnit' } }
    /**
     * Find zero or one SourceUnit that matches the filter.
     * @param {SourceUnitFindUniqueArgs} args - Arguments to find a SourceUnit
     * @example
     * // Get one SourceUnit
     * const sourceUnit = await prisma.sourceUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceUnitFindUniqueArgs>(args: SelectSubset<T, SourceUnitFindUniqueArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceUnitFindUniqueOrThrowArgs} args - Arguments to find a SourceUnit
     * @example
     * // Get one SourceUnit
     * const sourceUnit = await prisma.sourceUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUnitFindFirstArgs} args - Arguments to find a SourceUnit
     * @example
     * // Get one SourceUnit
     * const sourceUnit = await prisma.sourceUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceUnitFindFirstArgs>(args?: SelectSubset<T, SourceUnitFindFirstArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUnitFindFirstOrThrowArgs} args - Arguments to find a SourceUnit
     * @example
     * // Get one SourceUnit
     * const sourceUnit = await prisma.sourceUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceUnits
     * const sourceUnits = await prisma.sourceUnit.findMany()
     * 
     * // Get first 10 SourceUnits
     * const sourceUnits = await prisma.sourceUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceUnitWithIdOnly = await prisma.sourceUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceUnitFindManyArgs>(args?: SelectSubset<T, SourceUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceUnit.
     * @param {SourceUnitCreateArgs} args - Arguments to create a SourceUnit.
     * @example
     * // Create one SourceUnit
     * const SourceUnit = await prisma.sourceUnit.create({
     *   data: {
     *     // ... data to create a SourceUnit
     *   }
     * })
     * 
     */
    create<T extends SourceUnitCreateArgs>(args: SelectSubset<T, SourceUnitCreateArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceUnits.
     * @param {SourceUnitCreateManyArgs} args - Arguments to create many SourceUnits.
     * @example
     * // Create many SourceUnits
     * const sourceUnit = await prisma.sourceUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceUnitCreateManyArgs>(args?: SelectSubset<T, SourceUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceUnits and returns the data saved in the database.
     * @param {SourceUnitCreateManyAndReturnArgs} args - Arguments to create many SourceUnits.
     * @example
     * // Create many SourceUnits
     * const sourceUnit = await prisma.sourceUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceUnits and only return the `id`
     * const sourceUnitWithIdOnly = await prisma.sourceUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceUnit.
     * @param {SourceUnitDeleteArgs} args - Arguments to delete one SourceUnit.
     * @example
     * // Delete one SourceUnit
     * const SourceUnit = await prisma.sourceUnit.delete({
     *   where: {
     *     // ... filter to delete one SourceUnit
     *   }
     * })
     * 
     */
    delete<T extends SourceUnitDeleteArgs>(args: SelectSubset<T, SourceUnitDeleteArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceUnit.
     * @param {SourceUnitUpdateArgs} args - Arguments to update one SourceUnit.
     * @example
     * // Update one SourceUnit
     * const sourceUnit = await prisma.sourceUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUnitUpdateArgs>(args: SelectSubset<T, SourceUnitUpdateArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceUnits.
     * @param {SourceUnitDeleteManyArgs} args - Arguments to filter SourceUnits to delete.
     * @example
     * // Delete a few SourceUnits
     * const { count } = await prisma.sourceUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceUnitDeleteManyArgs>(args?: SelectSubset<T, SourceUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceUnits
     * const sourceUnit = await prisma.sourceUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUnitUpdateManyArgs>(args: SelectSubset<T, SourceUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceUnits and returns the data updated in the database.
     * @param {SourceUnitUpdateManyAndReturnArgs} args - Arguments to update many SourceUnits.
     * @example
     * // Update many SourceUnits
     * const sourceUnit = await prisma.sourceUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceUnits and only return the `id`
     * const sourceUnitWithIdOnly = await prisma.sourceUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceUnit.
     * @param {SourceUnitUpsertArgs} args - Arguments to update or create a SourceUnit.
     * @example
     * // Update or create a SourceUnit
     * const sourceUnit = await prisma.sourceUnit.upsert({
     *   create: {
     *     // ... data to create a SourceUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceUnit we want to update
     *   }
     * })
     */
    upsert<T extends SourceUnitUpsertArgs>(args: SelectSubset<T, SourceUnitUpsertArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUnitCountArgs} args - Arguments to filter SourceUnits to count.
     * @example
     * // Count the number of SourceUnits
     * const count = await prisma.sourceUnit.count({
     *   where: {
     *     // ... the filter for the SourceUnits we want to count
     *   }
     * })
    **/
    count<T extends SourceUnitCountArgs>(
      args?: Subset<T, SourceUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceUnitAggregateArgs>(args: Subset<T, SourceUnitAggregateArgs>): Prisma.PrismaPromise<GetSourceUnitAggregateType<T>>

    /**
     * Group by SourceUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceUnitGroupByArgs['orderBy'] }
        : { orderBy?: SourceUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceUnit model
   */
  readonly fields: SourceUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends SourceUnit$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, SourceUnit$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceUnit model
   */
  interface SourceUnitFieldRefs {
    readonly id: FieldRef<"SourceUnit", 'String'>
    readonly externalId: FieldRef<"SourceUnit", 'String'>
    readonly label: FieldRef<"SourceUnit", 'String'>
    readonly source: FieldRef<"SourceUnit", 'String'>
    readonly createdAt: FieldRef<"SourceUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"SourceUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SourceUnit findUnique
   */
  export type SourceUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceUnit to fetch.
     */
    where: SourceUnitWhereUniqueInput
  }

  /**
   * SourceUnit findUniqueOrThrow
   */
  export type SourceUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceUnit to fetch.
     */
    where: SourceUnitWhereUniqueInput
  }

  /**
   * SourceUnit findFirst
   */
  export type SourceUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceUnit to fetch.
     */
    where?: SourceUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceUnits to fetch.
     */
    orderBy?: SourceUnitOrderByWithRelationInput | SourceUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceUnits.
     */
    cursor?: SourceUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceUnits.
     */
    distinct?: SourceUnitScalarFieldEnum | SourceUnitScalarFieldEnum[]
  }

  /**
   * SourceUnit findFirstOrThrow
   */
  export type SourceUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceUnit to fetch.
     */
    where?: SourceUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceUnits to fetch.
     */
    orderBy?: SourceUnitOrderByWithRelationInput | SourceUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceUnits.
     */
    cursor?: SourceUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceUnits.
     */
    distinct?: SourceUnitScalarFieldEnum | SourceUnitScalarFieldEnum[]
  }

  /**
   * SourceUnit findMany
   */
  export type SourceUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceUnits to fetch.
     */
    where?: SourceUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceUnits to fetch.
     */
    orderBy?: SourceUnitOrderByWithRelationInput | SourceUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceUnits.
     */
    cursor?: SourceUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceUnits.
     */
    skip?: number
    distinct?: SourceUnitScalarFieldEnum | SourceUnitScalarFieldEnum[]
  }

  /**
   * SourceUnit create
   */
  export type SourceUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceUnit.
     */
    data: XOR<SourceUnitCreateInput, SourceUnitUncheckedCreateInput>
  }

  /**
   * SourceUnit createMany
   */
  export type SourceUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceUnits.
     */
    data: SourceUnitCreateManyInput | SourceUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceUnit createManyAndReturn
   */
  export type SourceUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * The data used to create many SourceUnits.
     */
    data: SourceUnitCreateManyInput | SourceUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceUnit update
   */
  export type SourceUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceUnit.
     */
    data: XOR<SourceUnitUpdateInput, SourceUnitUncheckedUpdateInput>
    /**
     * Choose, which SourceUnit to update.
     */
    where: SourceUnitWhereUniqueInput
  }

  /**
   * SourceUnit updateMany
   */
  export type SourceUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceUnits.
     */
    data: XOR<SourceUnitUpdateManyMutationInput, SourceUnitUncheckedUpdateManyInput>
    /**
     * Filter which SourceUnits to update
     */
    where?: SourceUnitWhereInput
    /**
     * Limit how many SourceUnits to update.
     */
    limit?: number
  }

  /**
   * SourceUnit updateManyAndReturn
   */
  export type SourceUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * The data used to update SourceUnits.
     */
    data: XOR<SourceUnitUpdateManyMutationInput, SourceUnitUncheckedUpdateManyInput>
    /**
     * Filter which SourceUnits to update
     */
    where?: SourceUnitWhereInput
    /**
     * Limit how many SourceUnits to update.
     */
    limit?: number
  }

  /**
   * SourceUnit upsert
   */
  export type SourceUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceUnit to update in case it exists.
     */
    where: SourceUnitWhereUniqueInput
    /**
     * In case the SourceUnit found by the `where` argument doesn't exist, create a new SourceUnit with this data.
     */
    create: XOR<SourceUnitCreateInput, SourceUnitUncheckedCreateInput>
    /**
     * In case the SourceUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUnitUpdateInput, SourceUnitUncheckedUpdateInput>
  }

  /**
   * SourceUnit delete
   */
  export type SourceUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
    /**
     * Filter which SourceUnit to delete.
     */
    where: SourceUnitWhereUniqueInput
  }

  /**
   * SourceUnit deleteMany
   */
  export type SourceUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceUnits to delete
     */
    where?: SourceUnitWhereInput
    /**
     * Limit how many SourceUnits to delete.
     */
    limit?: number
  }

  /**
   * SourceUnit.mappings
   */
  export type SourceUnit$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    where?: SourceTargetUnitWhereInput
    orderBy?: SourceTargetUnitOrderByWithRelationInput | SourceTargetUnitOrderByWithRelationInput[]
    cursor?: SourceTargetUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceTargetUnitScalarFieldEnum | SourceTargetUnitScalarFieldEnum[]
  }

  /**
   * SourceUnit without action
   */
  export type SourceUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUnit
     */
    select?: SourceUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUnit
     */
    omit?: SourceUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUnitInclude<ExtArgs> | null
  }


  /**
   * Model TargetIngredient
   */

  export type AggregateTargetIngredient = {
    _count: TargetIngredientCountAggregateOutputType | null
    _min: TargetIngredientMinAggregateOutputType | null
    _max: TargetIngredientMaxAggregateOutputType | null
  }

  export type TargetIngredientMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    label: string | null
    target: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TargetIngredientMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    label: string | null
    target: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TargetIngredientCountAggregateOutputType = {
    id: number
    externalId: number
    label: number
    target: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TargetIngredientMinAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TargetIngredientMaxAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TargetIngredientCountAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    target?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TargetIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetIngredient to aggregate.
     */
    where?: TargetIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetIngredients to fetch.
     */
    orderBy?: TargetIngredientOrderByWithRelationInput | TargetIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TargetIngredients
    **/
    _count?: true | TargetIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetIngredientMaxAggregateInputType
  }

  export type GetTargetIngredientAggregateType<T extends TargetIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateTargetIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargetIngredient[P]>
      : GetScalarType<T[P], AggregateTargetIngredient[P]>
  }




  export type TargetIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetIngredientWhereInput
    orderBy?: TargetIngredientOrderByWithAggregationInput | TargetIngredientOrderByWithAggregationInput[]
    by: TargetIngredientScalarFieldEnum[] | TargetIngredientScalarFieldEnum
    having?: TargetIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetIngredientCountAggregateInputType | true
    _min?: TargetIngredientMinAggregateInputType
    _max?: TargetIngredientMaxAggregateInputType
  }

  export type TargetIngredientGroupByOutputType = {
    id: string
    externalId: string
    label: string
    target: string
    createdAt: Date
    updatedAt: Date
    _count: TargetIngredientCountAggregateOutputType | null
    _min: TargetIngredientMinAggregateOutputType | null
    _max: TargetIngredientMaxAggregateOutputType | null
  }

  type GetTargetIngredientGroupByPayload<T extends TargetIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], TargetIngredientGroupByOutputType[P]>
        }
      >
    >


  export type TargetIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mappings?: boolean | TargetIngredient$mappingsArgs<ExtArgs>
    _count?: boolean | TargetIngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetIngredient"]>

  export type TargetIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["targetIngredient"]>

  export type TargetIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["targetIngredient"]>

  export type TargetIngredientSelectScalar = {
    id?: boolean
    externalId?: boolean
    label?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TargetIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "label" | "target" | "createdAt" | "updatedAt", ExtArgs["result"]["targetIngredient"]>
  export type TargetIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | TargetIngredient$mappingsArgs<ExtArgs>
    _count?: boolean | TargetIngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TargetIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TargetIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TargetIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TargetIngredient"
    objects: {
      mappings: Prisma.$SourceTargetIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
      label: string
      target: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["targetIngredient"]>
    composites: {}
  }

  type TargetIngredientGetPayload<S extends boolean | null | undefined | TargetIngredientDefaultArgs> = $Result.GetResult<Prisma.$TargetIngredientPayload, S>

  type TargetIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TargetIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TargetIngredientCountAggregateInputType | true
    }

  export interface TargetIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TargetIngredient'], meta: { name: 'TargetIngredient' } }
    /**
     * Find zero or one TargetIngredient that matches the filter.
     * @param {TargetIngredientFindUniqueArgs} args - Arguments to find a TargetIngredient
     * @example
     * // Get one TargetIngredient
     * const targetIngredient = await prisma.targetIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TargetIngredientFindUniqueArgs>(args: SelectSubset<T, TargetIngredientFindUniqueArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TargetIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TargetIngredientFindUniqueOrThrowArgs} args - Arguments to find a TargetIngredient
     * @example
     * // Get one TargetIngredient
     * const targetIngredient = await prisma.targetIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TargetIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, TargetIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIngredientFindFirstArgs} args - Arguments to find a TargetIngredient
     * @example
     * // Get one TargetIngredient
     * const targetIngredient = await prisma.targetIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TargetIngredientFindFirstArgs>(args?: SelectSubset<T, TargetIngredientFindFirstArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIngredientFindFirstOrThrowArgs} args - Arguments to find a TargetIngredient
     * @example
     * // Get one TargetIngredient
     * const targetIngredient = await prisma.targetIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TargetIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, TargetIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TargetIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TargetIngredients
     * const targetIngredients = await prisma.targetIngredient.findMany()
     * 
     * // Get first 10 TargetIngredients
     * const targetIngredients = await prisma.targetIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const targetIngredientWithIdOnly = await prisma.targetIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TargetIngredientFindManyArgs>(args?: SelectSubset<T, TargetIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TargetIngredient.
     * @param {TargetIngredientCreateArgs} args - Arguments to create a TargetIngredient.
     * @example
     * // Create one TargetIngredient
     * const TargetIngredient = await prisma.targetIngredient.create({
     *   data: {
     *     // ... data to create a TargetIngredient
     *   }
     * })
     * 
     */
    create<T extends TargetIngredientCreateArgs>(args: SelectSubset<T, TargetIngredientCreateArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TargetIngredients.
     * @param {TargetIngredientCreateManyArgs} args - Arguments to create many TargetIngredients.
     * @example
     * // Create many TargetIngredients
     * const targetIngredient = await prisma.targetIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TargetIngredientCreateManyArgs>(args?: SelectSubset<T, TargetIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TargetIngredients and returns the data saved in the database.
     * @param {TargetIngredientCreateManyAndReturnArgs} args - Arguments to create many TargetIngredients.
     * @example
     * // Create many TargetIngredients
     * const targetIngredient = await prisma.targetIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TargetIngredients and only return the `id`
     * const targetIngredientWithIdOnly = await prisma.targetIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TargetIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, TargetIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TargetIngredient.
     * @param {TargetIngredientDeleteArgs} args - Arguments to delete one TargetIngredient.
     * @example
     * // Delete one TargetIngredient
     * const TargetIngredient = await prisma.targetIngredient.delete({
     *   where: {
     *     // ... filter to delete one TargetIngredient
     *   }
     * })
     * 
     */
    delete<T extends TargetIngredientDeleteArgs>(args: SelectSubset<T, TargetIngredientDeleteArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TargetIngredient.
     * @param {TargetIngredientUpdateArgs} args - Arguments to update one TargetIngredient.
     * @example
     * // Update one TargetIngredient
     * const targetIngredient = await prisma.targetIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TargetIngredientUpdateArgs>(args: SelectSubset<T, TargetIngredientUpdateArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TargetIngredients.
     * @param {TargetIngredientDeleteManyArgs} args - Arguments to filter TargetIngredients to delete.
     * @example
     * // Delete a few TargetIngredients
     * const { count } = await prisma.targetIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TargetIngredientDeleteManyArgs>(args?: SelectSubset<T, TargetIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TargetIngredients
     * const targetIngredient = await prisma.targetIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TargetIngredientUpdateManyArgs>(args: SelectSubset<T, TargetIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetIngredients and returns the data updated in the database.
     * @param {TargetIngredientUpdateManyAndReturnArgs} args - Arguments to update many TargetIngredients.
     * @example
     * // Update many TargetIngredients
     * const targetIngredient = await prisma.targetIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TargetIngredients and only return the `id`
     * const targetIngredientWithIdOnly = await prisma.targetIngredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TargetIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, TargetIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TargetIngredient.
     * @param {TargetIngredientUpsertArgs} args - Arguments to update or create a TargetIngredient.
     * @example
     * // Update or create a TargetIngredient
     * const targetIngredient = await prisma.targetIngredient.upsert({
     *   create: {
     *     // ... data to create a TargetIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TargetIngredient we want to update
     *   }
     * })
     */
    upsert<T extends TargetIngredientUpsertArgs>(args: SelectSubset<T, TargetIngredientUpsertArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TargetIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIngredientCountArgs} args - Arguments to filter TargetIngredients to count.
     * @example
     * // Count the number of TargetIngredients
     * const count = await prisma.targetIngredient.count({
     *   where: {
     *     // ... the filter for the TargetIngredients we want to count
     *   }
     * })
    **/
    count<T extends TargetIngredientCountArgs>(
      args?: Subset<T, TargetIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TargetIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TargetIngredientAggregateArgs>(args: Subset<T, TargetIngredientAggregateArgs>): Prisma.PrismaPromise<GetTargetIngredientAggregateType<T>>

    /**
     * Group by TargetIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetIngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TargetIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetIngredientGroupByArgs['orderBy'] }
        : { orderBy?: TargetIngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TargetIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TargetIngredient model
   */
  readonly fields: TargetIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TargetIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends TargetIngredient$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, TargetIngredient$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TargetIngredient model
   */
  interface TargetIngredientFieldRefs {
    readonly id: FieldRef<"TargetIngredient", 'String'>
    readonly externalId: FieldRef<"TargetIngredient", 'String'>
    readonly label: FieldRef<"TargetIngredient", 'String'>
    readonly target: FieldRef<"TargetIngredient", 'String'>
    readonly createdAt: FieldRef<"TargetIngredient", 'DateTime'>
    readonly updatedAt: FieldRef<"TargetIngredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TargetIngredient findUnique
   */
  export type TargetIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which TargetIngredient to fetch.
     */
    where: TargetIngredientWhereUniqueInput
  }

  /**
   * TargetIngredient findUniqueOrThrow
   */
  export type TargetIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which TargetIngredient to fetch.
     */
    where: TargetIngredientWhereUniqueInput
  }

  /**
   * TargetIngredient findFirst
   */
  export type TargetIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which TargetIngredient to fetch.
     */
    where?: TargetIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetIngredients to fetch.
     */
    orderBy?: TargetIngredientOrderByWithRelationInput | TargetIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetIngredients.
     */
    cursor?: TargetIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetIngredients.
     */
    distinct?: TargetIngredientScalarFieldEnum | TargetIngredientScalarFieldEnum[]
  }

  /**
   * TargetIngredient findFirstOrThrow
   */
  export type TargetIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which TargetIngredient to fetch.
     */
    where?: TargetIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetIngredients to fetch.
     */
    orderBy?: TargetIngredientOrderByWithRelationInput | TargetIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetIngredients.
     */
    cursor?: TargetIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetIngredients.
     */
    distinct?: TargetIngredientScalarFieldEnum | TargetIngredientScalarFieldEnum[]
  }

  /**
   * TargetIngredient findMany
   */
  export type TargetIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which TargetIngredients to fetch.
     */
    where?: TargetIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetIngredients to fetch.
     */
    orderBy?: TargetIngredientOrderByWithRelationInput | TargetIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TargetIngredients.
     */
    cursor?: TargetIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetIngredients.
     */
    skip?: number
    distinct?: TargetIngredientScalarFieldEnum | TargetIngredientScalarFieldEnum[]
  }

  /**
   * TargetIngredient create
   */
  export type TargetIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a TargetIngredient.
     */
    data: XOR<TargetIngredientCreateInput, TargetIngredientUncheckedCreateInput>
  }

  /**
   * TargetIngredient createMany
   */
  export type TargetIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TargetIngredients.
     */
    data: TargetIngredientCreateManyInput | TargetIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TargetIngredient createManyAndReturn
   */
  export type TargetIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many TargetIngredients.
     */
    data: TargetIngredientCreateManyInput | TargetIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TargetIngredient update
   */
  export type TargetIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a TargetIngredient.
     */
    data: XOR<TargetIngredientUpdateInput, TargetIngredientUncheckedUpdateInput>
    /**
     * Choose, which TargetIngredient to update.
     */
    where: TargetIngredientWhereUniqueInput
  }

  /**
   * TargetIngredient updateMany
   */
  export type TargetIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TargetIngredients.
     */
    data: XOR<TargetIngredientUpdateManyMutationInput, TargetIngredientUncheckedUpdateManyInput>
    /**
     * Filter which TargetIngredients to update
     */
    where?: TargetIngredientWhereInput
    /**
     * Limit how many TargetIngredients to update.
     */
    limit?: number
  }

  /**
   * TargetIngredient updateManyAndReturn
   */
  export type TargetIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * The data used to update TargetIngredients.
     */
    data: XOR<TargetIngredientUpdateManyMutationInput, TargetIngredientUncheckedUpdateManyInput>
    /**
     * Filter which TargetIngredients to update
     */
    where?: TargetIngredientWhereInput
    /**
     * Limit how many TargetIngredients to update.
     */
    limit?: number
  }

  /**
   * TargetIngredient upsert
   */
  export type TargetIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the TargetIngredient to update in case it exists.
     */
    where: TargetIngredientWhereUniqueInput
    /**
     * In case the TargetIngredient found by the `where` argument doesn't exist, create a new TargetIngredient with this data.
     */
    create: XOR<TargetIngredientCreateInput, TargetIngredientUncheckedCreateInput>
    /**
     * In case the TargetIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetIngredientUpdateInput, TargetIngredientUncheckedUpdateInput>
  }

  /**
   * TargetIngredient delete
   */
  export type TargetIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
    /**
     * Filter which TargetIngredient to delete.
     */
    where: TargetIngredientWhereUniqueInput
  }

  /**
   * TargetIngredient deleteMany
   */
  export type TargetIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetIngredients to delete
     */
    where?: TargetIngredientWhereInput
    /**
     * Limit how many TargetIngredients to delete.
     */
    limit?: number
  }

  /**
   * TargetIngredient.mappings
   */
  export type TargetIngredient$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    where?: SourceTargetIngredientWhereInput
    orderBy?: SourceTargetIngredientOrderByWithRelationInput | SourceTargetIngredientOrderByWithRelationInput[]
    cursor?: SourceTargetIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceTargetIngredientScalarFieldEnum | SourceTargetIngredientScalarFieldEnum[]
  }

  /**
   * TargetIngredient without action
   */
  export type TargetIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetIngredient
     */
    select?: TargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetIngredient
     */
    omit?: TargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetIngredientInclude<ExtArgs> | null
  }


  /**
   * Model TargetUnit
   */

  export type AggregateTargetUnit = {
    _count: TargetUnitCountAggregateOutputType | null
    _min: TargetUnitMinAggregateOutputType | null
    _max: TargetUnitMaxAggregateOutputType | null
  }

  export type TargetUnitMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    label: string | null
    target: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TargetUnitMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    label: string | null
    target: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TargetUnitCountAggregateOutputType = {
    id: number
    externalId: number
    label: number
    target: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TargetUnitMinAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TargetUnitMaxAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    target?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TargetUnitCountAggregateInputType = {
    id?: true
    externalId?: true
    label?: true
    target?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TargetUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetUnit to aggregate.
     */
    where?: TargetUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetUnits to fetch.
     */
    orderBy?: TargetUnitOrderByWithRelationInput | TargetUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TargetUnits
    **/
    _count?: true | TargetUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetUnitMaxAggregateInputType
  }

  export type GetTargetUnitAggregateType<T extends TargetUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateTargetUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargetUnit[P]>
      : GetScalarType<T[P], AggregateTargetUnit[P]>
  }




  export type TargetUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetUnitWhereInput
    orderBy?: TargetUnitOrderByWithAggregationInput | TargetUnitOrderByWithAggregationInput[]
    by: TargetUnitScalarFieldEnum[] | TargetUnitScalarFieldEnum
    having?: TargetUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetUnitCountAggregateInputType | true
    _min?: TargetUnitMinAggregateInputType
    _max?: TargetUnitMaxAggregateInputType
  }

  export type TargetUnitGroupByOutputType = {
    id: string
    externalId: string
    label: string
    target: string
    createdAt: Date
    updatedAt: Date
    _count: TargetUnitCountAggregateOutputType | null
    _min: TargetUnitMinAggregateOutputType | null
    _max: TargetUnitMaxAggregateOutputType | null
  }

  type GetTargetUnitGroupByPayload<T extends TargetUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetUnitGroupByOutputType[P]>
            : GetScalarType<T[P], TargetUnitGroupByOutputType[P]>
        }
      >
    >


  export type TargetUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mappings?: boolean | TargetUnit$mappingsArgs<ExtArgs>
    _count?: boolean | TargetUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetUnit"]>

  export type TargetUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["targetUnit"]>

  export type TargetUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    label?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["targetUnit"]>

  export type TargetUnitSelectScalar = {
    id?: boolean
    externalId?: boolean
    label?: boolean
    target?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TargetUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "label" | "target" | "createdAt" | "updatedAt", ExtArgs["result"]["targetUnit"]>
  export type TargetUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | TargetUnit$mappingsArgs<ExtArgs>
    _count?: boolean | TargetUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TargetUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TargetUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TargetUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TargetUnit"
    objects: {
      mappings: Prisma.$SourceTargetUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string
      label: string
      target: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["targetUnit"]>
    composites: {}
  }

  type TargetUnitGetPayload<S extends boolean | null | undefined | TargetUnitDefaultArgs> = $Result.GetResult<Prisma.$TargetUnitPayload, S>

  type TargetUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TargetUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TargetUnitCountAggregateInputType | true
    }

  export interface TargetUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TargetUnit'], meta: { name: 'TargetUnit' } }
    /**
     * Find zero or one TargetUnit that matches the filter.
     * @param {TargetUnitFindUniqueArgs} args - Arguments to find a TargetUnit
     * @example
     * // Get one TargetUnit
     * const targetUnit = await prisma.targetUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TargetUnitFindUniqueArgs>(args: SelectSubset<T, TargetUnitFindUniqueArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TargetUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TargetUnitFindUniqueOrThrowArgs} args - Arguments to find a TargetUnit
     * @example
     * // Get one TargetUnit
     * const targetUnit = await prisma.targetUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TargetUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, TargetUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUnitFindFirstArgs} args - Arguments to find a TargetUnit
     * @example
     * // Get one TargetUnit
     * const targetUnit = await prisma.targetUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TargetUnitFindFirstArgs>(args?: SelectSubset<T, TargetUnitFindFirstArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUnitFindFirstOrThrowArgs} args - Arguments to find a TargetUnit
     * @example
     * // Get one TargetUnit
     * const targetUnit = await prisma.targetUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TargetUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, TargetUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TargetUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TargetUnits
     * const targetUnits = await prisma.targetUnit.findMany()
     * 
     * // Get first 10 TargetUnits
     * const targetUnits = await prisma.targetUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const targetUnitWithIdOnly = await prisma.targetUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TargetUnitFindManyArgs>(args?: SelectSubset<T, TargetUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TargetUnit.
     * @param {TargetUnitCreateArgs} args - Arguments to create a TargetUnit.
     * @example
     * // Create one TargetUnit
     * const TargetUnit = await prisma.targetUnit.create({
     *   data: {
     *     // ... data to create a TargetUnit
     *   }
     * })
     * 
     */
    create<T extends TargetUnitCreateArgs>(args: SelectSubset<T, TargetUnitCreateArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TargetUnits.
     * @param {TargetUnitCreateManyArgs} args - Arguments to create many TargetUnits.
     * @example
     * // Create many TargetUnits
     * const targetUnit = await prisma.targetUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TargetUnitCreateManyArgs>(args?: SelectSubset<T, TargetUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TargetUnits and returns the data saved in the database.
     * @param {TargetUnitCreateManyAndReturnArgs} args - Arguments to create many TargetUnits.
     * @example
     * // Create many TargetUnits
     * const targetUnit = await prisma.targetUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TargetUnits and only return the `id`
     * const targetUnitWithIdOnly = await prisma.targetUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TargetUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, TargetUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TargetUnit.
     * @param {TargetUnitDeleteArgs} args - Arguments to delete one TargetUnit.
     * @example
     * // Delete one TargetUnit
     * const TargetUnit = await prisma.targetUnit.delete({
     *   where: {
     *     // ... filter to delete one TargetUnit
     *   }
     * })
     * 
     */
    delete<T extends TargetUnitDeleteArgs>(args: SelectSubset<T, TargetUnitDeleteArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TargetUnit.
     * @param {TargetUnitUpdateArgs} args - Arguments to update one TargetUnit.
     * @example
     * // Update one TargetUnit
     * const targetUnit = await prisma.targetUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TargetUnitUpdateArgs>(args: SelectSubset<T, TargetUnitUpdateArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TargetUnits.
     * @param {TargetUnitDeleteManyArgs} args - Arguments to filter TargetUnits to delete.
     * @example
     * // Delete a few TargetUnits
     * const { count } = await prisma.targetUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TargetUnitDeleteManyArgs>(args?: SelectSubset<T, TargetUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TargetUnits
     * const targetUnit = await prisma.targetUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TargetUnitUpdateManyArgs>(args: SelectSubset<T, TargetUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetUnits and returns the data updated in the database.
     * @param {TargetUnitUpdateManyAndReturnArgs} args - Arguments to update many TargetUnits.
     * @example
     * // Update many TargetUnits
     * const targetUnit = await prisma.targetUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TargetUnits and only return the `id`
     * const targetUnitWithIdOnly = await prisma.targetUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TargetUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, TargetUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TargetUnit.
     * @param {TargetUnitUpsertArgs} args - Arguments to update or create a TargetUnit.
     * @example
     * // Update or create a TargetUnit
     * const targetUnit = await prisma.targetUnit.upsert({
     *   create: {
     *     // ... data to create a TargetUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TargetUnit we want to update
     *   }
     * })
     */
    upsert<T extends TargetUnitUpsertArgs>(args: SelectSubset<T, TargetUnitUpsertArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TargetUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUnitCountArgs} args - Arguments to filter TargetUnits to count.
     * @example
     * // Count the number of TargetUnits
     * const count = await prisma.targetUnit.count({
     *   where: {
     *     // ... the filter for the TargetUnits we want to count
     *   }
     * })
    **/
    count<T extends TargetUnitCountArgs>(
      args?: Subset<T, TargetUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TargetUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TargetUnitAggregateArgs>(args: Subset<T, TargetUnitAggregateArgs>): Prisma.PrismaPromise<GetTargetUnitAggregateType<T>>

    /**
     * Group by TargetUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TargetUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetUnitGroupByArgs['orderBy'] }
        : { orderBy?: TargetUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TargetUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TargetUnit model
   */
  readonly fields: TargetUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TargetUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends TargetUnit$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, TargetUnit$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TargetUnit model
   */
  interface TargetUnitFieldRefs {
    readonly id: FieldRef<"TargetUnit", 'String'>
    readonly externalId: FieldRef<"TargetUnit", 'String'>
    readonly label: FieldRef<"TargetUnit", 'String'>
    readonly target: FieldRef<"TargetUnit", 'String'>
    readonly createdAt: FieldRef<"TargetUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"TargetUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TargetUnit findUnique
   */
  export type TargetUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which TargetUnit to fetch.
     */
    where: TargetUnitWhereUniqueInput
  }

  /**
   * TargetUnit findUniqueOrThrow
   */
  export type TargetUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which TargetUnit to fetch.
     */
    where: TargetUnitWhereUniqueInput
  }

  /**
   * TargetUnit findFirst
   */
  export type TargetUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which TargetUnit to fetch.
     */
    where?: TargetUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetUnits to fetch.
     */
    orderBy?: TargetUnitOrderByWithRelationInput | TargetUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetUnits.
     */
    cursor?: TargetUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetUnits.
     */
    distinct?: TargetUnitScalarFieldEnum | TargetUnitScalarFieldEnum[]
  }

  /**
   * TargetUnit findFirstOrThrow
   */
  export type TargetUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which TargetUnit to fetch.
     */
    where?: TargetUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetUnits to fetch.
     */
    orderBy?: TargetUnitOrderByWithRelationInput | TargetUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetUnits.
     */
    cursor?: TargetUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetUnits.
     */
    distinct?: TargetUnitScalarFieldEnum | TargetUnitScalarFieldEnum[]
  }

  /**
   * TargetUnit findMany
   */
  export type TargetUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which TargetUnits to fetch.
     */
    where?: TargetUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetUnits to fetch.
     */
    orderBy?: TargetUnitOrderByWithRelationInput | TargetUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TargetUnits.
     */
    cursor?: TargetUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetUnits.
     */
    skip?: number
    distinct?: TargetUnitScalarFieldEnum | TargetUnitScalarFieldEnum[]
  }

  /**
   * TargetUnit create
   */
  export type TargetUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a TargetUnit.
     */
    data: XOR<TargetUnitCreateInput, TargetUnitUncheckedCreateInput>
  }

  /**
   * TargetUnit createMany
   */
  export type TargetUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TargetUnits.
     */
    data: TargetUnitCreateManyInput | TargetUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TargetUnit createManyAndReturn
   */
  export type TargetUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * The data used to create many TargetUnits.
     */
    data: TargetUnitCreateManyInput | TargetUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TargetUnit update
   */
  export type TargetUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a TargetUnit.
     */
    data: XOR<TargetUnitUpdateInput, TargetUnitUncheckedUpdateInput>
    /**
     * Choose, which TargetUnit to update.
     */
    where: TargetUnitWhereUniqueInput
  }

  /**
   * TargetUnit updateMany
   */
  export type TargetUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TargetUnits.
     */
    data: XOR<TargetUnitUpdateManyMutationInput, TargetUnitUncheckedUpdateManyInput>
    /**
     * Filter which TargetUnits to update
     */
    where?: TargetUnitWhereInput
    /**
     * Limit how many TargetUnits to update.
     */
    limit?: number
  }

  /**
   * TargetUnit updateManyAndReturn
   */
  export type TargetUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * The data used to update TargetUnits.
     */
    data: XOR<TargetUnitUpdateManyMutationInput, TargetUnitUncheckedUpdateManyInput>
    /**
     * Filter which TargetUnits to update
     */
    where?: TargetUnitWhereInput
    /**
     * Limit how many TargetUnits to update.
     */
    limit?: number
  }

  /**
   * TargetUnit upsert
   */
  export type TargetUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the TargetUnit to update in case it exists.
     */
    where: TargetUnitWhereUniqueInput
    /**
     * In case the TargetUnit found by the `where` argument doesn't exist, create a new TargetUnit with this data.
     */
    create: XOR<TargetUnitCreateInput, TargetUnitUncheckedCreateInput>
    /**
     * In case the TargetUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetUnitUpdateInput, TargetUnitUncheckedUpdateInput>
  }

  /**
   * TargetUnit delete
   */
  export type TargetUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
    /**
     * Filter which TargetUnit to delete.
     */
    where: TargetUnitWhereUniqueInput
  }

  /**
   * TargetUnit deleteMany
   */
  export type TargetUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetUnits to delete
     */
    where?: TargetUnitWhereInput
    /**
     * Limit how many TargetUnits to delete.
     */
    limit?: number
  }

  /**
   * TargetUnit.mappings
   */
  export type TargetUnit$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    where?: SourceTargetUnitWhereInput
    orderBy?: SourceTargetUnitOrderByWithRelationInput | SourceTargetUnitOrderByWithRelationInput[]
    cursor?: SourceTargetUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceTargetUnitScalarFieldEnum | SourceTargetUnitScalarFieldEnum[]
  }

  /**
   * TargetUnit without action
   */
  export type TargetUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetUnit
     */
    select?: TargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetUnit
     */
    omit?: TargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetUnitInclude<ExtArgs> | null
  }


  /**
   * Model SourceTargetIngredient
   */

  export type AggregateSourceTargetIngredient = {
    _count: SourceTargetIngredientCountAggregateOutputType | null
    _avg: SourceTargetIngredientAvgAggregateOutputType | null
    _sum: SourceTargetIngredientSumAggregateOutputType | null
    _min: SourceTargetIngredientMinAggregateOutputType | null
    _max: SourceTargetIngredientMaxAggregateOutputType | null
  }

  export type SourceTargetIngredientAvgAggregateOutputType = {
    confidenceScore: Decimal | null
  }

  export type SourceTargetIngredientSumAggregateOutputType = {
    confidenceScore: Decimal | null
  }

  export type SourceTargetIngredientMinAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    confidenceScore: Decimal | null
    mappingMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceTargetIngredientMaxAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    confidenceScore: Decimal | null
    mappingMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceTargetIngredientCountAggregateOutputType = {
    id: number
    sourceId: number
    targetId: number
    confidenceScore: number
    mappingMethod: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SourceTargetIngredientAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type SourceTargetIngredientSumAggregateInputType = {
    confidenceScore?: true
  }

  export type SourceTargetIngredientMinAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    confidenceScore?: true
    mappingMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceTargetIngredientMaxAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    confidenceScore?: true
    mappingMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceTargetIngredientCountAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    confidenceScore?: true
    mappingMethod?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SourceTargetIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceTargetIngredient to aggregate.
     */
    where?: SourceTargetIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTargetIngredients to fetch.
     */
    orderBy?: SourceTargetIngredientOrderByWithRelationInput | SourceTargetIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceTargetIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTargetIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTargetIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceTargetIngredients
    **/
    _count?: true | SourceTargetIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceTargetIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceTargetIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceTargetIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceTargetIngredientMaxAggregateInputType
  }

  export type GetSourceTargetIngredientAggregateType<T extends SourceTargetIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceTargetIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceTargetIngredient[P]>
      : GetScalarType<T[P], AggregateSourceTargetIngredient[P]>
  }




  export type SourceTargetIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceTargetIngredientWhereInput
    orderBy?: SourceTargetIngredientOrderByWithAggregationInput | SourceTargetIngredientOrderByWithAggregationInput[]
    by: SourceTargetIngredientScalarFieldEnum[] | SourceTargetIngredientScalarFieldEnum
    having?: SourceTargetIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceTargetIngredientCountAggregateInputType | true
    _avg?: SourceTargetIngredientAvgAggregateInputType
    _sum?: SourceTargetIngredientSumAggregateInputType
    _min?: SourceTargetIngredientMinAggregateInputType
    _max?: SourceTargetIngredientMaxAggregateInputType
  }

  export type SourceTargetIngredientGroupByOutputType = {
    id: string
    sourceId: string
    targetId: string
    confidenceScore: Decimal
    mappingMethod: string
    createdAt: Date
    updatedAt: Date
    _count: SourceTargetIngredientCountAggregateOutputType | null
    _avg: SourceTargetIngredientAvgAggregateOutputType | null
    _sum: SourceTargetIngredientSumAggregateOutputType | null
    _min: SourceTargetIngredientMinAggregateOutputType | null
    _max: SourceTargetIngredientMaxAggregateOutputType | null
  }

  type GetSourceTargetIngredientGroupByPayload<T extends SourceTargetIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceTargetIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceTargetIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceTargetIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], SourceTargetIngredientGroupByOutputType[P]>
        }
      >
    >


  export type SourceTargetIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    confidenceScore?: boolean
    mappingMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceIngredient?: boolean | SourceIngredientDefaultArgs<ExtArgs>
    targetIngredient?: boolean | TargetIngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceTargetIngredient"]>

  export type SourceTargetIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    confidenceScore?: boolean
    mappingMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceIngredient?: boolean | SourceIngredientDefaultArgs<ExtArgs>
    targetIngredient?: boolean | TargetIngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceTargetIngredient"]>

  export type SourceTargetIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    confidenceScore?: boolean
    mappingMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceIngredient?: boolean | SourceIngredientDefaultArgs<ExtArgs>
    targetIngredient?: boolean | TargetIngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceTargetIngredient"]>

  export type SourceTargetIngredientSelectScalar = {
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    confidenceScore?: boolean
    mappingMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SourceTargetIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceId" | "targetId" | "confidenceScore" | "mappingMethod" | "createdAt" | "updatedAt", ExtArgs["result"]["sourceTargetIngredient"]>
  export type SourceTargetIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceIngredient?: boolean | SourceIngredientDefaultArgs<ExtArgs>
    targetIngredient?: boolean | TargetIngredientDefaultArgs<ExtArgs>
  }
  export type SourceTargetIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceIngredient?: boolean | SourceIngredientDefaultArgs<ExtArgs>
    targetIngredient?: boolean | TargetIngredientDefaultArgs<ExtArgs>
  }
  export type SourceTargetIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceIngredient?: boolean | SourceIngredientDefaultArgs<ExtArgs>
    targetIngredient?: boolean | TargetIngredientDefaultArgs<ExtArgs>
  }

  export type $SourceTargetIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceTargetIngredient"
    objects: {
      sourceIngredient: Prisma.$SourceIngredientPayload<ExtArgs>
      targetIngredient: Prisma.$TargetIngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceId: string
      targetId: string
      confidenceScore: Prisma.Decimal
      mappingMethod: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sourceTargetIngredient"]>
    composites: {}
  }

  type SourceTargetIngredientGetPayload<S extends boolean | null | undefined | SourceTargetIngredientDefaultArgs> = $Result.GetResult<Prisma.$SourceTargetIngredientPayload, S>

  type SourceTargetIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceTargetIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceTargetIngredientCountAggregateInputType | true
    }

  export interface SourceTargetIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceTargetIngredient'], meta: { name: 'SourceTargetIngredient' } }
    /**
     * Find zero or one SourceTargetIngredient that matches the filter.
     * @param {SourceTargetIngredientFindUniqueArgs} args - Arguments to find a SourceTargetIngredient
     * @example
     * // Get one SourceTargetIngredient
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceTargetIngredientFindUniqueArgs>(args: SelectSubset<T, SourceTargetIngredientFindUniqueArgs<ExtArgs>>): Prisma__SourceTargetIngredientClient<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceTargetIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceTargetIngredientFindUniqueOrThrowArgs} args - Arguments to find a SourceTargetIngredient
     * @example
     * // Get one SourceTargetIngredient
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceTargetIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceTargetIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceTargetIngredientClient<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceTargetIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetIngredientFindFirstArgs} args - Arguments to find a SourceTargetIngredient
     * @example
     * // Get one SourceTargetIngredient
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceTargetIngredientFindFirstArgs>(args?: SelectSubset<T, SourceTargetIngredientFindFirstArgs<ExtArgs>>): Prisma__SourceTargetIngredientClient<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceTargetIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetIngredientFindFirstOrThrowArgs} args - Arguments to find a SourceTargetIngredient
     * @example
     * // Get one SourceTargetIngredient
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceTargetIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceTargetIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceTargetIngredientClient<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceTargetIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceTargetIngredients
     * const sourceTargetIngredients = await prisma.sourceTargetIngredient.findMany()
     * 
     * // Get first 10 SourceTargetIngredients
     * const sourceTargetIngredients = await prisma.sourceTargetIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceTargetIngredientWithIdOnly = await prisma.sourceTargetIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceTargetIngredientFindManyArgs>(args?: SelectSubset<T, SourceTargetIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceTargetIngredient.
     * @param {SourceTargetIngredientCreateArgs} args - Arguments to create a SourceTargetIngredient.
     * @example
     * // Create one SourceTargetIngredient
     * const SourceTargetIngredient = await prisma.sourceTargetIngredient.create({
     *   data: {
     *     // ... data to create a SourceTargetIngredient
     *   }
     * })
     * 
     */
    create<T extends SourceTargetIngredientCreateArgs>(args: SelectSubset<T, SourceTargetIngredientCreateArgs<ExtArgs>>): Prisma__SourceTargetIngredientClient<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceTargetIngredients.
     * @param {SourceTargetIngredientCreateManyArgs} args - Arguments to create many SourceTargetIngredients.
     * @example
     * // Create many SourceTargetIngredients
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceTargetIngredientCreateManyArgs>(args?: SelectSubset<T, SourceTargetIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceTargetIngredients and returns the data saved in the database.
     * @param {SourceTargetIngredientCreateManyAndReturnArgs} args - Arguments to create many SourceTargetIngredients.
     * @example
     * // Create many SourceTargetIngredients
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceTargetIngredients and only return the `id`
     * const sourceTargetIngredientWithIdOnly = await prisma.sourceTargetIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceTargetIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceTargetIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceTargetIngredient.
     * @param {SourceTargetIngredientDeleteArgs} args - Arguments to delete one SourceTargetIngredient.
     * @example
     * // Delete one SourceTargetIngredient
     * const SourceTargetIngredient = await prisma.sourceTargetIngredient.delete({
     *   where: {
     *     // ... filter to delete one SourceTargetIngredient
     *   }
     * })
     * 
     */
    delete<T extends SourceTargetIngredientDeleteArgs>(args: SelectSubset<T, SourceTargetIngredientDeleteArgs<ExtArgs>>): Prisma__SourceTargetIngredientClient<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceTargetIngredient.
     * @param {SourceTargetIngredientUpdateArgs} args - Arguments to update one SourceTargetIngredient.
     * @example
     * // Update one SourceTargetIngredient
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceTargetIngredientUpdateArgs>(args: SelectSubset<T, SourceTargetIngredientUpdateArgs<ExtArgs>>): Prisma__SourceTargetIngredientClient<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceTargetIngredients.
     * @param {SourceTargetIngredientDeleteManyArgs} args - Arguments to filter SourceTargetIngredients to delete.
     * @example
     * // Delete a few SourceTargetIngredients
     * const { count } = await prisma.sourceTargetIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceTargetIngredientDeleteManyArgs>(args?: SelectSubset<T, SourceTargetIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceTargetIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceTargetIngredients
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceTargetIngredientUpdateManyArgs>(args: SelectSubset<T, SourceTargetIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceTargetIngredients and returns the data updated in the database.
     * @param {SourceTargetIngredientUpdateManyAndReturnArgs} args - Arguments to update many SourceTargetIngredients.
     * @example
     * // Update many SourceTargetIngredients
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceTargetIngredients and only return the `id`
     * const sourceTargetIngredientWithIdOnly = await prisma.sourceTargetIngredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceTargetIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceTargetIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceTargetIngredient.
     * @param {SourceTargetIngredientUpsertArgs} args - Arguments to update or create a SourceTargetIngredient.
     * @example
     * // Update or create a SourceTargetIngredient
     * const sourceTargetIngredient = await prisma.sourceTargetIngredient.upsert({
     *   create: {
     *     // ... data to create a SourceTargetIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceTargetIngredient we want to update
     *   }
     * })
     */
    upsert<T extends SourceTargetIngredientUpsertArgs>(args: SelectSubset<T, SourceTargetIngredientUpsertArgs<ExtArgs>>): Prisma__SourceTargetIngredientClient<$Result.GetResult<Prisma.$SourceTargetIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceTargetIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetIngredientCountArgs} args - Arguments to filter SourceTargetIngredients to count.
     * @example
     * // Count the number of SourceTargetIngredients
     * const count = await prisma.sourceTargetIngredient.count({
     *   where: {
     *     // ... the filter for the SourceTargetIngredients we want to count
     *   }
     * })
    **/
    count<T extends SourceTargetIngredientCountArgs>(
      args?: Subset<T, SourceTargetIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceTargetIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceTargetIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceTargetIngredientAggregateArgs>(args: Subset<T, SourceTargetIngredientAggregateArgs>): Prisma.PrismaPromise<GetSourceTargetIngredientAggregateType<T>>

    /**
     * Group by SourceTargetIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetIngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceTargetIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceTargetIngredientGroupByArgs['orderBy'] }
        : { orderBy?: SourceTargetIngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceTargetIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceTargetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceTargetIngredient model
   */
  readonly fields: SourceTargetIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceTargetIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceTargetIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceIngredient<T extends SourceIngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceIngredientDefaultArgs<ExtArgs>>): Prisma__SourceIngredientClient<$Result.GetResult<Prisma.$SourceIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetIngredient<T extends TargetIngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TargetIngredientDefaultArgs<ExtArgs>>): Prisma__TargetIngredientClient<$Result.GetResult<Prisma.$TargetIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceTargetIngredient model
   */
  interface SourceTargetIngredientFieldRefs {
    readonly id: FieldRef<"SourceTargetIngredient", 'String'>
    readonly sourceId: FieldRef<"SourceTargetIngredient", 'String'>
    readonly targetId: FieldRef<"SourceTargetIngredient", 'String'>
    readonly confidenceScore: FieldRef<"SourceTargetIngredient", 'Decimal'>
    readonly mappingMethod: FieldRef<"SourceTargetIngredient", 'String'>
    readonly createdAt: FieldRef<"SourceTargetIngredient", 'DateTime'>
    readonly updatedAt: FieldRef<"SourceTargetIngredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SourceTargetIngredient findUnique
   */
  export type SourceTargetIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetIngredient to fetch.
     */
    where: SourceTargetIngredientWhereUniqueInput
  }

  /**
   * SourceTargetIngredient findUniqueOrThrow
   */
  export type SourceTargetIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetIngredient to fetch.
     */
    where: SourceTargetIngredientWhereUniqueInput
  }

  /**
   * SourceTargetIngredient findFirst
   */
  export type SourceTargetIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetIngredient to fetch.
     */
    where?: SourceTargetIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTargetIngredients to fetch.
     */
    orderBy?: SourceTargetIngredientOrderByWithRelationInput | SourceTargetIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceTargetIngredients.
     */
    cursor?: SourceTargetIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTargetIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTargetIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceTargetIngredients.
     */
    distinct?: SourceTargetIngredientScalarFieldEnum | SourceTargetIngredientScalarFieldEnum[]
  }

  /**
   * SourceTargetIngredient findFirstOrThrow
   */
  export type SourceTargetIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetIngredient to fetch.
     */
    where?: SourceTargetIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTargetIngredients to fetch.
     */
    orderBy?: SourceTargetIngredientOrderByWithRelationInput | SourceTargetIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceTargetIngredients.
     */
    cursor?: SourceTargetIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTargetIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTargetIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceTargetIngredients.
     */
    distinct?: SourceTargetIngredientScalarFieldEnum | SourceTargetIngredientScalarFieldEnum[]
  }

  /**
   * SourceTargetIngredient findMany
   */
  export type SourceTargetIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetIngredients to fetch.
     */
    where?: SourceTargetIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTargetIngredients to fetch.
     */
    orderBy?: SourceTargetIngredientOrderByWithRelationInput | SourceTargetIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceTargetIngredients.
     */
    cursor?: SourceTargetIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTargetIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTargetIngredients.
     */
    skip?: number
    distinct?: SourceTargetIngredientScalarFieldEnum | SourceTargetIngredientScalarFieldEnum[]
  }

  /**
   * SourceTargetIngredient create
   */
  export type SourceTargetIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceTargetIngredient.
     */
    data: XOR<SourceTargetIngredientCreateInput, SourceTargetIngredientUncheckedCreateInput>
  }

  /**
   * SourceTargetIngredient createMany
   */
  export type SourceTargetIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceTargetIngredients.
     */
    data: SourceTargetIngredientCreateManyInput | SourceTargetIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceTargetIngredient createManyAndReturn
   */
  export type SourceTargetIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many SourceTargetIngredients.
     */
    data: SourceTargetIngredientCreateManyInput | SourceTargetIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceTargetIngredient update
   */
  export type SourceTargetIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceTargetIngredient.
     */
    data: XOR<SourceTargetIngredientUpdateInput, SourceTargetIngredientUncheckedUpdateInput>
    /**
     * Choose, which SourceTargetIngredient to update.
     */
    where: SourceTargetIngredientWhereUniqueInput
  }

  /**
   * SourceTargetIngredient updateMany
   */
  export type SourceTargetIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceTargetIngredients.
     */
    data: XOR<SourceTargetIngredientUpdateManyMutationInput, SourceTargetIngredientUncheckedUpdateManyInput>
    /**
     * Filter which SourceTargetIngredients to update
     */
    where?: SourceTargetIngredientWhereInput
    /**
     * Limit how many SourceTargetIngredients to update.
     */
    limit?: number
  }

  /**
   * SourceTargetIngredient updateManyAndReturn
   */
  export type SourceTargetIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * The data used to update SourceTargetIngredients.
     */
    data: XOR<SourceTargetIngredientUpdateManyMutationInput, SourceTargetIngredientUncheckedUpdateManyInput>
    /**
     * Filter which SourceTargetIngredients to update
     */
    where?: SourceTargetIngredientWhereInput
    /**
     * Limit how many SourceTargetIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceTargetIngredient upsert
   */
  export type SourceTargetIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceTargetIngredient to update in case it exists.
     */
    where: SourceTargetIngredientWhereUniqueInput
    /**
     * In case the SourceTargetIngredient found by the `where` argument doesn't exist, create a new SourceTargetIngredient with this data.
     */
    create: XOR<SourceTargetIngredientCreateInput, SourceTargetIngredientUncheckedCreateInput>
    /**
     * In case the SourceTargetIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceTargetIngredientUpdateInput, SourceTargetIngredientUncheckedUpdateInput>
  }

  /**
   * SourceTargetIngredient delete
   */
  export type SourceTargetIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
    /**
     * Filter which SourceTargetIngredient to delete.
     */
    where: SourceTargetIngredientWhereUniqueInput
  }

  /**
   * SourceTargetIngredient deleteMany
   */
  export type SourceTargetIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceTargetIngredients to delete
     */
    where?: SourceTargetIngredientWhereInput
    /**
     * Limit how many SourceTargetIngredients to delete.
     */
    limit?: number
  }

  /**
   * SourceTargetIngredient without action
   */
  export type SourceTargetIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetIngredient
     */
    select?: SourceTargetIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetIngredient
     */
    omit?: SourceTargetIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetIngredientInclude<ExtArgs> | null
  }


  /**
   * Model SourceTargetUnit
   */

  export type AggregateSourceTargetUnit = {
    _count: SourceTargetUnitCountAggregateOutputType | null
    _avg: SourceTargetUnitAvgAggregateOutputType | null
    _sum: SourceTargetUnitSumAggregateOutputType | null
    _min: SourceTargetUnitMinAggregateOutputType | null
    _max: SourceTargetUnitMaxAggregateOutputType | null
  }

  export type SourceTargetUnitAvgAggregateOutputType = {
    confidenceScore: Decimal | null
  }

  export type SourceTargetUnitSumAggregateOutputType = {
    confidenceScore: Decimal | null
  }

  export type SourceTargetUnitMinAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    confidenceScore: Decimal | null
    mappingMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceTargetUnitMaxAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    confidenceScore: Decimal | null
    mappingMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SourceTargetUnitCountAggregateOutputType = {
    id: number
    sourceId: number
    targetId: number
    confidenceScore: number
    mappingMethod: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SourceTargetUnitAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type SourceTargetUnitSumAggregateInputType = {
    confidenceScore?: true
  }

  export type SourceTargetUnitMinAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    confidenceScore?: true
    mappingMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceTargetUnitMaxAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    confidenceScore?: true
    mappingMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SourceTargetUnitCountAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    confidenceScore?: true
    mappingMethod?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SourceTargetUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceTargetUnit to aggregate.
     */
    where?: SourceTargetUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTargetUnits to fetch.
     */
    orderBy?: SourceTargetUnitOrderByWithRelationInput | SourceTargetUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceTargetUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTargetUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTargetUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceTargetUnits
    **/
    _count?: true | SourceTargetUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceTargetUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceTargetUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceTargetUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceTargetUnitMaxAggregateInputType
  }

  export type GetSourceTargetUnitAggregateType<T extends SourceTargetUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceTargetUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceTargetUnit[P]>
      : GetScalarType<T[P], AggregateSourceTargetUnit[P]>
  }




  export type SourceTargetUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceTargetUnitWhereInput
    orderBy?: SourceTargetUnitOrderByWithAggregationInput | SourceTargetUnitOrderByWithAggregationInput[]
    by: SourceTargetUnitScalarFieldEnum[] | SourceTargetUnitScalarFieldEnum
    having?: SourceTargetUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceTargetUnitCountAggregateInputType | true
    _avg?: SourceTargetUnitAvgAggregateInputType
    _sum?: SourceTargetUnitSumAggregateInputType
    _min?: SourceTargetUnitMinAggregateInputType
    _max?: SourceTargetUnitMaxAggregateInputType
  }

  export type SourceTargetUnitGroupByOutputType = {
    id: string
    sourceId: string
    targetId: string
    confidenceScore: Decimal
    mappingMethod: string
    createdAt: Date
    updatedAt: Date
    _count: SourceTargetUnitCountAggregateOutputType | null
    _avg: SourceTargetUnitAvgAggregateOutputType | null
    _sum: SourceTargetUnitSumAggregateOutputType | null
    _min: SourceTargetUnitMinAggregateOutputType | null
    _max: SourceTargetUnitMaxAggregateOutputType | null
  }

  type GetSourceTargetUnitGroupByPayload<T extends SourceTargetUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceTargetUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceTargetUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceTargetUnitGroupByOutputType[P]>
            : GetScalarType<T[P], SourceTargetUnitGroupByOutputType[P]>
        }
      >
    >


  export type SourceTargetUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    confidenceScore?: boolean
    mappingMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceUnit?: boolean | SourceUnitDefaultArgs<ExtArgs>
    targetUnit?: boolean | TargetUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceTargetUnit"]>

  export type SourceTargetUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    confidenceScore?: boolean
    mappingMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceUnit?: boolean | SourceUnitDefaultArgs<ExtArgs>
    targetUnit?: boolean | TargetUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceTargetUnit"]>

  export type SourceTargetUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    confidenceScore?: boolean
    mappingMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceUnit?: boolean | SourceUnitDefaultArgs<ExtArgs>
    targetUnit?: boolean | TargetUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceTargetUnit"]>

  export type SourceTargetUnitSelectScalar = {
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    confidenceScore?: boolean
    mappingMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SourceTargetUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceId" | "targetId" | "confidenceScore" | "mappingMethod" | "createdAt" | "updatedAt", ExtArgs["result"]["sourceTargetUnit"]>
  export type SourceTargetUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceUnit?: boolean | SourceUnitDefaultArgs<ExtArgs>
    targetUnit?: boolean | TargetUnitDefaultArgs<ExtArgs>
  }
  export type SourceTargetUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceUnit?: boolean | SourceUnitDefaultArgs<ExtArgs>
    targetUnit?: boolean | TargetUnitDefaultArgs<ExtArgs>
  }
  export type SourceTargetUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceUnit?: boolean | SourceUnitDefaultArgs<ExtArgs>
    targetUnit?: boolean | TargetUnitDefaultArgs<ExtArgs>
  }

  export type $SourceTargetUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceTargetUnit"
    objects: {
      sourceUnit: Prisma.$SourceUnitPayload<ExtArgs>
      targetUnit: Prisma.$TargetUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceId: string
      targetId: string
      confidenceScore: Prisma.Decimal
      mappingMethod: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sourceTargetUnit"]>
    composites: {}
  }

  type SourceTargetUnitGetPayload<S extends boolean | null | undefined | SourceTargetUnitDefaultArgs> = $Result.GetResult<Prisma.$SourceTargetUnitPayload, S>

  type SourceTargetUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceTargetUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceTargetUnitCountAggregateInputType | true
    }

  export interface SourceTargetUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceTargetUnit'], meta: { name: 'SourceTargetUnit' } }
    /**
     * Find zero or one SourceTargetUnit that matches the filter.
     * @param {SourceTargetUnitFindUniqueArgs} args - Arguments to find a SourceTargetUnit
     * @example
     * // Get one SourceTargetUnit
     * const sourceTargetUnit = await prisma.sourceTargetUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceTargetUnitFindUniqueArgs>(args: SelectSubset<T, SourceTargetUnitFindUniqueArgs<ExtArgs>>): Prisma__SourceTargetUnitClient<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceTargetUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceTargetUnitFindUniqueOrThrowArgs} args - Arguments to find a SourceTargetUnit
     * @example
     * // Get one SourceTargetUnit
     * const sourceTargetUnit = await prisma.sourceTargetUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceTargetUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceTargetUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceTargetUnitClient<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceTargetUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetUnitFindFirstArgs} args - Arguments to find a SourceTargetUnit
     * @example
     * // Get one SourceTargetUnit
     * const sourceTargetUnit = await prisma.sourceTargetUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceTargetUnitFindFirstArgs>(args?: SelectSubset<T, SourceTargetUnitFindFirstArgs<ExtArgs>>): Prisma__SourceTargetUnitClient<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceTargetUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetUnitFindFirstOrThrowArgs} args - Arguments to find a SourceTargetUnit
     * @example
     * // Get one SourceTargetUnit
     * const sourceTargetUnit = await prisma.sourceTargetUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceTargetUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceTargetUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceTargetUnitClient<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceTargetUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceTargetUnits
     * const sourceTargetUnits = await prisma.sourceTargetUnit.findMany()
     * 
     * // Get first 10 SourceTargetUnits
     * const sourceTargetUnits = await prisma.sourceTargetUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceTargetUnitWithIdOnly = await prisma.sourceTargetUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceTargetUnitFindManyArgs>(args?: SelectSubset<T, SourceTargetUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceTargetUnit.
     * @param {SourceTargetUnitCreateArgs} args - Arguments to create a SourceTargetUnit.
     * @example
     * // Create one SourceTargetUnit
     * const SourceTargetUnit = await prisma.sourceTargetUnit.create({
     *   data: {
     *     // ... data to create a SourceTargetUnit
     *   }
     * })
     * 
     */
    create<T extends SourceTargetUnitCreateArgs>(args: SelectSubset<T, SourceTargetUnitCreateArgs<ExtArgs>>): Prisma__SourceTargetUnitClient<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceTargetUnits.
     * @param {SourceTargetUnitCreateManyArgs} args - Arguments to create many SourceTargetUnits.
     * @example
     * // Create many SourceTargetUnits
     * const sourceTargetUnit = await prisma.sourceTargetUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceTargetUnitCreateManyArgs>(args?: SelectSubset<T, SourceTargetUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceTargetUnits and returns the data saved in the database.
     * @param {SourceTargetUnitCreateManyAndReturnArgs} args - Arguments to create many SourceTargetUnits.
     * @example
     * // Create many SourceTargetUnits
     * const sourceTargetUnit = await prisma.sourceTargetUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceTargetUnits and only return the `id`
     * const sourceTargetUnitWithIdOnly = await prisma.sourceTargetUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceTargetUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceTargetUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceTargetUnit.
     * @param {SourceTargetUnitDeleteArgs} args - Arguments to delete one SourceTargetUnit.
     * @example
     * // Delete one SourceTargetUnit
     * const SourceTargetUnit = await prisma.sourceTargetUnit.delete({
     *   where: {
     *     // ... filter to delete one SourceTargetUnit
     *   }
     * })
     * 
     */
    delete<T extends SourceTargetUnitDeleteArgs>(args: SelectSubset<T, SourceTargetUnitDeleteArgs<ExtArgs>>): Prisma__SourceTargetUnitClient<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceTargetUnit.
     * @param {SourceTargetUnitUpdateArgs} args - Arguments to update one SourceTargetUnit.
     * @example
     * // Update one SourceTargetUnit
     * const sourceTargetUnit = await prisma.sourceTargetUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceTargetUnitUpdateArgs>(args: SelectSubset<T, SourceTargetUnitUpdateArgs<ExtArgs>>): Prisma__SourceTargetUnitClient<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceTargetUnits.
     * @param {SourceTargetUnitDeleteManyArgs} args - Arguments to filter SourceTargetUnits to delete.
     * @example
     * // Delete a few SourceTargetUnits
     * const { count } = await prisma.sourceTargetUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceTargetUnitDeleteManyArgs>(args?: SelectSubset<T, SourceTargetUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceTargetUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceTargetUnits
     * const sourceTargetUnit = await prisma.sourceTargetUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceTargetUnitUpdateManyArgs>(args: SelectSubset<T, SourceTargetUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceTargetUnits and returns the data updated in the database.
     * @param {SourceTargetUnitUpdateManyAndReturnArgs} args - Arguments to update many SourceTargetUnits.
     * @example
     * // Update many SourceTargetUnits
     * const sourceTargetUnit = await prisma.sourceTargetUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceTargetUnits and only return the `id`
     * const sourceTargetUnitWithIdOnly = await prisma.sourceTargetUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceTargetUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceTargetUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceTargetUnit.
     * @param {SourceTargetUnitUpsertArgs} args - Arguments to update or create a SourceTargetUnit.
     * @example
     * // Update or create a SourceTargetUnit
     * const sourceTargetUnit = await prisma.sourceTargetUnit.upsert({
     *   create: {
     *     // ... data to create a SourceTargetUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceTargetUnit we want to update
     *   }
     * })
     */
    upsert<T extends SourceTargetUnitUpsertArgs>(args: SelectSubset<T, SourceTargetUnitUpsertArgs<ExtArgs>>): Prisma__SourceTargetUnitClient<$Result.GetResult<Prisma.$SourceTargetUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceTargetUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetUnitCountArgs} args - Arguments to filter SourceTargetUnits to count.
     * @example
     * // Count the number of SourceTargetUnits
     * const count = await prisma.sourceTargetUnit.count({
     *   where: {
     *     // ... the filter for the SourceTargetUnits we want to count
     *   }
     * })
    **/
    count<T extends SourceTargetUnitCountArgs>(
      args?: Subset<T, SourceTargetUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceTargetUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceTargetUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceTargetUnitAggregateArgs>(args: Subset<T, SourceTargetUnitAggregateArgs>): Prisma.PrismaPromise<GetSourceTargetUnitAggregateType<T>>

    /**
     * Group by SourceTargetUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceTargetUnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceTargetUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceTargetUnitGroupByArgs['orderBy'] }
        : { orderBy?: SourceTargetUnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceTargetUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceTargetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceTargetUnit model
   */
  readonly fields: SourceTargetUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceTargetUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceTargetUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceUnit<T extends SourceUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceUnitDefaultArgs<ExtArgs>>): Prisma__SourceUnitClient<$Result.GetResult<Prisma.$SourceUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUnit<T extends TargetUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TargetUnitDefaultArgs<ExtArgs>>): Prisma__TargetUnitClient<$Result.GetResult<Prisma.$TargetUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceTargetUnit model
   */
  interface SourceTargetUnitFieldRefs {
    readonly id: FieldRef<"SourceTargetUnit", 'String'>
    readonly sourceId: FieldRef<"SourceTargetUnit", 'String'>
    readonly targetId: FieldRef<"SourceTargetUnit", 'String'>
    readonly confidenceScore: FieldRef<"SourceTargetUnit", 'Decimal'>
    readonly mappingMethod: FieldRef<"SourceTargetUnit", 'String'>
    readonly createdAt: FieldRef<"SourceTargetUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"SourceTargetUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SourceTargetUnit findUnique
   */
  export type SourceTargetUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetUnit to fetch.
     */
    where: SourceTargetUnitWhereUniqueInput
  }

  /**
   * SourceTargetUnit findUniqueOrThrow
   */
  export type SourceTargetUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetUnit to fetch.
     */
    where: SourceTargetUnitWhereUniqueInput
  }

  /**
   * SourceTargetUnit findFirst
   */
  export type SourceTargetUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetUnit to fetch.
     */
    where?: SourceTargetUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTargetUnits to fetch.
     */
    orderBy?: SourceTargetUnitOrderByWithRelationInput | SourceTargetUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceTargetUnits.
     */
    cursor?: SourceTargetUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTargetUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTargetUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceTargetUnits.
     */
    distinct?: SourceTargetUnitScalarFieldEnum | SourceTargetUnitScalarFieldEnum[]
  }

  /**
   * SourceTargetUnit findFirstOrThrow
   */
  export type SourceTargetUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetUnit to fetch.
     */
    where?: SourceTargetUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTargetUnits to fetch.
     */
    orderBy?: SourceTargetUnitOrderByWithRelationInput | SourceTargetUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceTargetUnits.
     */
    cursor?: SourceTargetUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTargetUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTargetUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceTargetUnits.
     */
    distinct?: SourceTargetUnitScalarFieldEnum | SourceTargetUnitScalarFieldEnum[]
  }

  /**
   * SourceTargetUnit findMany
   */
  export type SourceTargetUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * Filter, which SourceTargetUnits to fetch.
     */
    where?: SourceTargetUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceTargetUnits to fetch.
     */
    orderBy?: SourceTargetUnitOrderByWithRelationInput | SourceTargetUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceTargetUnits.
     */
    cursor?: SourceTargetUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceTargetUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceTargetUnits.
     */
    skip?: number
    distinct?: SourceTargetUnitScalarFieldEnum | SourceTargetUnitScalarFieldEnum[]
  }

  /**
   * SourceTargetUnit create
   */
  export type SourceTargetUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceTargetUnit.
     */
    data: XOR<SourceTargetUnitCreateInput, SourceTargetUnitUncheckedCreateInput>
  }

  /**
   * SourceTargetUnit createMany
   */
  export type SourceTargetUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceTargetUnits.
     */
    data: SourceTargetUnitCreateManyInput | SourceTargetUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceTargetUnit createManyAndReturn
   */
  export type SourceTargetUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * The data used to create many SourceTargetUnits.
     */
    data: SourceTargetUnitCreateManyInput | SourceTargetUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceTargetUnit update
   */
  export type SourceTargetUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceTargetUnit.
     */
    data: XOR<SourceTargetUnitUpdateInput, SourceTargetUnitUncheckedUpdateInput>
    /**
     * Choose, which SourceTargetUnit to update.
     */
    where: SourceTargetUnitWhereUniqueInput
  }

  /**
   * SourceTargetUnit updateMany
   */
  export type SourceTargetUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceTargetUnits.
     */
    data: XOR<SourceTargetUnitUpdateManyMutationInput, SourceTargetUnitUncheckedUpdateManyInput>
    /**
     * Filter which SourceTargetUnits to update
     */
    where?: SourceTargetUnitWhereInput
    /**
     * Limit how many SourceTargetUnits to update.
     */
    limit?: number
  }

  /**
   * SourceTargetUnit updateManyAndReturn
   */
  export type SourceTargetUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * The data used to update SourceTargetUnits.
     */
    data: XOR<SourceTargetUnitUpdateManyMutationInput, SourceTargetUnitUncheckedUpdateManyInput>
    /**
     * Filter which SourceTargetUnits to update
     */
    where?: SourceTargetUnitWhereInput
    /**
     * Limit how many SourceTargetUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceTargetUnit upsert
   */
  export type SourceTargetUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceTargetUnit to update in case it exists.
     */
    where: SourceTargetUnitWhereUniqueInput
    /**
     * In case the SourceTargetUnit found by the `where` argument doesn't exist, create a new SourceTargetUnit with this data.
     */
    create: XOR<SourceTargetUnitCreateInput, SourceTargetUnitUncheckedCreateInput>
    /**
     * In case the SourceTargetUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceTargetUnitUpdateInput, SourceTargetUnitUncheckedUpdateInput>
  }

  /**
   * SourceTargetUnit delete
   */
  export type SourceTargetUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
    /**
     * Filter which SourceTargetUnit to delete.
     */
    where: SourceTargetUnitWhereUniqueInput
  }

  /**
   * SourceTargetUnit deleteMany
   */
  export type SourceTargetUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceTargetUnits to delete
     */
    where?: SourceTargetUnitWhereInput
    /**
     * Limit how many SourceTargetUnits to delete.
     */
    limit?: number
  }

  /**
   * SourceTargetUnit without action
   */
  export type SourceTargetUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceTargetUnit
     */
    select?: SourceTargetUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceTargetUnit
     */
    omit?: SourceTargetUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceTargetUnitInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SourceIngredientScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    label: 'label',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceIngredientScalarFieldEnum = (typeof SourceIngredientScalarFieldEnum)[keyof typeof SourceIngredientScalarFieldEnum]


  export const SourceUnitScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    label: 'label',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceUnitScalarFieldEnum = (typeof SourceUnitScalarFieldEnum)[keyof typeof SourceUnitScalarFieldEnum]


  export const TargetIngredientScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    label: 'label',
    target: 'target',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TargetIngredientScalarFieldEnum = (typeof TargetIngredientScalarFieldEnum)[keyof typeof TargetIngredientScalarFieldEnum]


  export const TargetUnitScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    label: 'label',
    target: 'target',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TargetUnitScalarFieldEnum = (typeof TargetUnitScalarFieldEnum)[keyof typeof TargetUnitScalarFieldEnum]


  export const SourceTargetIngredientScalarFieldEnum: {
    id: 'id',
    sourceId: 'sourceId',
    targetId: 'targetId',
    confidenceScore: 'confidenceScore',
    mappingMethod: 'mappingMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceTargetIngredientScalarFieldEnum = (typeof SourceTargetIngredientScalarFieldEnum)[keyof typeof SourceTargetIngredientScalarFieldEnum]


  export const SourceTargetUnitScalarFieldEnum: {
    id: 'id',
    sourceId: 'sourceId',
    targetId: 'targetId',
    confidenceScore: 'confidenceScore',
    mappingMethod: 'mappingMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SourceTargetUnitScalarFieldEnum = (typeof SourceTargetUnitScalarFieldEnum)[keyof typeof SourceTargetUnitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SourceIngredientWhereInput = {
    AND?: SourceIngredientWhereInput | SourceIngredientWhereInput[]
    OR?: SourceIngredientWhereInput[]
    NOT?: SourceIngredientWhereInput | SourceIngredientWhereInput[]
    id?: UuidFilter<"SourceIngredient"> | string
    externalId?: StringFilter<"SourceIngredient"> | string
    label?: StringFilter<"SourceIngredient"> | string
    source?: StringFilter<"SourceIngredient"> | string
    createdAt?: DateTimeFilter<"SourceIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"SourceIngredient"> | Date | string
    mappings?: SourceTargetIngredientListRelationFilter
  }

  export type SourceIngredientOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mappings?: SourceTargetIngredientOrderByRelationAggregateInput
  }

  export type SourceIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    AND?: SourceIngredientWhereInput | SourceIngredientWhereInput[]
    OR?: SourceIngredientWhereInput[]
    NOT?: SourceIngredientWhereInput | SourceIngredientWhereInput[]
    label?: StringFilter<"SourceIngredient"> | string
    source?: StringFilter<"SourceIngredient"> | string
    createdAt?: DateTimeFilter<"SourceIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"SourceIngredient"> | Date | string
    mappings?: SourceTargetIngredientListRelationFilter
  }, "id" | "externalId">

  export type SourceIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SourceIngredientCountOrderByAggregateInput
    _max?: SourceIngredientMaxOrderByAggregateInput
    _min?: SourceIngredientMinOrderByAggregateInput
  }

  export type SourceIngredientScalarWhereWithAggregatesInput = {
    AND?: SourceIngredientScalarWhereWithAggregatesInput | SourceIngredientScalarWhereWithAggregatesInput[]
    OR?: SourceIngredientScalarWhereWithAggregatesInput[]
    NOT?: SourceIngredientScalarWhereWithAggregatesInput | SourceIngredientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SourceIngredient"> | string
    externalId?: StringWithAggregatesFilter<"SourceIngredient"> | string
    label?: StringWithAggregatesFilter<"SourceIngredient"> | string
    source?: StringWithAggregatesFilter<"SourceIngredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SourceIngredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SourceIngredient"> | Date | string
  }

  export type SourceUnitWhereInput = {
    AND?: SourceUnitWhereInput | SourceUnitWhereInput[]
    OR?: SourceUnitWhereInput[]
    NOT?: SourceUnitWhereInput | SourceUnitWhereInput[]
    id?: UuidFilter<"SourceUnit"> | string
    externalId?: StringFilter<"SourceUnit"> | string
    label?: StringFilter<"SourceUnit"> | string
    source?: StringFilter<"SourceUnit"> | string
    createdAt?: DateTimeFilter<"SourceUnit"> | Date | string
    updatedAt?: DateTimeFilter<"SourceUnit"> | Date | string
    mappings?: SourceTargetUnitListRelationFilter
  }

  export type SourceUnitOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mappings?: SourceTargetUnitOrderByRelationAggregateInput
  }

  export type SourceUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    AND?: SourceUnitWhereInput | SourceUnitWhereInput[]
    OR?: SourceUnitWhereInput[]
    NOT?: SourceUnitWhereInput | SourceUnitWhereInput[]
    label?: StringFilter<"SourceUnit"> | string
    source?: StringFilter<"SourceUnit"> | string
    createdAt?: DateTimeFilter<"SourceUnit"> | Date | string
    updatedAt?: DateTimeFilter<"SourceUnit"> | Date | string
    mappings?: SourceTargetUnitListRelationFilter
  }, "id" | "externalId">

  export type SourceUnitOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SourceUnitCountOrderByAggregateInput
    _max?: SourceUnitMaxOrderByAggregateInput
    _min?: SourceUnitMinOrderByAggregateInput
  }

  export type SourceUnitScalarWhereWithAggregatesInput = {
    AND?: SourceUnitScalarWhereWithAggregatesInput | SourceUnitScalarWhereWithAggregatesInput[]
    OR?: SourceUnitScalarWhereWithAggregatesInput[]
    NOT?: SourceUnitScalarWhereWithAggregatesInput | SourceUnitScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SourceUnit"> | string
    externalId?: StringWithAggregatesFilter<"SourceUnit"> | string
    label?: StringWithAggregatesFilter<"SourceUnit"> | string
    source?: StringWithAggregatesFilter<"SourceUnit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SourceUnit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SourceUnit"> | Date | string
  }

  export type TargetIngredientWhereInput = {
    AND?: TargetIngredientWhereInput | TargetIngredientWhereInput[]
    OR?: TargetIngredientWhereInput[]
    NOT?: TargetIngredientWhereInput | TargetIngredientWhereInput[]
    id?: UuidFilter<"TargetIngredient"> | string
    externalId?: StringFilter<"TargetIngredient"> | string
    label?: StringFilter<"TargetIngredient"> | string
    target?: StringFilter<"TargetIngredient"> | string
    createdAt?: DateTimeFilter<"TargetIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"TargetIngredient"> | Date | string
    mappings?: SourceTargetIngredientListRelationFilter
  }

  export type TargetIngredientOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mappings?: SourceTargetIngredientOrderByRelationAggregateInput
  }

  export type TargetIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    AND?: TargetIngredientWhereInput | TargetIngredientWhereInput[]
    OR?: TargetIngredientWhereInput[]
    NOT?: TargetIngredientWhereInput | TargetIngredientWhereInput[]
    label?: StringFilter<"TargetIngredient"> | string
    target?: StringFilter<"TargetIngredient"> | string
    createdAt?: DateTimeFilter<"TargetIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"TargetIngredient"> | Date | string
    mappings?: SourceTargetIngredientListRelationFilter
  }, "id" | "externalId">

  export type TargetIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TargetIngredientCountOrderByAggregateInput
    _max?: TargetIngredientMaxOrderByAggregateInput
    _min?: TargetIngredientMinOrderByAggregateInput
  }

  export type TargetIngredientScalarWhereWithAggregatesInput = {
    AND?: TargetIngredientScalarWhereWithAggregatesInput | TargetIngredientScalarWhereWithAggregatesInput[]
    OR?: TargetIngredientScalarWhereWithAggregatesInput[]
    NOT?: TargetIngredientScalarWhereWithAggregatesInput | TargetIngredientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TargetIngredient"> | string
    externalId?: StringWithAggregatesFilter<"TargetIngredient"> | string
    label?: StringWithAggregatesFilter<"TargetIngredient"> | string
    target?: StringWithAggregatesFilter<"TargetIngredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TargetIngredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TargetIngredient"> | Date | string
  }

  export type TargetUnitWhereInput = {
    AND?: TargetUnitWhereInput | TargetUnitWhereInput[]
    OR?: TargetUnitWhereInput[]
    NOT?: TargetUnitWhereInput | TargetUnitWhereInput[]
    id?: UuidFilter<"TargetUnit"> | string
    externalId?: StringFilter<"TargetUnit"> | string
    label?: StringFilter<"TargetUnit"> | string
    target?: StringFilter<"TargetUnit"> | string
    createdAt?: DateTimeFilter<"TargetUnit"> | Date | string
    updatedAt?: DateTimeFilter<"TargetUnit"> | Date | string
    mappings?: SourceTargetUnitListRelationFilter
  }

  export type TargetUnitOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mappings?: SourceTargetUnitOrderByRelationAggregateInput
  }

  export type TargetUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: string
    AND?: TargetUnitWhereInput | TargetUnitWhereInput[]
    OR?: TargetUnitWhereInput[]
    NOT?: TargetUnitWhereInput | TargetUnitWhereInput[]
    label?: StringFilter<"TargetUnit"> | string
    target?: StringFilter<"TargetUnit"> | string
    createdAt?: DateTimeFilter<"TargetUnit"> | Date | string
    updatedAt?: DateTimeFilter<"TargetUnit"> | Date | string
    mappings?: SourceTargetUnitListRelationFilter
  }, "id" | "externalId">

  export type TargetUnitOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TargetUnitCountOrderByAggregateInput
    _max?: TargetUnitMaxOrderByAggregateInput
    _min?: TargetUnitMinOrderByAggregateInput
  }

  export type TargetUnitScalarWhereWithAggregatesInput = {
    AND?: TargetUnitScalarWhereWithAggregatesInput | TargetUnitScalarWhereWithAggregatesInput[]
    OR?: TargetUnitScalarWhereWithAggregatesInput[]
    NOT?: TargetUnitScalarWhereWithAggregatesInput | TargetUnitScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TargetUnit"> | string
    externalId?: StringWithAggregatesFilter<"TargetUnit"> | string
    label?: StringWithAggregatesFilter<"TargetUnit"> | string
    target?: StringWithAggregatesFilter<"TargetUnit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TargetUnit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TargetUnit"> | Date | string
  }

  export type SourceTargetIngredientWhereInput = {
    AND?: SourceTargetIngredientWhereInput | SourceTargetIngredientWhereInput[]
    OR?: SourceTargetIngredientWhereInput[]
    NOT?: SourceTargetIngredientWhereInput | SourceTargetIngredientWhereInput[]
    id?: UuidFilter<"SourceTargetIngredient"> | string
    sourceId?: StringFilter<"SourceTargetIngredient"> | string
    targetId?: StringFilter<"SourceTargetIngredient"> | string
    confidenceScore?: DecimalFilter<"SourceTargetIngredient"> | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFilter<"SourceTargetIngredient"> | string
    createdAt?: DateTimeFilter<"SourceTargetIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"SourceTargetIngredient"> | Date | string
    sourceIngredient?: XOR<SourceIngredientScalarRelationFilter, SourceIngredientWhereInput>
    targetIngredient?: XOR<TargetIngredientScalarRelationFilter, TargetIngredientWhereInput>
  }

  export type SourceTargetIngredientOrderByWithRelationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceIngredient?: SourceIngredientOrderByWithRelationInput
    targetIngredient?: TargetIngredientOrderByWithRelationInput
  }

  export type SourceTargetIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceTargetIngredientWhereInput | SourceTargetIngredientWhereInput[]
    OR?: SourceTargetIngredientWhereInput[]
    NOT?: SourceTargetIngredientWhereInput | SourceTargetIngredientWhereInput[]
    sourceId?: StringFilter<"SourceTargetIngredient"> | string
    targetId?: StringFilter<"SourceTargetIngredient"> | string
    confidenceScore?: DecimalFilter<"SourceTargetIngredient"> | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFilter<"SourceTargetIngredient"> | string
    createdAt?: DateTimeFilter<"SourceTargetIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"SourceTargetIngredient"> | Date | string
    sourceIngredient?: XOR<SourceIngredientScalarRelationFilter, SourceIngredientWhereInput>
    targetIngredient?: XOR<TargetIngredientScalarRelationFilter, TargetIngredientWhereInput>
  }, "id">

  export type SourceTargetIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SourceTargetIngredientCountOrderByAggregateInput
    _avg?: SourceTargetIngredientAvgOrderByAggregateInput
    _max?: SourceTargetIngredientMaxOrderByAggregateInput
    _min?: SourceTargetIngredientMinOrderByAggregateInput
    _sum?: SourceTargetIngredientSumOrderByAggregateInput
  }

  export type SourceTargetIngredientScalarWhereWithAggregatesInput = {
    AND?: SourceTargetIngredientScalarWhereWithAggregatesInput | SourceTargetIngredientScalarWhereWithAggregatesInput[]
    OR?: SourceTargetIngredientScalarWhereWithAggregatesInput[]
    NOT?: SourceTargetIngredientScalarWhereWithAggregatesInput | SourceTargetIngredientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SourceTargetIngredient"> | string
    sourceId?: StringWithAggregatesFilter<"SourceTargetIngredient"> | string
    targetId?: StringWithAggregatesFilter<"SourceTargetIngredient"> | string
    confidenceScore?: DecimalWithAggregatesFilter<"SourceTargetIngredient"> | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringWithAggregatesFilter<"SourceTargetIngredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SourceTargetIngredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SourceTargetIngredient"> | Date | string
  }

  export type SourceTargetUnitWhereInput = {
    AND?: SourceTargetUnitWhereInput | SourceTargetUnitWhereInput[]
    OR?: SourceTargetUnitWhereInput[]
    NOT?: SourceTargetUnitWhereInput | SourceTargetUnitWhereInput[]
    id?: UuidFilter<"SourceTargetUnit"> | string
    sourceId?: StringFilter<"SourceTargetUnit"> | string
    targetId?: StringFilter<"SourceTargetUnit"> | string
    confidenceScore?: DecimalFilter<"SourceTargetUnit"> | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFilter<"SourceTargetUnit"> | string
    createdAt?: DateTimeFilter<"SourceTargetUnit"> | Date | string
    updatedAt?: DateTimeFilter<"SourceTargetUnit"> | Date | string
    sourceUnit?: XOR<SourceUnitScalarRelationFilter, SourceUnitWhereInput>
    targetUnit?: XOR<TargetUnitScalarRelationFilter, TargetUnitWhereInput>
  }

  export type SourceTargetUnitOrderByWithRelationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceUnit?: SourceUnitOrderByWithRelationInput
    targetUnit?: TargetUnitOrderByWithRelationInput
  }

  export type SourceTargetUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceTargetUnitWhereInput | SourceTargetUnitWhereInput[]
    OR?: SourceTargetUnitWhereInput[]
    NOT?: SourceTargetUnitWhereInput | SourceTargetUnitWhereInput[]
    sourceId?: StringFilter<"SourceTargetUnit"> | string
    targetId?: StringFilter<"SourceTargetUnit"> | string
    confidenceScore?: DecimalFilter<"SourceTargetUnit"> | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFilter<"SourceTargetUnit"> | string
    createdAt?: DateTimeFilter<"SourceTargetUnit"> | Date | string
    updatedAt?: DateTimeFilter<"SourceTargetUnit"> | Date | string
    sourceUnit?: XOR<SourceUnitScalarRelationFilter, SourceUnitWhereInput>
    targetUnit?: XOR<TargetUnitScalarRelationFilter, TargetUnitWhereInput>
  }, "id">

  export type SourceTargetUnitOrderByWithAggregationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SourceTargetUnitCountOrderByAggregateInput
    _avg?: SourceTargetUnitAvgOrderByAggregateInput
    _max?: SourceTargetUnitMaxOrderByAggregateInput
    _min?: SourceTargetUnitMinOrderByAggregateInput
    _sum?: SourceTargetUnitSumOrderByAggregateInput
  }

  export type SourceTargetUnitScalarWhereWithAggregatesInput = {
    AND?: SourceTargetUnitScalarWhereWithAggregatesInput | SourceTargetUnitScalarWhereWithAggregatesInput[]
    OR?: SourceTargetUnitScalarWhereWithAggregatesInput[]
    NOT?: SourceTargetUnitScalarWhereWithAggregatesInput | SourceTargetUnitScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SourceTargetUnit"> | string
    sourceId?: StringWithAggregatesFilter<"SourceTargetUnit"> | string
    targetId?: StringWithAggregatesFilter<"SourceTargetUnit"> | string
    confidenceScore?: DecimalWithAggregatesFilter<"SourceTargetUnit"> | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringWithAggregatesFilter<"SourceTargetUnit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SourceTargetUnit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SourceTargetUnit"> | Date | string
  }

  export type SourceIngredientCreateInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mappings?: SourceTargetIngredientCreateNestedManyWithoutSourceIngredientInput
  }

  export type SourceIngredientUncheckedCreateInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mappings?: SourceTargetIngredientUncheckedCreateNestedManyWithoutSourceIngredientInput
  }

  export type SourceIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: SourceTargetIngredientUpdateManyWithoutSourceIngredientNestedInput
  }

  export type SourceIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: SourceTargetIngredientUncheckedUpdateManyWithoutSourceIngredientNestedInput
  }

  export type SourceIngredientCreateManyInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUnitCreateInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mappings?: SourceTargetUnitCreateNestedManyWithoutSourceUnitInput
  }

  export type SourceUnitUncheckedCreateInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mappings?: SourceTargetUnitUncheckedCreateNestedManyWithoutSourceUnitInput
  }

  export type SourceUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: SourceTargetUnitUpdateManyWithoutSourceUnitNestedInput
  }

  export type SourceUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: SourceTargetUnitUncheckedUpdateManyWithoutSourceUnitNestedInput
  }

  export type SourceUnitCreateManyInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetIngredientCreateInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mappings?: SourceTargetIngredientCreateNestedManyWithoutTargetIngredientInput
  }

  export type TargetIngredientUncheckedCreateInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mappings?: SourceTargetIngredientUncheckedCreateNestedManyWithoutTargetIngredientInput
  }

  export type TargetIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: SourceTargetIngredientUpdateManyWithoutTargetIngredientNestedInput
  }

  export type TargetIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: SourceTargetIngredientUncheckedUpdateManyWithoutTargetIngredientNestedInput
  }

  export type TargetIngredientCreateManyInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetUnitCreateInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mappings?: SourceTargetUnitCreateNestedManyWithoutTargetUnitInput
  }

  export type TargetUnitUncheckedCreateInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mappings?: SourceTargetUnitUncheckedCreateNestedManyWithoutTargetUnitInput
  }

  export type TargetUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: SourceTargetUnitUpdateManyWithoutTargetUnitNestedInput
  }

  export type TargetUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mappings?: SourceTargetUnitUncheckedUpdateManyWithoutTargetUnitNestedInput
  }

  export type TargetUnitCreateManyInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetIngredientCreateInput = {
    id?: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceIngredient: SourceIngredientCreateNestedOneWithoutMappingsInput
    targetIngredient: TargetIngredientCreateNestedOneWithoutMappingsInput
  }

  export type SourceTargetIngredientUncheckedCreateInput = {
    id?: string
    sourceId: string
    targetId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceIngredient?: SourceIngredientUpdateOneRequiredWithoutMappingsNestedInput
    targetIngredient?: TargetIngredientUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type SourceTargetIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetIngredientCreateManyInput = {
    id?: string
    sourceId: string
    targetId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetUnitCreateInput = {
    id?: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceUnit: SourceUnitCreateNestedOneWithoutMappingsInput
    targetUnit: TargetUnitCreateNestedOneWithoutMappingsInput
  }

  export type SourceTargetUnitUncheckedCreateInput = {
    id?: string
    sourceId: string
    targetId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUnit?: SourceUnitUpdateOneRequiredWithoutMappingsNestedInput
    targetUnit?: TargetUnitUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type SourceTargetUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetUnitCreateManyInput = {
    id?: string
    sourceId: string
    targetId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SourceTargetIngredientListRelationFilter = {
    every?: SourceTargetIngredientWhereInput
    some?: SourceTargetIngredientWhereInput
    none?: SourceTargetIngredientWhereInput
  }

  export type SourceTargetIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SourceTargetUnitListRelationFilter = {
    every?: SourceTargetUnitWhereInput
    some?: SourceTargetUnitWhereInput
    none?: SourceTargetUnitWhereInput
  }

  export type SourceTargetUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceUnitCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceUnitMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetUnitCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetUnitMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    label?: SortOrder
    target?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SourceIngredientScalarRelationFilter = {
    is?: SourceIngredientWhereInput
    isNot?: SourceIngredientWhereInput
  }

  export type TargetIngredientScalarRelationFilter = {
    is?: TargetIngredientWhereInput
    isNot?: TargetIngredientWhereInput
  }

  export type SourceTargetIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTargetIngredientAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type SourceTargetIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTargetIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTargetIngredientSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type SourceUnitScalarRelationFilter = {
    is?: SourceUnitWhereInput
    isNot?: SourceUnitWhereInput
  }

  export type TargetUnitScalarRelationFilter = {
    is?: TargetUnitWhereInput
    isNot?: TargetUnitWhereInput
  }

  export type SourceTargetUnitCountOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTargetUnitAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type SourceTargetUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTargetUnitMinOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    confidenceScore?: SortOrder
    mappingMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SourceTargetUnitSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type SourceTargetIngredientCreateNestedManyWithoutSourceIngredientInput = {
    create?: XOR<SourceTargetIngredientCreateWithoutSourceIngredientInput, SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput> | SourceTargetIngredientCreateWithoutSourceIngredientInput[] | SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput[]
    connectOrCreate?: SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput | SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput[]
    createMany?: SourceTargetIngredientCreateManySourceIngredientInputEnvelope
    connect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
  }

  export type SourceTargetIngredientUncheckedCreateNestedManyWithoutSourceIngredientInput = {
    create?: XOR<SourceTargetIngredientCreateWithoutSourceIngredientInput, SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput> | SourceTargetIngredientCreateWithoutSourceIngredientInput[] | SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput[]
    connectOrCreate?: SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput | SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput[]
    createMany?: SourceTargetIngredientCreateManySourceIngredientInputEnvelope
    connect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SourceTargetIngredientUpdateManyWithoutSourceIngredientNestedInput = {
    create?: XOR<SourceTargetIngredientCreateWithoutSourceIngredientInput, SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput> | SourceTargetIngredientCreateWithoutSourceIngredientInput[] | SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput[]
    connectOrCreate?: SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput | SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput[]
    upsert?: SourceTargetIngredientUpsertWithWhereUniqueWithoutSourceIngredientInput | SourceTargetIngredientUpsertWithWhereUniqueWithoutSourceIngredientInput[]
    createMany?: SourceTargetIngredientCreateManySourceIngredientInputEnvelope
    set?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    disconnect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    delete?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    connect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    update?: SourceTargetIngredientUpdateWithWhereUniqueWithoutSourceIngredientInput | SourceTargetIngredientUpdateWithWhereUniqueWithoutSourceIngredientInput[]
    updateMany?: SourceTargetIngredientUpdateManyWithWhereWithoutSourceIngredientInput | SourceTargetIngredientUpdateManyWithWhereWithoutSourceIngredientInput[]
    deleteMany?: SourceTargetIngredientScalarWhereInput | SourceTargetIngredientScalarWhereInput[]
  }

  export type SourceTargetIngredientUncheckedUpdateManyWithoutSourceIngredientNestedInput = {
    create?: XOR<SourceTargetIngredientCreateWithoutSourceIngredientInput, SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput> | SourceTargetIngredientCreateWithoutSourceIngredientInput[] | SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput[]
    connectOrCreate?: SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput | SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput[]
    upsert?: SourceTargetIngredientUpsertWithWhereUniqueWithoutSourceIngredientInput | SourceTargetIngredientUpsertWithWhereUniqueWithoutSourceIngredientInput[]
    createMany?: SourceTargetIngredientCreateManySourceIngredientInputEnvelope
    set?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    disconnect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    delete?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    connect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    update?: SourceTargetIngredientUpdateWithWhereUniqueWithoutSourceIngredientInput | SourceTargetIngredientUpdateWithWhereUniqueWithoutSourceIngredientInput[]
    updateMany?: SourceTargetIngredientUpdateManyWithWhereWithoutSourceIngredientInput | SourceTargetIngredientUpdateManyWithWhereWithoutSourceIngredientInput[]
    deleteMany?: SourceTargetIngredientScalarWhereInput | SourceTargetIngredientScalarWhereInput[]
  }

  export type SourceTargetUnitCreateNestedManyWithoutSourceUnitInput = {
    create?: XOR<SourceTargetUnitCreateWithoutSourceUnitInput, SourceTargetUnitUncheckedCreateWithoutSourceUnitInput> | SourceTargetUnitCreateWithoutSourceUnitInput[] | SourceTargetUnitUncheckedCreateWithoutSourceUnitInput[]
    connectOrCreate?: SourceTargetUnitCreateOrConnectWithoutSourceUnitInput | SourceTargetUnitCreateOrConnectWithoutSourceUnitInput[]
    createMany?: SourceTargetUnitCreateManySourceUnitInputEnvelope
    connect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
  }

  export type SourceTargetUnitUncheckedCreateNestedManyWithoutSourceUnitInput = {
    create?: XOR<SourceTargetUnitCreateWithoutSourceUnitInput, SourceTargetUnitUncheckedCreateWithoutSourceUnitInput> | SourceTargetUnitCreateWithoutSourceUnitInput[] | SourceTargetUnitUncheckedCreateWithoutSourceUnitInput[]
    connectOrCreate?: SourceTargetUnitCreateOrConnectWithoutSourceUnitInput | SourceTargetUnitCreateOrConnectWithoutSourceUnitInput[]
    createMany?: SourceTargetUnitCreateManySourceUnitInputEnvelope
    connect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
  }

  export type SourceTargetUnitUpdateManyWithoutSourceUnitNestedInput = {
    create?: XOR<SourceTargetUnitCreateWithoutSourceUnitInput, SourceTargetUnitUncheckedCreateWithoutSourceUnitInput> | SourceTargetUnitCreateWithoutSourceUnitInput[] | SourceTargetUnitUncheckedCreateWithoutSourceUnitInput[]
    connectOrCreate?: SourceTargetUnitCreateOrConnectWithoutSourceUnitInput | SourceTargetUnitCreateOrConnectWithoutSourceUnitInput[]
    upsert?: SourceTargetUnitUpsertWithWhereUniqueWithoutSourceUnitInput | SourceTargetUnitUpsertWithWhereUniqueWithoutSourceUnitInput[]
    createMany?: SourceTargetUnitCreateManySourceUnitInputEnvelope
    set?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    disconnect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    delete?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    connect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    update?: SourceTargetUnitUpdateWithWhereUniqueWithoutSourceUnitInput | SourceTargetUnitUpdateWithWhereUniqueWithoutSourceUnitInput[]
    updateMany?: SourceTargetUnitUpdateManyWithWhereWithoutSourceUnitInput | SourceTargetUnitUpdateManyWithWhereWithoutSourceUnitInput[]
    deleteMany?: SourceTargetUnitScalarWhereInput | SourceTargetUnitScalarWhereInput[]
  }

  export type SourceTargetUnitUncheckedUpdateManyWithoutSourceUnitNestedInput = {
    create?: XOR<SourceTargetUnitCreateWithoutSourceUnitInput, SourceTargetUnitUncheckedCreateWithoutSourceUnitInput> | SourceTargetUnitCreateWithoutSourceUnitInput[] | SourceTargetUnitUncheckedCreateWithoutSourceUnitInput[]
    connectOrCreate?: SourceTargetUnitCreateOrConnectWithoutSourceUnitInput | SourceTargetUnitCreateOrConnectWithoutSourceUnitInput[]
    upsert?: SourceTargetUnitUpsertWithWhereUniqueWithoutSourceUnitInput | SourceTargetUnitUpsertWithWhereUniqueWithoutSourceUnitInput[]
    createMany?: SourceTargetUnitCreateManySourceUnitInputEnvelope
    set?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    disconnect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    delete?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    connect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    update?: SourceTargetUnitUpdateWithWhereUniqueWithoutSourceUnitInput | SourceTargetUnitUpdateWithWhereUniqueWithoutSourceUnitInput[]
    updateMany?: SourceTargetUnitUpdateManyWithWhereWithoutSourceUnitInput | SourceTargetUnitUpdateManyWithWhereWithoutSourceUnitInput[]
    deleteMany?: SourceTargetUnitScalarWhereInput | SourceTargetUnitScalarWhereInput[]
  }

  export type SourceTargetIngredientCreateNestedManyWithoutTargetIngredientInput = {
    create?: XOR<SourceTargetIngredientCreateWithoutTargetIngredientInput, SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput> | SourceTargetIngredientCreateWithoutTargetIngredientInput[] | SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput[]
    connectOrCreate?: SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput | SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput[]
    createMany?: SourceTargetIngredientCreateManyTargetIngredientInputEnvelope
    connect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
  }

  export type SourceTargetIngredientUncheckedCreateNestedManyWithoutTargetIngredientInput = {
    create?: XOR<SourceTargetIngredientCreateWithoutTargetIngredientInput, SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput> | SourceTargetIngredientCreateWithoutTargetIngredientInput[] | SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput[]
    connectOrCreate?: SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput | SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput[]
    createMany?: SourceTargetIngredientCreateManyTargetIngredientInputEnvelope
    connect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
  }

  export type SourceTargetIngredientUpdateManyWithoutTargetIngredientNestedInput = {
    create?: XOR<SourceTargetIngredientCreateWithoutTargetIngredientInput, SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput> | SourceTargetIngredientCreateWithoutTargetIngredientInput[] | SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput[]
    connectOrCreate?: SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput | SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput[]
    upsert?: SourceTargetIngredientUpsertWithWhereUniqueWithoutTargetIngredientInput | SourceTargetIngredientUpsertWithWhereUniqueWithoutTargetIngredientInput[]
    createMany?: SourceTargetIngredientCreateManyTargetIngredientInputEnvelope
    set?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    disconnect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    delete?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    connect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    update?: SourceTargetIngredientUpdateWithWhereUniqueWithoutTargetIngredientInput | SourceTargetIngredientUpdateWithWhereUniqueWithoutTargetIngredientInput[]
    updateMany?: SourceTargetIngredientUpdateManyWithWhereWithoutTargetIngredientInput | SourceTargetIngredientUpdateManyWithWhereWithoutTargetIngredientInput[]
    deleteMany?: SourceTargetIngredientScalarWhereInput | SourceTargetIngredientScalarWhereInput[]
  }

  export type SourceTargetIngredientUncheckedUpdateManyWithoutTargetIngredientNestedInput = {
    create?: XOR<SourceTargetIngredientCreateWithoutTargetIngredientInput, SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput> | SourceTargetIngredientCreateWithoutTargetIngredientInput[] | SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput[]
    connectOrCreate?: SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput | SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput[]
    upsert?: SourceTargetIngredientUpsertWithWhereUniqueWithoutTargetIngredientInput | SourceTargetIngredientUpsertWithWhereUniqueWithoutTargetIngredientInput[]
    createMany?: SourceTargetIngredientCreateManyTargetIngredientInputEnvelope
    set?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    disconnect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    delete?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    connect?: SourceTargetIngredientWhereUniqueInput | SourceTargetIngredientWhereUniqueInput[]
    update?: SourceTargetIngredientUpdateWithWhereUniqueWithoutTargetIngredientInput | SourceTargetIngredientUpdateWithWhereUniqueWithoutTargetIngredientInput[]
    updateMany?: SourceTargetIngredientUpdateManyWithWhereWithoutTargetIngredientInput | SourceTargetIngredientUpdateManyWithWhereWithoutTargetIngredientInput[]
    deleteMany?: SourceTargetIngredientScalarWhereInput | SourceTargetIngredientScalarWhereInput[]
  }

  export type SourceTargetUnitCreateNestedManyWithoutTargetUnitInput = {
    create?: XOR<SourceTargetUnitCreateWithoutTargetUnitInput, SourceTargetUnitUncheckedCreateWithoutTargetUnitInput> | SourceTargetUnitCreateWithoutTargetUnitInput[] | SourceTargetUnitUncheckedCreateWithoutTargetUnitInput[]
    connectOrCreate?: SourceTargetUnitCreateOrConnectWithoutTargetUnitInput | SourceTargetUnitCreateOrConnectWithoutTargetUnitInput[]
    createMany?: SourceTargetUnitCreateManyTargetUnitInputEnvelope
    connect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
  }

  export type SourceTargetUnitUncheckedCreateNestedManyWithoutTargetUnitInput = {
    create?: XOR<SourceTargetUnitCreateWithoutTargetUnitInput, SourceTargetUnitUncheckedCreateWithoutTargetUnitInput> | SourceTargetUnitCreateWithoutTargetUnitInput[] | SourceTargetUnitUncheckedCreateWithoutTargetUnitInput[]
    connectOrCreate?: SourceTargetUnitCreateOrConnectWithoutTargetUnitInput | SourceTargetUnitCreateOrConnectWithoutTargetUnitInput[]
    createMany?: SourceTargetUnitCreateManyTargetUnitInputEnvelope
    connect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
  }

  export type SourceTargetUnitUpdateManyWithoutTargetUnitNestedInput = {
    create?: XOR<SourceTargetUnitCreateWithoutTargetUnitInput, SourceTargetUnitUncheckedCreateWithoutTargetUnitInput> | SourceTargetUnitCreateWithoutTargetUnitInput[] | SourceTargetUnitUncheckedCreateWithoutTargetUnitInput[]
    connectOrCreate?: SourceTargetUnitCreateOrConnectWithoutTargetUnitInput | SourceTargetUnitCreateOrConnectWithoutTargetUnitInput[]
    upsert?: SourceTargetUnitUpsertWithWhereUniqueWithoutTargetUnitInput | SourceTargetUnitUpsertWithWhereUniqueWithoutTargetUnitInput[]
    createMany?: SourceTargetUnitCreateManyTargetUnitInputEnvelope
    set?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    disconnect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    delete?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    connect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    update?: SourceTargetUnitUpdateWithWhereUniqueWithoutTargetUnitInput | SourceTargetUnitUpdateWithWhereUniqueWithoutTargetUnitInput[]
    updateMany?: SourceTargetUnitUpdateManyWithWhereWithoutTargetUnitInput | SourceTargetUnitUpdateManyWithWhereWithoutTargetUnitInput[]
    deleteMany?: SourceTargetUnitScalarWhereInput | SourceTargetUnitScalarWhereInput[]
  }

  export type SourceTargetUnitUncheckedUpdateManyWithoutTargetUnitNestedInput = {
    create?: XOR<SourceTargetUnitCreateWithoutTargetUnitInput, SourceTargetUnitUncheckedCreateWithoutTargetUnitInput> | SourceTargetUnitCreateWithoutTargetUnitInput[] | SourceTargetUnitUncheckedCreateWithoutTargetUnitInput[]
    connectOrCreate?: SourceTargetUnitCreateOrConnectWithoutTargetUnitInput | SourceTargetUnitCreateOrConnectWithoutTargetUnitInput[]
    upsert?: SourceTargetUnitUpsertWithWhereUniqueWithoutTargetUnitInput | SourceTargetUnitUpsertWithWhereUniqueWithoutTargetUnitInput[]
    createMany?: SourceTargetUnitCreateManyTargetUnitInputEnvelope
    set?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    disconnect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    delete?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    connect?: SourceTargetUnitWhereUniqueInput | SourceTargetUnitWhereUniqueInput[]
    update?: SourceTargetUnitUpdateWithWhereUniqueWithoutTargetUnitInput | SourceTargetUnitUpdateWithWhereUniqueWithoutTargetUnitInput[]
    updateMany?: SourceTargetUnitUpdateManyWithWhereWithoutTargetUnitInput | SourceTargetUnitUpdateManyWithWhereWithoutTargetUnitInput[]
    deleteMany?: SourceTargetUnitScalarWhereInput | SourceTargetUnitScalarWhereInput[]
  }

  export type SourceIngredientCreateNestedOneWithoutMappingsInput = {
    create?: XOR<SourceIngredientCreateWithoutMappingsInput, SourceIngredientUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: SourceIngredientCreateOrConnectWithoutMappingsInput
    connect?: SourceIngredientWhereUniqueInput
  }

  export type TargetIngredientCreateNestedOneWithoutMappingsInput = {
    create?: XOR<TargetIngredientCreateWithoutMappingsInput, TargetIngredientUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: TargetIngredientCreateOrConnectWithoutMappingsInput
    connect?: TargetIngredientWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SourceIngredientUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<SourceIngredientCreateWithoutMappingsInput, SourceIngredientUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: SourceIngredientCreateOrConnectWithoutMappingsInput
    upsert?: SourceIngredientUpsertWithoutMappingsInput
    connect?: SourceIngredientWhereUniqueInput
    update?: XOR<XOR<SourceIngredientUpdateToOneWithWhereWithoutMappingsInput, SourceIngredientUpdateWithoutMappingsInput>, SourceIngredientUncheckedUpdateWithoutMappingsInput>
  }

  export type TargetIngredientUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<TargetIngredientCreateWithoutMappingsInput, TargetIngredientUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: TargetIngredientCreateOrConnectWithoutMappingsInput
    upsert?: TargetIngredientUpsertWithoutMappingsInput
    connect?: TargetIngredientWhereUniqueInput
    update?: XOR<XOR<TargetIngredientUpdateToOneWithWhereWithoutMappingsInput, TargetIngredientUpdateWithoutMappingsInput>, TargetIngredientUncheckedUpdateWithoutMappingsInput>
  }

  export type SourceUnitCreateNestedOneWithoutMappingsInput = {
    create?: XOR<SourceUnitCreateWithoutMappingsInput, SourceUnitUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: SourceUnitCreateOrConnectWithoutMappingsInput
    connect?: SourceUnitWhereUniqueInput
  }

  export type TargetUnitCreateNestedOneWithoutMappingsInput = {
    create?: XOR<TargetUnitCreateWithoutMappingsInput, TargetUnitUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: TargetUnitCreateOrConnectWithoutMappingsInput
    connect?: TargetUnitWhereUniqueInput
  }

  export type SourceUnitUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<SourceUnitCreateWithoutMappingsInput, SourceUnitUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: SourceUnitCreateOrConnectWithoutMappingsInput
    upsert?: SourceUnitUpsertWithoutMappingsInput
    connect?: SourceUnitWhereUniqueInput
    update?: XOR<XOR<SourceUnitUpdateToOneWithWhereWithoutMappingsInput, SourceUnitUpdateWithoutMappingsInput>, SourceUnitUncheckedUpdateWithoutMappingsInput>
  }

  export type TargetUnitUpdateOneRequiredWithoutMappingsNestedInput = {
    create?: XOR<TargetUnitCreateWithoutMappingsInput, TargetUnitUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: TargetUnitCreateOrConnectWithoutMappingsInput
    upsert?: TargetUnitUpsertWithoutMappingsInput
    connect?: TargetUnitWhereUniqueInput
    update?: XOR<XOR<TargetUnitUpdateToOneWithWhereWithoutMappingsInput, TargetUnitUpdateWithoutMappingsInput>, TargetUnitUncheckedUpdateWithoutMappingsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type SourceTargetIngredientCreateWithoutSourceIngredientInput = {
    id?: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    targetIngredient: TargetIngredientCreateNestedOneWithoutMappingsInput
  }

  export type SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput = {
    id?: string
    targetId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetIngredientCreateOrConnectWithoutSourceIngredientInput = {
    where: SourceTargetIngredientWhereUniqueInput
    create: XOR<SourceTargetIngredientCreateWithoutSourceIngredientInput, SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput>
  }

  export type SourceTargetIngredientCreateManySourceIngredientInputEnvelope = {
    data: SourceTargetIngredientCreateManySourceIngredientInput | SourceTargetIngredientCreateManySourceIngredientInput[]
    skipDuplicates?: boolean
  }

  export type SourceTargetIngredientUpsertWithWhereUniqueWithoutSourceIngredientInput = {
    where: SourceTargetIngredientWhereUniqueInput
    update: XOR<SourceTargetIngredientUpdateWithoutSourceIngredientInput, SourceTargetIngredientUncheckedUpdateWithoutSourceIngredientInput>
    create: XOR<SourceTargetIngredientCreateWithoutSourceIngredientInput, SourceTargetIngredientUncheckedCreateWithoutSourceIngredientInput>
  }

  export type SourceTargetIngredientUpdateWithWhereUniqueWithoutSourceIngredientInput = {
    where: SourceTargetIngredientWhereUniqueInput
    data: XOR<SourceTargetIngredientUpdateWithoutSourceIngredientInput, SourceTargetIngredientUncheckedUpdateWithoutSourceIngredientInput>
  }

  export type SourceTargetIngredientUpdateManyWithWhereWithoutSourceIngredientInput = {
    where: SourceTargetIngredientScalarWhereInput
    data: XOR<SourceTargetIngredientUpdateManyMutationInput, SourceTargetIngredientUncheckedUpdateManyWithoutSourceIngredientInput>
  }

  export type SourceTargetIngredientScalarWhereInput = {
    AND?: SourceTargetIngredientScalarWhereInput | SourceTargetIngredientScalarWhereInput[]
    OR?: SourceTargetIngredientScalarWhereInput[]
    NOT?: SourceTargetIngredientScalarWhereInput | SourceTargetIngredientScalarWhereInput[]
    id?: UuidFilter<"SourceTargetIngredient"> | string
    sourceId?: StringFilter<"SourceTargetIngredient"> | string
    targetId?: StringFilter<"SourceTargetIngredient"> | string
    confidenceScore?: DecimalFilter<"SourceTargetIngredient"> | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFilter<"SourceTargetIngredient"> | string
    createdAt?: DateTimeFilter<"SourceTargetIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"SourceTargetIngredient"> | Date | string
  }

  export type SourceTargetUnitCreateWithoutSourceUnitInput = {
    id?: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    targetUnit: TargetUnitCreateNestedOneWithoutMappingsInput
  }

  export type SourceTargetUnitUncheckedCreateWithoutSourceUnitInput = {
    id?: string
    targetId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetUnitCreateOrConnectWithoutSourceUnitInput = {
    where: SourceTargetUnitWhereUniqueInput
    create: XOR<SourceTargetUnitCreateWithoutSourceUnitInput, SourceTargetUnitUncheckedCreateWithoutSourceUnitInput>
  }

  export type SourceTargetUnitCreateManySourceUnitInputEnvelope = {
    data: SourceTargetUnitCreateManySourceUnitInput | SourceTargetUnitCreateManySourceUnitInput[]
    skipDuplicates?: boolean
  }

  export type SourceTargetUnitUpsertWithWhereUniqueWithoutSourceUnitInput = {
    where: SourceTargetUnitWhereUniqueInput
    update: XOR<SourceTargetUnitUpdateWithoutSourceUnitInput, SourceTargetUnitUncheckedUpdateWithoutSourceUnitInput>
    create: XOR<SourceTargetUnitCreateWithoutSourceUnitInput, SourceTargetUnitUncheckedCreateWithoutSourceUnitInput>
  }

  export type SourceTargetUnitUpdateWithWhereUniqueWithoutSourceUnitInput = {
    where: SourceTargetUnitWhereUniqueInput
    data: XOR<SourceTargetUnitUpdateWithoutSourceUnitInput, SourceTargetUnitUncheckedUpdateWithoutSourceUnitInput>
  }

  export type SourceTargetUnitUpdateManyWithWhereWithoutSourceUnitInput = {
    where: SourceTargetUnitScalarWhereInput
    data: XOR<SourceTargetUnitUpdateManyMutationInput, SourceTargetUnitUncheckedUpdateManyWithoutSourceUnitInput>
  }

  export type SourceTargetUnitScalarWhereInput = {
    AND?: SourceTargetUnitScalarWhereInput | SourceTargetUnitScalarWhereInput[]
    OR?: SourceTargetUnitScalarWhereInput[]
    NOT?: SourceTargetUnitScalarWhereInput | SourceTargetUnitScalarWhereInput[]
    id?: UuidFilter<"SourceTargetUnit"> | string
    sourceId?: StringFilter<"SourceTargetUnit"> | string
    targetId?: StringFilter<"SourceTargetUnit"> | string
    confidenceScore?: DecimalFilter<"SourceTargetUnit"> | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFilter<"SourceTargetUnit"> | string
    createdAt?: DateTimeFilter<"SourceTargetUnit"> | Date | string
    updatedAt?: DateTimeFilter<"SourceTargetUnit"> | Date | string
  }

  export type SourceTargetIngredientCreateWithoutTargetIngredientInput = {
    id?: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceIngredient: SourceIngredientCreateNestedOneWithoutMappingsInput
  }

  export type SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput = {
    id?: string
    sourceId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetIngredientCreateOrConnectWithoutTargetIngredientInput = {
    where: SourceTargetIngredientWhereUniqueInput
    create: XOR<SourceTargetIngredientCreateWithoutTargetIngredientInput, SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput>
  }

  export type SourceTargetIngredientCreateManyTargetIngredientInputEnvelope = {
    data: SourceTargetIngredientCreateManyTargetIngredientInput | SourceTargetIngredientCreateManyTargetIngredientInput[]
    skipDuplicates?: boolean
  }

  export type SourceTargetIngredientUpsertWithWhereUniqueWithoutTargetIngredientInput = {
    where: SourceTargetIngredientWhereUniqueInput
    update: XOR<SourceTargetIngredientUpdateWithoutTargetIngredientInput, SourceTargetIngredientUncheckedUpdateWithoutTargetIngredientInput>
    create: XOR<SourceTargetIngredientCreateWithoutTargetIngredientInput, SourceTargetIngredientUncheckedCreateWithoutTargetIngredientInput>
  }

  export type SourceTargetIngredientUpdateWithWhereUniqueWithoutTargetIngredientInput = {
    where: SourceTargetIngredientWhereUniqueInput
    data: XOR<SourceTargetIngredientUpdateWithoutTargetIngredientInput, SourceTargetIngredientUncheckedUpdateWithoutTargetIngredientInput>
  }

  export type SourceTargetIngredientUpdateManyWithWhereWithoutTargetIngredientInput = {
    where: SourceTargetIngredientScalarWhereInput
    data: XOR<SourceTargetIngredientUpdateManyMutationInput, SourceTargetIngredientUncheckedUpdateManyWithoutTargetIngredientInput>
  }

  export type SourceTargetUnitCreateWithoutTargetUnitInput = {
    id?: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceUnit: SourceUnitCreateNestedOneWithoutMappingsInput
  }

  export type SourceTargetUnitUncheckedCreateWithoutTargetUnitInput = {
    id?: string
    sourceId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetUnitCreateOrConnectWithoutTargetUnitInput = {
    where: SourceTargetUnitWhereUniqueInput
    create: XOR<SourceTargetUnitCreateWithoutTargetUnitInput, SourceTargetUnitUncheckedCreateWithoutTargetUnitInput>
  }

  export type SourceTargetUnitCreateManyTargetUnitInputEnvelope = {
    data: SourceTargetUnitCreateManyTargetUnitInput | SourceTargetUnitCreateManyTargetUnitInput[]
    skipDuplicates?: boolean
  }

  export type SourceTargetUnitUpsertWithWhereUniqueWithoutTargetUnitInput = {
    where: SourceTargetUnitWhereUniqueInput
    update: XOR<SourceTargetUnitUpdateWithoutTargetUnitInput, SourceTargetUnitUncheckedUpdateWithoutTargetUnitInput>
    create: XOR<SourceTargetUnitCreateWithoutTargetUnitInput, SourceTargetUnitUncheckedCreateWithoutTargetUnitInput>
  }

  export type SourceTargetUnitUpdateWithWhereUniqueWithoutTargetUnitInput = {
    where: SourceTargetUnitWhereUniqueInput
    data: XOR<SourceTargetUnitUpdateWithoutTargetUnitInput, SourceTargetUnitUncheckedUpdateWithoutTargetUnitInput>
  }

  export type SourceTargetUnitUpdateManyWithWhereWithoutTargetUnitInput = {
    where: SourceTargetUnitScalarWhereInput
    data: XOR<SourceTargetUnitUpdateManyMutationInput, SourceTargetUnitUncheckedUpdateManyWithoutTargetUnitInput>
  }

  export type SourceIngredientCreateWithoutMappingsInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceIngredientUncheckedCreateWithoutMappingsInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceIngredientCreateOrConnectWithoutMappingsInput = {
    where: SourceIngredientWhereUniqueInput
    create: XOR<SourceIngredientCreateWithoutMappingsInput, SourceIngredientUncheckedCreateWithoutMappingsInput>
  }

  export type TargetIngredientCreateWithoutMappingsInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetIngredientUncheckedCreateWithoutMappingsInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetIngredientCreateOrConnectWithoutMappingsInput = {
    where: TargetIngredientWhereUniqueInput
    create: XOR<TargetIngredientCreateWithoutMappingsInput, TargetIngredientUncheckedCreateWithoutMappingsInput>
  }

  export type SourceIngredientUpsertWithoutMappingsInput = {
    update: XOR<SourceIngredientUpdateWithoutMappingsInput, SourceIngredientUncheckedUpdateWithoutMappingsInput>
    create: XOR<SourceIngredientCreateWithoutMappingsInput, SourceIngredientUncheckedCreateWithoutMappingsInput>
    where?: SourceIngredientWhereInput
  }

  export type SourceIngredientUpdateToOneWithWhereWithoutMappingsInput = {
    where?: SourceIngredientWhereInput
    data: XOR<SourceIngredientUpdateWithoutMappingsInput, SourceIngredientUncheckedUpdateWithoutMappingsInput>
  }

  export type SourceIngredientUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceIngredientUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetIngredientUpsertWithoutMappingsInput = {
    update: XOR<TargetIngredientUpdateWithoutMappingsInput, TargetIngredientUncheckedUpdateWithoutMappingsInput>
    create: XOR<TargetIngredientCreateWithoutMappingsInput, TargetIngredientUncheckedCreateWithoutMappingsInput>
    where?: TargetIngredientWhereInput
  }

  export type TargetIngredientUpdateToOneWithWhereWithoutMappingsInput = {
    where?: TargetIngredientWhereInput
    data: XOR<TargetIngredientUpdateWithoutMappingsInput, TargetIngredientUncheckedUpdateWithoutMappingsInput>
  }

  export type TargetIngredientUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetIngredientUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUnitCreateWithoutMappingsInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUnitUncheckedCreateWithoutMappingsInput = {
    id?: string
    externalId: string
    label: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceUnitCreateOrConnectWithoutMappingsInput = {
    where: SourceUnitWhereUniqueInput
    create: XOR<SourceUnitCreateWithoutMappingsInput, SourceUnitUncheckedCreateWithoutMappingsInput>
  }

  export type TargetUnitCreateWithoutMappingsInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetUnitUncheckedCreateWithoutMappingsInput = {
    id?: string
    externalId: string
    label: string
    target: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetUnitCreateOrConnectWithoutMappingsInput = {
    where: TargetUnitWhereUniqueInput
    create: XOR<TargetUnitCreateWithoutMappingsInput, TargetUnitUncheckedCreateWithoutMappingsInput>
  }

  export type SourceUnitUpsertWithoutMappingsInput = {
    update: XOR<SourceUnitUpdateWithoutMappingsInput, SourceUnitUncheckedUpdateWithoutMappingsInput>
    create: XOR<SourceUnitCreateWithoutMappingsInput, SourceUnitUncheckedCreateWithoutMappingsInput>
    where?: SourceUnitWhereInput
  }

  export type SourceUnitUpdateToOneWithWhereWithoutMappingsInput = {
    where?: SourceUnitWhereInput
    data: XOR<SourceUnitUpdateWithoutMappingsInput, SourceUnitUncheckedUpdateWithoutMappingsInput>
  }

  export type SourceUnitUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceUnitUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetUnitUpsertWithoutMappingsInput = {
    update: XOR<TargetUnitUpdateWithoutMappingsInput, TargetUnitUncheckedUpdateWithoutMappingsInput>
    create: XOR<TargetUnitCreateWithoutMappingsInput, TargetUnitUncheckedCreateWithoutMappingsInput>
    where?: TargetUnitWhereInput
  }

  export type TargetUnitUpdateToOneWithWhereWithoutMappingsInput = {
    where?: TargetUnitWhereInput
    data: XOR<TargetUnitUpdateWithoutMappingsInput, TargetUnitUncheckedUpdateWithoutMappingsInput>
  }

  export type TargetUnitUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetUnitUncheckedUpdateWithoutMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetIngredientCreateManySourceIngredientInput = {
    id?: string
    targetId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetIngredientUpdateWithoutSourceIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetIngredient?: TargetIngredientUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type SourceTargetIngredientUncheckedUpdateWithoutSourceIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetIngredientUncheckedUpdateManyWithoutSourceIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetUnitCreateManySourceUnitInput = {
    id?: string
    targetId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetUnitUpdateWithoutSourceUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUnit?: TargetUnitUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type SourceTargetUnitUncheckedUpdateWithoutSourceUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetUnitUncheckedUpdateManyWithoutSourceUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetIngredientCreateManyTargetIngredientInput = {
    id?: string
    sourceId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetIngredientUpdateWithoutTargetIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceIngredient?: SourceIngredientUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type SourceTargetIngredientUncheckedUpdateWithoutTargetIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetIngredientUncheckedUpdateManyWithoutTargetIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetUnitCreateManyTargetUnitInput = {
    id?: string
    sourceId: string
    confidenceScore: Decimal | DecimalJsLike | number | string
    mappingMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SourceTargetUnitUpdateWithoutTargetUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUnit?: SourceUnitUpdateOneRequiredWithoutMappingsNestedInput
  }

  export type SourceTargetUnitUncheckedUpdateWithoutTargetUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourceTargetUnitUncheckedUpdateManyWithoutTargetUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceId?: StringFieldUpdateOperationsInput | string
    confidenceScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mappingMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}