
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model SalesOrder
 * 
 */
export type SalesOrder = $Result.DefaultSelection<Prisma.$SalesOrderPayload>
/**
 * Model SalesOrderItem
 * 
 */
export type SalesOrderItem = $Result.DefaultSelection<Prisma.$SalesOrderItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesOrder`: Exposes CRUD operations for the **SalesOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOrders
    * const salesOrders = await prisma.salesOrder.findMany()
    * ```
    */
  get salesOrder(): Prisma.SalesOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesOrderItem`: Exposes CRUD operations for the **SalesOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOrderItems
    * const salesOrderItems = await prisma.salesOrderItem.findMany()
    * ```
    */
  get salesOrderItem(): Prisma.SalesOrderItemDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Product: 'Product',
    Customer: 'Customer',
    SalesOrder: 'SalesOrder',
    SalesOrderItem: 'SalesOrderItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "customer" | "salesOrder" | "salesOrderItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      SalesOrder: {
        payload: Prisma.$SalesOrderPayload<ExtArgs>
        fields: Prisma.SalesOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          findFirst: {
            args: Prisma.SalesOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          findMany: {
            args: Prisma.SalesOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          create: {
            args: Prisma.SalesOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          createMany: {
            args: Prisma.SalesOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          delete: {
            args: Prisma.SalesOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          update: {
            args: Prisma.SalesOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          deleteMany: {
            args: Prisma.SalesOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          upsert: {
            args: Prisma.SalesOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          aggregate: {
            args: Prisma.SalesOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesOrder>
          }
          groupBy: {
            args: Prisma.SalesOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOrderCountArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderCountAggregateOutputType> | number
          }
        }
      }
      SalesOrderItem: {
        payload: Prisma.$SalesOrderItemPayload<ExtArgs>
        fields: Prisma.SalesOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          findFirst: {
            args: Prisma.SalesOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          findMany: {
            args: Prisma.SalesOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>[]
          }
          create: {
            args: Prisma.SalesOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          createMany: {
            args: Prisma.SalesOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>[]
          }
          delete: {
            args: Prisma.SalesOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          update: {
            args: Prisma.SalesOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.SalesOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesOrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>[]
          }
          upsert: {
            args: Prisma.SalesOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          aggregate: {
            args: Prisma.SalesOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesOrderItem>
          }
          groupBy: {
            args: Prisma.SalesOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderItemCountAggregateOutputType> | number
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
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    customer?: CustomerOmit
    salesOrder?: SalesOrderOmit
    salesOrderItem?: SalesOrderItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    salesOrderItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesOrderItems?: boolean | ProductCountOutputTypeCountSalesOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSalesOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderItemWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    salesOrders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesOrders?: boolean | CustomerCountOutputTypeCountSalesOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSalesOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderWhereInput
  }


  /**
   * Count Type SalesOrderCountOutputType
   */

  export type SalesOrderCountOutputType = {
    items: number
  }

  export type SalesOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SalesOrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SalesOrderCountOutputType without action
   */
  export type SalesOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderCountOutputType
     */
    select?: SalesOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesOrderCountOutputType without action
   */
  export type SalesOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stockQty: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    stockQty: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    price: Decimal | null
    stockQty: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    sku: string | null
    name: string | null
    price: Decimal | null
    stockQty: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    sku: number
    name: number
    price: number
    stockQty: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    stockQty?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    stockQty?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    price?: true
    stockQty?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    price?: true
    stockQty?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    sku?: true
    name?: true
    price?: true
    stockQty?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    sku: string
    name: string
    price: Decimal
    stockQty: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    price?: boolean
    stockQty?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesOrderItems?: boolean | Product$salesOrderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    price?: boolean
    stockQty?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    name?: boolean
    price?: boolean
    stockQty?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    sku?: boolean
    name?: boolean
    price?: boolean
    stockQty?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "name" | "price" | "stockQty" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesOrderItems?: boolean | Product$salesOrderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      salesOrderItems: Prisma.$SalesOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sku: string
      name: string
      price: Prisma.Decimal
      stockQty: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salesOrderItems<T extends Product$salesOrderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$salesOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly stockQty: FieldRef<"Product", 'Int'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.salesOrderItems
   */
  export type Product$salesOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    where?: SalesOrderItemWhereInput
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    cursor?: SalesOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    phone: string | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    phone: string | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    code: number
    name: number
    phone: number
    email: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    phone?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    phone?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    phone?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    code: string
    name: string
    phone: string | null
    email: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesOrders?: boolean | Customer$salesOrdersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "phone" | "email" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesOrders?: boolean | Customer$salesOrdersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      salesOrders: Prisma.$SalesOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      phone: string | null
      email: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salesOrders<T extends Customer$salesOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$salesOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly code: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly isActive: FieldRef<"Customer", 'Boolean'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.salesOrders
   */
  export type Customer$salesOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    where?: SalesOrderWhereInput
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    cursor?: SalesOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model SalesOrder
   */

  export type AggregateSalesOrder = {
    _count: SalesOrderCountAggregateOutputType | null
    _avg: SalesOrderAvgAggregateOutputType | null
    _sum: SalesOrderSumAggregateOutputType | null
    _min: SalesOrderMinAggregateOutputType | null
    _max: SalesOrderMaxAggregateOutputType | null
  }

  export type SalesOrderAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    totalAmount: Decimal | null
  }

  export type SalesOrderSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    totalAmount: Decimal | null
  }

  export type SalesOrderMinAggregateOutputType = {
    id: number | null
    orderNo: string | null
    customerId: number | null
    status: string | null
    totalAmount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOrderMaxAggregateOutputType = {
    id: number | null
    orderNo: string | null
    customerId: number | null
    status: string | null
    totalAmount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOrderCountAggregateOutputType = {
    id: number
    orderNo: number
    customerId: number
    status: number
    totalAmount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesOrderAvgAggregateInputType = {
    id?: true
    customerId?: true
    totalAmount?: true
  }

  export type SalesOrderSumAggregateInputType = {
    id?: true
    customerId?: true
    totalAmount?: true
  }

  export type SalesOrderMinAggregateInputType = {
    id?: true
    orderNo?: true
    customerId?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOrderMaxAggregateInputType = {
    id?: true
    orderNo?: true
    customerId?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOrderCountAggregateInputType = {
    id?: true
    orderNo?: true
    customerId?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrder to aggregate.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOrders
    **/
    _count?: true | SalesOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOrderMaxAggregateInputType
  }

  export type GetSalesOrderAggregateType<T extends SalesOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOrder[P]>
      : GetScalarType<T[P], AggregateSalesOrder[P]>
  }




  export type SalesOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderWhereInput
    orderBy?: SalesOrderOrderByWithAggregationInput | SalesOrderOrderByWithAggregationInput[]
    by: SalesOrderScalarFieldEnum[] | SalesOrderScalarFieldEnum
    having?: SalesOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOrderCountAggregateInputType | true
    _avg?: SalesOrderAvgAggregateInputType
    _sum?: SalesOrderSumAggregateInputType
    _min?: SalesOrderMinAggregateInputType
    _max?: SalesOrderMaxAggregateInputType
  }

  export type SalesOrderGroupByOutputType = {
    id: number
    orderNo: string
    customerId: number
    status: string
    totalAmount: Decimal
    createdAt: Date
    updatedAt: Date
    _count: SalesOrderCountAggregateOutputType | null
    _avg: SalesOrderAvgAggregateOutputType | null
    _sum: SalesOrderSumAggregateOutputType | null
    _min: SalesOrderMinAggregateOutputType | null
    _max: SalesOrderMaxAggregateOutputType | null
  }

  type GetSalesOrderGroupByPayload<T extends SalesOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOrderGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOrderGroupByOutputType[P]>
        }
      >
    >


  export type SalesOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNo?: boolean
    customerId?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | SalesOrder$itemsArgs<ExtArgs>
    _count?: boolean | SalesOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNo?: boolean
    customerId?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNo?: boolean
    customerId?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectScalar = {
    id?: boolean
    orderNo?: boolean
    customerId?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNo" | "customerId" | "status" | "totalAmount" | "createdAt" | "updatedAt", ExtArgs["result"]["salesOrder"]>
  export type SalesOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | SalesOrder$itemsArgs<ExtArgs>
    _count?: boolean | SalesOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalesOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type SalesOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $SalesOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesOrder"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      items: Prisma.$SalesOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderNo: string
      customerId: number
      status: string
      totalAmount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesOrder"]>
    composites: {}
  }

  type SalesOrderGetPayload<S extends boolean | null | undefined | SalesOrderDefaultArgs> = $Result.GetResult<Prisma.$SalesOrderPayload, S>

  type SalesOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesOrderCountAggregateInputType | true
    }

  export interface SalesOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrder'], meta: { name: 'SalesOrder' } }
    /**
     * Find zero or one SalesOrder that matches the filter.
     * @param {SalesOrderFindUniqueArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesOrderFindUniqueArgs>(args: SelectSubset<T, SalesOrderFindUniqueArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesOrderFindUniqueOrThrowArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindFirstArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesOrderFindFirstArgs>(args?: SelectSubset<T, SalesOrderFindFirstArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindFirstOrThrowArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOrders
     * const salesOrders = await prisma.salesOrder.findMany()
     * 
     * // Get first 10 SalesOrders
     * const salesOrders = await prisma.salesOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesOrderFindManyArgs>(args?: SelectSubset<T, SalesOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesOrder.
     * @param {SalesOrderCreateArgs} args - Arguments to create a SalesOrder.
     * @example
     * // Create one SalesOrder
     * const SalesOrder = await prisma.salesOrder.create({
     *   data: {
     *     // ... data to create a SalesOrder
     *   }
     * })
     * 
     */
    create<T extends SalesOrderCreateArgs>(args: SelectSubset<T, SalesOrderCreateArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesOrders.
     * @param {SalesOrderCreateManyArgs} args - Arguments to create many SalesOrders.
     * @example
     * // Create many SalesOrders
     * const salesOrder = await prisma.salesOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesOrderCreateManyArgs>(args?: SelectSubset<T, SalesOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesOrders and returns the data saved in the database.
     * @param {SalesOrderCreateManyAndReturnArgs} args - Arguments to create many SalesOrders.
     * @example
     * // Create many SalesOrders
     * const salesOrder = await prisma.salesOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesOrders and only return the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesOrder.
     * @param {SalesOrderDeleteArgs} args - Arguments to delete one SalesOrder.
     * @example
     * // Delete one SalesOrder
     * const SalesOrder = await prisma.salesOrder.delete({
     *   where: {
     *     // ... filter to delete one SalesOrder
     *   }
     * })
     * 
     */
    delete<T extends SalesOrderDeleteArgs>(args: SelectSubset<T, SalesOrderDeleteArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesOrder.
     * @param {SalesOrderUpdateArgs} args - Arguments to update one SalesOrder.
     * @example
     * // Update one SalesOrder
     * const salesOrder = await prisma.salesOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesOrderUpdateArgs>(args: SelectSubset<T, SalesOrderUpdateArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesOrders.
     * @param {SalesOrderDeleteManyArgs} args - Arguments to filter SalesOrders to delete.
     * @example
     * // Delete a few SalesOrders
     * const { count } = await prisma.salesOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesOrderDeleteManyArgs>(args?: SelectSubset<T, SalesOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOrders
     * const salesOrder = await prisma.salesOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesOrderUpdateManyArgs>(args: SelectSubset<T, SalesOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrders and returns the data updated in the database.
     * @param {SalesOrderUpdateManyAndReturnArgs} args - Arguments to update many SalesOrders.
     * @example
     * // Update many SalesOrders
     * const salesOrder = await prisma.salesOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesOrders and only return the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalesOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesOrder.
     * @param {SalesOrderUpsertArgs} args - Arguments to update or create a SalesOrder.
     * @example
     * // Update or create a SalesOrder
     * const salesOrder = await prisma.salesOrder.upsert({
     *   create: {
     *     // ... data to create a SalesOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOrder we want to update
     *   }
     * })
     */
    upsert<T extends SalesOrderUpsertArgs>(args: SelectSubset<T, SalesOrderUpsertArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderCountArgs} args - Arguments to filter SalesOrders to count.
     * @example
     * // Count the number of SalesOrders
     * const count = await prisma.salesOrder.count({
     *   where: {
     *     // ... the filter for the SalesOrders we want to count
     *   }
     * })
    **/
    count<T extends SalesOrderCountArgs>(
      args?: Subset<T, SalesOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesOrderAggregateArgs>(args: Subset<T, SalesOrderAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderAggregateType<T>>

    /**
     * Group by SalesOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderGroupByArgs} args - Group by arguments.
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
      T extends SalesOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOrderGroupByArgs['orderBy'] }
        : { orderBy?: SalesOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesOrder model
   */
  readonly fields: SalesOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends SalesOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SalesOrder model
   */
  interface SalesOrderFieldRefs {
    readonly id: FieldRef<"SalesOrder", 'Int'>
    readonly orderNo: FieldRef<"SalesOrder", 'String'>
    readonly customerId: FieldRef<"SalesOrder", 'Int'>
    readonly status: FieldRef<"SalesOrder", 'String'>
    readonly totalAmount: FieldRef<"SalesOrder", 'Decimal'>
    readonly createdAt: FieldRef<"SalesOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesOrder findUnique
   */
  export type SalesOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder findUniqueOrThrow
   */
  export type SalesOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder findFirst
   */
  export type SalesOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder findFirstOrThrow
   */
  export type SalesOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder findMany
   */
  export type SalesOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrders to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder create
   */
  export type SalesOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesOrder.
     */
    data: XOR<SalesOrderCreateInput, SalesOrderUncheckedCreateInput>
  }

  /**
   * SalesOrder createMany
   */
  export type SalesOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOrders.
     */
    data: SalesOrderCreateManyInput | SalesOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOrder createManyAndReturn
   */
  export type SalesOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * The data used to create many SalesOrders.
     */
    data: SalesOrderCreateManyInput | SalesOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrder update
   */
  export type SalesOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesOrder.
     */
    data: XOR<SalesOrderUpdateInput, SalesOrderUncheckedUpdateInput>
    /**
     * Choose, which SalesOrder to update.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder updateMany
   */
  export type SalesOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOrders.
     */
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrders to update
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to update.
     */
    limit?: number
  }

  /**
   * SalesOrder updateManyAndReturn
   */
  export type SalesOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * The data used to update SalesOrders.
     */
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrders to update
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrder upsert
   */
  export type SalesOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesOrder to update in case it exists.
     */
    where: SalesOrderWhereUniqueInput
    /**
     * In case the SalesOrder found by the `where` argument doesn't exist, create a new SalesOrder with this data.
     */
    create: XOR<SalesOrderCreateInput, SalesOrderUncheckedCreateInput>
    /**
     * In case the SalesOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOrderUpdateInput, SalesOrderUncheckedUpdateInput>
  }

  /**
   * SalesOrder delete
   */
  export type SalesOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter which SalesOrder to delete.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder deleteMany
   */
  export type SalesOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrders to delete
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to delete.
     */
    limit?: number
  }

  /**
   * SalesOrder.items
   */
  export type SalesOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    where?: SalesOrderItemWhereInput
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    cursor?: SalesOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * SalesOrder without action
   */
  export type SalesOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
  }


  /**
   * Model SalesOrderItem
   */

  export type AggregateSalesOrderItem = {
    _count: SalesOrderItemCountAggregateOutputType | null
    _avg: SalesOrderItemAvgAggregateOutputType | null
    _sum: SalesOrderItemSumAggregateOutputType | null
    _min: SalesOrderItemMinAggregateOutputType | null
    _max: SalesOrderItemMaxAggregateOutputType | null
  }

  export type SalesOrderItemAvgAggregateOutputType = {
    id: number | null
    salesOrderId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type SalesOrderItemSumAggregateOutputType = {
    id: number | null
    salesOrderId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type SalesOrderItemMinAggregateOutputType = {
    id: number | null
    salesOrderId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOrderItemMaxAggregateOutputType = {
    id: number | null
    salesOrderId: number | null
    productId: number | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOrderItemCountAggregateOutputType = {
    id: number
    salesOrderId: number
    productId: number
    quantity: number
    unitPrice: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesOrderItemAvgAggregateInputType = {
    id?: true
    salesOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type SalesOrderItemSumAggregateInputType = {
    id?: true
    salesOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type SalesOrderItemMinAggregateInputType = {
    id?: true
    salesOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOrderItemMaxAggregateInputType = {
    id?: true
    salesOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOrderItemCountAggregateInputType = {
    id?: true
    salesOrderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrderItem to aggregate.
     */
    where?: SalesOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOrderItems
    **/
    _count?: true | SalesOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOrderItemMaxAggregateInputType
  }

  export type GetSalesOrderItemAggregateType<T extends SalesOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOrderItem[P]>
      : GetScalarType<T[P], AggregateSalesOrderItem[P]>
  }




  export type SalesOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderItemWhereInput
    orderBy?: SalesOrderItemOrderByWithAggregationInput | SalesOrderItemOrderByWithAggregationInput[]
    by: SalesOrderItemScalarFieldEnum[] | SalesOrderItemScalarFieldEnum
    having?: SalesOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOrderItemCountAggregateInputType | true
    _avg?: SalesOrderItemAvgAggregateInputType
    _sum?: SalesOrderItemSumAggregateInputType
    _min?: SalesOrderItemMinAggregateInputType
    _max?: SalesOrderItemMaxAggregateInputType
  }

  export type SalesOrderItemGroupByOutputType = {
    id: number
    salesOrderId: number
    productId: number
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    createdAt: Date
    updatedAt: Date
    _count: SalesOrderItemCountAggregateOutputType | null
    _avg: SalesOrderItemAvgAggregateOutputType | null
    _sum: SalesOrderItemSumAggregateOutputType | null
    _min: SalesOrderItemMinAggregateOutputType | null
    _max: SalesOrderItemMaxAggregateOutputType | null
  }

  type GetSalesOrderItemGroupByPayload<T extends SalesOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type SalesOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salesOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesOrder?: boolean | SalesOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderItem"]>

  export type SalesOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salesOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesOrder?: boolean | SalesOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderItem"]>

  export type SalesOrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salesOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesOrder?: boolean | SalesOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderItem"]>

  export type SalesOrderItemSelectScalar = {
    id?: boolean
    salesOrderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salesOrderId" | "productId" | "quantity" | "unitPrice" | "totalPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["salesOrderItem"]>
  export type SalesOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesOrder?: boolean | SalesOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SalesOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesOrder?: boolean | SalesOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SalesOrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesOrder?: boolean | SalesOrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SalesOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesOrderItem"
    objects: {
      salesOrder: Prisma.$SalesOrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      salesOrderId: number
      productId: number
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesOrderItem"]>
    composites: {}
  }

  type SalesOrderItemGetPayload<S extends boolean | null | undefined | SalesOrderItemDefaultArgs> = $Result.GetResult<Prisma.$SalesOrderItemPayload, S>

  type SalesOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesOrderItemCountAggregateInputType | true
    }

  export interface SalesOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrderItem'], meta: { name: 'SalesOrderItem' } }
    /**
     * Find zero or one SalesOrderItem that matches the filter.
     * @param {SalesOrderItemFindUniqueArgs} args - Arguments to find a SalesOrderItem
     * @example
     * // Get one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesOrderItemFindUniqueArgs>(args: SelectSubset<T, SalesOrderItemFindUniqueArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesOrderItemFindUniqueOrThrowArgs} args - Arguments to find a SalesOrderItem
     * @example
     * // Get one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemFindFirstArgs} args - Arguments to find a SalesOrderItem
     * @example
     * // Get one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesOrderItemFindFirstArgs>(args?: SelectSubset<T, SalesOrderItemFindFirstArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemFindFirstOrThrowArgs} args - Arguments to find a SalesOrderItem
     * @example
     * // Get one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItem.findMany()
     * 
     * // Get first 10 SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesOrderItemWithIdOnly = await prisma.salesOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesOrderItemFindManyArgs>(args?: SelectSubset<T, SalesOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesOrderItem.
     * @param {SalesOrderItemCreateArgs} args - Arguments to create a SalesOrderItem.
     * @example
     * // Create one SalesOrderItem
     * const SalesOrderItem = await prisma.salesOrderItem.create({
     *   data: {
     *     // ... data to create a SalesOrderItem
     *   }
     * })
     * 
     */
    create<T extends SalesOrderItemCreateArgs>(args: SelectSubset<T, SalesOrderItemCreateArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesOrderItems.
     * @param {SalesOrderItemCreateManyArgs} args - Arguments to create many SalesOrderItems.
     * @example
     * // Create many SalesOrderItems
     * const salesOrderItem = await prisma.salesOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesOrderItemCreateManyArgs>(args?: SelectSubset<T, SalesOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesOrderItems and returns the data saved in the database.
     * @param {SalesOrderItemCreateManyAndReturnArgs} args - Arguments to create many SalesOrderItems.
     * @example
     * // Create many SalesOrderItems
     * const salesOrderItem = await prisma.salesOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesOrderItems and only return the `id`
     * const salesOrderItemWithIdOnly = await prisma.salesOrderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesOrderItem.
     * @param {SalesOrderItemDeleteArgs} args - Arguments to delete one SalesOrderItem.
     * @example
     * // Delete one SalesOrderItem
     * const SalesOrderItem = await prisma.salesOrderItem.delete({
     *   where: {
     *     // ... filter to delete one SalesOrderItem
     *   }
     * })
     * 
     */
    delete<T extends SalesOrderItemDeleteArgs>(args: SelectSubset<T, SalesOrderItemDeleteArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesOrderItem.
     * @param {SalesOrderItemUpdateArgs} args - Arguments to update one SalesOrderItem.
     * @example
     * // Update one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesOrderItemUpdateArgs>(args: SelectSubset<T, SalesOrderItemUpdateArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesOrderItems.
     * @param {SalesOrderItemDeleteManyArgs} args - Arguments to filter SalesOrderItems to delete.
     * @example
     * // Delete a few SalesOrderItems
     * const { count } = await prisma.salesOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesOrderItemDeleteManyArgs>(args?: SelectSubset<T, SalesOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOrderItems
     * const salesOrderItem = await prisma.salesOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesOrderItemUpdateManyArgs>(args: SelectSubset<T, SalesOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrderItems and returns the data updated in the database.
     * @param {SalesOrderItemUpdateManyAndReturnArgs} args - Arguments to update many SalesOrderItems.
     * @example
     * // Update many SalesOrderItems
     * const salesOrderItem = await prisma.salesOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesOrderItems and only return the `id`
     * const salesOrderItemWithIdOnly = await prisma.salesOrderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalesOrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesOrderItem.
     * @param {SalesOrderItemUpsertArgs} args - Arguments to update or create a SalesOrderItem.
     * @example
     * // Update or create a SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.upsert({
     *   create: {
     *     // ... data to create a SalesOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends SalesOrderItemUpsertArgs>(args: SelectSubset<T, SalesOrderItemUpsertArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemCountArgs} args - Arguments to filter SalesOrderItems to count.
     * @example
     * // Count the number of SalesOrderItems
     * const count = await prisma.salesOrderItem.count({
     *   where: {
     *     // ... the filter for the SalesOrderItems we want to count
     *   }
     * })
    **/
    count<T extends SalesOrderItemCountArgs>(
      args?: Subset<T, SalesOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesOrderItemAggregateArgs>(args: Subset<T, SalesOrderItemAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderItemAggregateType<T>>

    /**
     * Group by SalesOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemGroupByArgs} args - Group by arguments.
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
      T extends SalesOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: SalesOrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesOrderItem model
   */
  readonly fields: SalesOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salesOrder<T extends SalesOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrderDefaultArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SalesOrderItem model
   */
  interface SalesOrderItemFieldRefs {
    readonly id: FieldRef<"SalesOrderItem", 'Int'>
    readonly salesOrderId: FieldRef<"SalesOrderItem", 'Int'>
    readonly productId: FieldRef<"SalesOrderItem", 'Int'>
    readonly quantity: FieldRef<"SalesOrderItem", 'Int'>
    readonly unitPrice: FieldRef<"SalesOrderItem", 'Decimal'>
    readonly totalPrice: FieldRef<"SalesOrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"SalesOrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesOrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesOrderItem findUnique
   */
  export type SalesOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItem to fetch.
     */
    where: SalesOrderItemWhereUniqueInput
  }

  /**
   * SalesOrderItem findUniqueOrThrow
   */
  export type SalesOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItem to fetch.
     */
    where: SalesOrderItemWhereUniqueInput
  }

  /**
   * SalesOrderItem findFirst
   */
  export type SalesOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItem to fetch.
     */
    where?: SalesOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrderItems.
     */
    cursor?: SalesOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderItems.
     */
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * SalesOrderItem findFirstOrThrow
   */
  export type SalesOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItem to fetch.
     */
    where?: SalesOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrderItems.
     */
    cursor?: SalesOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderItems.
     */
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * SalesOrderItem findMany
   */
  export type SalesOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItems to fetch.
     */
    where?: SalesOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOrderItems.
     */
    cursor?: SalesOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderItems.
     */
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * SalesOrderItem create
   */
  export type SalesOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesOrderItem.
     */
    data: XOR<SalesOrderItemCreateInput, SalesOrderItemUncheckedCreateInput>
  }

  /**
   * SalesOrderItem createMany
   */
  export type SalesOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOrderItems.
     */
    data: SalesOrderItemCreateManyInput | SalesOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOrderItem createManyAndReturn
   */
  export type SalesOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many SalesOrderItems.
     */
    data: SalesOrderItemCreateManyInput | SalesOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrderItem update
   */
  export type SalesOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesOrderItem.
     */
    data: XOR<SalesOrderItemUpdateInput, SalesOrderItemUncheckedUpdateInput>
    /**
     * Choose, which SalesOrderItem to update.
     */
    where: SalesOrderItemWhereUniqueInput
  }

  /**
   * SalesOrderItem updateMany
   */
  export type SalesOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOrderItems.
     */
    data: XOR<SalesOrderItemUpdateManyMutationInput, SalesOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrderItems to update
     */
    where?: SalesOrderItemWhereInput
    /**
     * Limit how many SalesOrderItems to update.
     */
    limit?: number
  }

  /**
   * SalesOrderItem updateManyAndReturn
   */
  export type SalesOrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * The data used to update SalesOrderItems.
     */
    data: XOR<SalesOrderItemUpdateManyMutationInput, SalesOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrderItems to update
     */
    where?: SalesOrderItemWhereInput
    /**
     * Limit how many SalesOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrderItem upsert
   */
  export type SalesOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesOrderItem to update in case it exists.
     */
    where: SalesOrderItemWhereUniqueInput
    /**
     * In case the SalesOrderItem found by the `where` argument doesn't exist, create a new SalesOrderItem with this data.
     */
    create: XOR<SalesOrderItemCreateInput, SalesOrderItemUncheckedCreateInput>
    /**
     * In case the SalesOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOrderItemUpdateInput, SalesOrderItemUncheckedUpdateInput>
  }

  /**
   * SalesOrderItem delete
   */
  export type SalesOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter which SalesOrderItem to delete.
     */
    where: SalesOrderItemWhereUniqueInput
  }

  /**
   * SalesOrderItem deleteMany
   */
  export type SalesOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrderItems to delete
     */
    where?: SalesOrderItemWhereInput
    /**
     * Limit how many SalesOrderItems to delete.
     */
    limit?: number
  }

  /**
   * SalesOrderItem without action
   */
  export type SalesOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    name: 'name',
    price: 'price',
    stockQty: 'stockQty',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    phone: 'phone',
    email: 'email',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SalesOrderScalarFieldEnum: {
    id: 'id',
    orderNo: 'orderNo',
    customerId: 'customerId',
    status: 'status',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesOrderScalarFieldEnum = (typeof SalesOrderScalarFieldEnum)[keyof typeof SalesOrderScalarFieldEnum]


  export const SalesOrderItemScalarFieldEnum: {
    id: 'id',
    salesOrderId: 'salesOrderId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesOrderItemScalarFieldEnum = (typeof SalesOrderItemScalarFieldEnum)[keyof typeof SalesOrderItemScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    sku?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stockQty?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    salesOrderItems?: SalesOrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stockQty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesOrderItems?: SalesOrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stockQty?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    salesOrderItems?: SalesOrderItemListRelationFilter
  }, "id" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stockQty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    sku?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    stockQty?: IntWithAggregatesFilter<"Product"> | number
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    code?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    isActive?: BoolFilter<"Customer"> | boolean
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    salesOrders?: SalesOrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesOrders?: SalesOrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    isActive?: BoolFilter<"Customer"> | boolean
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    salesOrders?: SalesOrderListRelationFilter
  }, "id" | "code">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    code?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    isActive?: BoolWithAggregatesFilter<"Customer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type SalesOrderWhereInput = {
    AND?: SalesOrderWhereInput | SalesOrderWhereInput[]
    OR?: SalesOrderWhereInput[]
    NOT?: SalesOrderWhereInput | SalesOrderWhereInput[]
    id?: IntFilter<"SalesOrder"> | number
    orderNo?: StringFilter<"SalesOrder"> | string
    customerId?: IntFilter<"SalesOrder"> | number
    status?: StringFilter<"SalesOrder"> | string
    totalAmount?: DecimalFilter<"SalesOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrder"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    items?: SalesOrderItemListRelationFilter
  }

  export type SalesOrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNo?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    items?: SalesOrderItemOrderByRelationAggregateInput
  }

  export type SalesOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderNo?: string
    AND?: SalesOrderWhereInput | SalesOrderWhereInput[]
    OR?: SalesOrderWhereInput[]
    NOT?: SalesOrderWhereInput | SalesOrderWhereInput[]
    customerId?: IntFilter<"SalesOrder"> | number
    status?: StringFilter<"SalesOrder"> | string
    totalAmount?: DecimalFilter<"SalesOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrder"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    items?: SalesOrderItemListRelationFilter
  }, "id" | "orderNo">

  export type SalesOrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNo?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesOrderCountOrderByAggregateInput
    _avg?: SalesOrderAvgOrderByAggregateInput
    _max?: SalesOrderMaxOrderByAggregateInput
    _min?: SalesOrderMinOrderByAggregateInput
    _sum?: SalesOrderSumOrderByAggregateInput
  }

  export type SalesOrderScalarWhereWithAggregatesInput = {
    AND?: SalesOrderScalarWhereWithAggregatesInput | SalesOrderScalarWhereWithAggregatesInput[]
    OR?: SalesOrderScalarWhereWithAggregatesInput[]
    NOT?: SalesOrderScalarWhereWithAggregatesInput | SalesOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalesOrder"> | number
    orderNo?: StringWithAggregatesFilter<"SalesOrder"> | string
    customerId?: IntWithAggregatesFilter<"SalesOrder"> | number
    status?: StringWithAggregatesFilter<"SalesOrder"> | string
    totalAmount?: DecimalWithAggregatesFilter<"SalesOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string
  }

  export type SalesOrderItemWhereInput = {
    AND?: SalesOrderItemWhereInput | SalesOrderItemWhereInput[]
    OR?: SalesOrderItemWhereInput[]
    NOT?: SalesOrderItemWhereInput | SalesOrderItemWhereInput[]
    id?: IntFilter<"SalesOrderItem"> | number
    salesOrderId?: IntFilter<"SalesOrderItem"> | number
    productId?: IntFilter<"SalesOrderItem"> | number
    quantity?: IntFilter<"SalesOrderItem"> | number
    unitPrice?: DecimalFilter<"SalesOrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"SalesOrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrderItem"> | Date | string
    salesOrder?: XOR<SalesOrderScalarRelationFilter, SalesOrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SalesOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    salesOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesOrder?: SalesOrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type SalesOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalesOrderItemWhereInput | SalesOrderItemWhereInput[]
    OR?: SalesOrderItemWhereInput[]
    NOT?: SalesOrderItemWhereInput | SalesOrderItemWhereInput[]
    salesOrderId?: IntFilter<"SalesOrderItem"> | number
    productId?: IntFilter<"SalesOrderItem"> | number
    quantity?: IntFilter<"SalesOrderItem"> | number
    unitPrice?: DecimalFilter<"SalesOrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"SalesOrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrderItem"> | Date | string
    salesOrder?: XOR<SalesOrderScalarRelationFilter, SalesOrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type SalesOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    salesOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesOrderItemCountOrderByAggregateInput
    _avg?: SalesOrderItemAvgOrderByAggregateInput
    _max?: SalesOrderItemMaxOrderByAggregateInput
    _min?: SalesOrderItemMinOrderByAggregateInput
    _sum?: SalesOrderItemSumOrderByAggregateInput
  }

  export type SalesOrderItemScalarWhereWithAggregatesInput = {
    AND?: SalesOrderItemScalarWhereWithAggregatesInput | SalesOrderItemScalarWhereWithAggregatesInput[]
    OR?: SalesOrderItemScalarWhereWithAggregatesInput[]
    NOT?: SalesOrderItemScalarWhereWithAggregatesInput | SalesOrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalesOrderItem"> | number
    salesOrderId?: IntWithAggregatesFilter<"SalesOrderItem"> | number
    productId?: IntWithAggregatesFilter<"SalesOrderItem"> | number
    quantity?: IntWithAggregatesFilter<"SalesOrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"SalesOrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"SalesOrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesOrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesOrderItem"> | Date | string
  }

  export type ProductCreateInput = {
    sku: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    stockQty?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    salesOrderItems?: SalesOrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    sku: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    stockQty?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    salesOrderItems?: SalesOrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQty?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesOrderItems?: SalesOrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQty?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesOrderItems?: SalesOrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    sku: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    stockQty?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQty?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQty?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    code: string
    name: string
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    salesOrders?: SalesOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    salesOrders?: SalesOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesOrders?: SalesOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesOrders?: SalesOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    code: string
    name: string
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderCreateInput = {
    orderNo: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSalesOrdersInput
    items?: SalesOrderItemCreateNestedManyWithoutSalesOrderInput
  }

  export type SalesOrderUncheckedCreateInput = {
    id?: number
    orderNo: string
    customerId: number
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput
  }

  export type SalesOrderUpdateInput = {
    orderNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput
    items?: SalesOrderItemUpdateManyWithoutSalesOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNo?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput
  }

  export type SalesOrderCreateManyInput = {
    id?: number
    orderNo: string
    customerId: number
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderUpdateManyMutationInput = {
    orderNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNo?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemCreateInput = {
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    salesOrder: SalesOrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutSalesOrderItemsInput
  }

  export type SalesOrderItemUncheckedCreateInput = {
    id?: number
    salesOrderId: number
    productId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesOrder?: SalesOrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutSalesOrderItemsNestedInput
  }

  export type SalesOrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    salesOrderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemCreateManyInput = {
    id?: number
    salesOrderId: number
    productId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    salesOrderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SalesOrderItemListRelationFilter = {
    every?: SalesOrderItemWhereInput
    some?: SalesOrderItemWhereInput
    none?: SalesOrderItemWhereInput
  }

  export type SalesOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stockQty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stockQty?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stockQty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stockQty?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stockQty?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SalesOrderListRelationFilter = {
    every?: SalesOrderWhereInput
    some?: SalesOrderWhereInput
    none?: SalesOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SalesOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SalesOrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesOrderScalarRelationFilter = {
    is?: SalesOrderWhereInput
    isNot?: SalesOrderWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SalesOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    salesOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    salesOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type SalesOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    salesOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    salesOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    salesOrderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type SalesOrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<SalesOrderItemCreateWithoutProductInput, SalesOrderItemUncheckedCreateWithoutProductInput> | SalesOrderItemCreateWithoutProductInput[] | SalesOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutProductInput | SalesOrderItemCreateOrConnectWithoutProductInput[]
    createMany?: SalesOrderItemCreateManyProductInputEnvelope
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
  }

  export type SalesOrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SalesOrderItemCreateWithoutProductInput, SalesOrderItemUncheckedCreateWithoutProductInput> | SalesOrderItemCreateWithoutProductInput[] | SalesOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutProductInput | SalesOrderItemCreateOrConnectWithoutProductInput[]
    createMany?: SalesOrderItemCreateManyProductInputEnvelope
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SalesOrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<SalesOrderItemCreateWithoutProductInput, SalesOrderItemUncheckedCreateWithoutProductInput> | SalesOrderItemCreateWithoutProductInput[] | SalesOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutProductInput | SalesOrderItemCreateOrConnectWithoutProductInput[]
    upsert?: SalesOrderItemUpsertWithWhereUniqueWithoutProductInput | SalesOrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SalesOrderItemCreateManyProductInputEnvelope
    set?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    disconnect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    delete?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    update?: SalesOrderItemUpdateWithWhereUniqueWithoutProductInput | SalesOrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SalesOrderItemUpdateManyWithWhereWithoutProductInput | SalesOrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
  }

  export type SalesOrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SalesOrderItemCreateWithoutProductInput, SalesOrderItemUncheckedCreateWithoutProductInput> | SalesOrderItemCreateWithoutProductInput[] | SalesOrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutProductInput | SalesOrderItemCreateOrConnectWithoutProductInput[]
    upsert?: SalesOrderItemUpsertWithWhereUniqueWithoutProductInput | SalesOrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SalesOrderItemCreateManyProductInputEnvelope
    set?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    disconnect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    delete?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    update?: SalesOrderItemUpdateWithWhereUniqueWithoutProductInput | SalesOrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SalesOrderItemUpdateManyWithWhereWithoutProductInput | SalesOrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
  }

  export type SalesOrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput> | SalesOrderCreateWithoutCustomerInput[] | SalesOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutCustomerInput | SalesOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: SalesOrderCreateManyCustomerInputEnvelope
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
  }

  export type SalesOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput> | SalesOrderCreateWithoutCustomerInput[] | SalesOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutCustomerInput | SalesOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: SalesOrderCreateManyCustomerInputEnvelope
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SalesOrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput> | SalesOrderCreateWithoutCustomerInput[] | SalesOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutCustomerInput | SalesOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: SalesOrderUpsertWithWhereUniqueWithoutCustomerInput | SalesOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SalesOrderCreateManyCustomerInputEnvelope
    set?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    disconnect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    delete?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    update?: SalesOrderUpdateWithWhereUniqueWithoutCustomerInput | SalesOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SalesOrderUpdateManyWithWhereWithoutCustomerInput | SalesOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
  }

  export type SalesOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput> | SalesOrderCreateWithoutCustomerInput[] | SalesOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutCustomerInput | SalesOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: SalesOrderUpsertWithWhereUniqueWithoutCustomerInput | SalesOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SalesOrderCreateManyCustomerInputEnvelope
    set?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    disconnect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    delete?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    update?: SalesOrderUpdateWithWhereUniqueWithoutCustomerInput | SalesOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SalesOrderUpdateManyWithWhereWithoutCustomerInput | SalesOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutSalesOrdersInput = {
    create?: XOR<CustomerCreateWithoutSalesOrdersInput, CustomerUncheckedCreateWithoutSalesOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type SalesOrderItemCreateNestedManyWithoutSalesOrderInput = {
    create?: XOR<SalesOrderItemCreateWithoutSalesOrderInput, SalesOrderItemUncheckedCreateWithoutSalesOrderInput> | SalesOrderItemCreateWithoutSalesOrderInput[] | SalesOrderItemUncheckedCreateWithoutSalesOrderInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutSalesOrderInput | SalesOrderItemCreateOrConnectWithoutSalesOrderInput[]
    createMany?: SalesOrderItemCreateManySalesOrderInputEnvelope
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
  }

  export type SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput = {
    create?: XOR<SalesOrderItemCreateWithoutSalesOrderInput, SalesOrderItemUncheckedCreateWithoutSalesOrderInput> | SalesOrderItemCreateWithoutSalesOrderInput[] | SalesOrderItemUncheckedCreateWithoutSalesOrderInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutSalesOrderInput | SalesOrderItemCreateOrConnectWithoutSalesOrderInput[]
    createMany?: SalesOrderItemCreateManySalesOrderInputEnvelope
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutSalesOrdersInput, CustomerUncheckedCreateWithoutSalesOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesOrdersInput
    upsert?: CustomerUpsertWithoutSalesOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSalesOrdersInput, CustomerUpdateWithoutSalesOrdersInput>, CustomerUncheckedUpdateWithoutSalesOrdersInput>
  }

  export type SalesOrderItemUpdateManyWithoutSalesOrderNestedInput = {
    create?: XOR<SalesOrderItemCreateWithoutSalesOrderInput, SalesOrderItemUncheckedCreateWithoutSalesOrderInput> | SalesOrderItemCreateWithoutSalesOrderInput[] | SalesOrderItemUncheckedCreateWithoutSalesOrderInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutSalesOrderInput | SalesOrderItemCreateOrConnectWithoutSalesOrderInput[]
    upsert?: SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput | SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput[]
    createMany?: SalesOrderItemCreateManySalesOrderInputEnvelope
    set?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    disconnect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    delete?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    update?: SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput | SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput[]
    updateMany?: SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput | SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput[]
    deleteMany?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
  }

  export type SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput = {
    create?: XOR<SalesOrderItemCreateWithoutSalesOrderInput, SalesOrderItemUncheckedCreateWithoutSalesOrderInput> | SalesOrderItemCreateWithoutSalesOrderInput[] | SalesOrderItemUncheckedCreateWithoutSalesOrderInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutSalesOrderInput | SalesOrderItemCreateOrConnectWithoutSalesOrderInput[]
    upsert?: SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput | SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput[]
    createMany?: SalesOrderItemCreateManySalesOrderInputEnvelope
    set?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    disconnect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    delete?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    update?: SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput | SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput[]
    updateMany?: SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput | SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput[]
    deleteMany?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
  }

  export type SalesOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<SalesOrderCreateWithoutItemsInput, SalesOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutItemsInput
    connect?: SalesOrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSalesOrderItemsInput = {
    create?: XOR<ProductCreateWithoutSalesOrderItemsInput, ProductUncheckedCreateWithoutSalesOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSalesOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type SalesOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SalesOrderCreateWithoutItemsInput, SalesOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutItemsInput
    upsert?: SalesOrderUpsertWithoutItemsInput
    connect?: SalesOrderWhereUniqueInput
    update?: XOR<XOR<SalesOrderUpdateToOneWithWhereWithoutItemsInput, SalesOrderUpdateWithoutItemsInput>, SalesOrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutSalesOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutSalesOrderItemsInput, ProductUncheckedCreateWithoutSalesOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSalesOrderItemsInput
    upsert?: ProductUpsertWithoutSalesOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSalesOrderItemsInput, ProductUpdateWithoutSalesOrderItemsInput>, ProductUncheckedUpdateWithoutSalesOrderItemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SalesOrderItemCreateWithoutProductInput = {
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    salesOrder: SalesOrderCreateNestedOneWithoutItemsInput
  }

  export type SalesOrderItemUncheckedCreateWithoutProductInput = {
    id?: number
    salesOrderId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderItemCreateOrConnectWithoutProductInput = {
    where: SalesOrderItemWhereUniqueInput
    create: XOR<SalesOrderItemCreateWithoutProductInput, SalesOrderItemUncheckedCreateWithoutProductInput>
  }

  export type SalesOrderItemCreateManyProductInputEnvelope = {
    data: SalesOrderItemCreateManyProductInput | SalesOrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SalesOrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: SalesOrderItemWhereUniqueInput
    update: XOR<SalesOrderItemUpdateWithoutProductInput, SalesOrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<SalesOrderItemCreateWithoutProductInput, SalesOrderItemUncheckedCreateWithoutProductInput>
  }

  export type SalesOrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: SalesOrderItemWhereUniqueInput
    data: XOR<SalesOrderItemUpdateWithoutProductInput, SalesOrderItemUncheckedUpdateWithoutProductInput>
  }

  export type SalesOrderItemUpdateManyWithWhereWithoutProductInput = {
    where: SalesOrderItemScalarWhereInput
    data: XOR<SalesOrderItemUpdateManyMutationInput, SalesOrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type SalesOrderItemScalarWhereInput = {
    AND?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
    OR?: SalesOrderItemScalarWhereInput[]
    NOT?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
    id?: IntFilter<"SalesOrderItem"> | number
    salesOrderId?: IntFilter<"SalesOrderItem"> | number
    productId?: IntFilter<"SalesOrderItem"> | number
    quantity?: IntFilter<"SalesOrderItem"> | number
    unitPrice?: DecimalFilter<"SalesOrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"SalesOrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrderItem"> | Date | string
  }

  export type SalesOrderCreateWithoutCustomerInput = {
    orderNo: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SalesOrderItemCreateNestedManyWithoutSalesOrderInput
  }

  export type SalesOrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    orderNo: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SalesOrderItemUncheckedCreateNestedManyWithoutSalesOrderInput
  }

  export type SalesOrderCreateOrConnectWithoutCustomerInput = {
    where: SalesOrderWhereUniqueInput
    create: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput>
  }

  export type SalesOrderCreateManyCustomerInputEnvelope = {
    data: SalesOrderCreateManyCustomerInput | SalesOrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SalesOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SalesOrderWhereUniqueInput
    update: XOR<SalesOrderUpdateWithoutCustomerInput, SalesOrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput>
  }

  export type SalesOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SalesOrderWhereUniqueInput
    data: XOR<SalesOrderUpdateWithoutCustomerInput, SalesOrderUncheckedUpdateWithoutCustomerInput>
  }

  export type SalesOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: SalesOrderScalarWhereInput
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SalesOrderScalarWhereInput = {
    AND?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
    OR?: SalesOrderScalarWhereInput[]
    NOT?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
    id?: IntFilter<"SalesOrder"> | number
    orderNo?: StringFilter<"SalesOrder"> | string
    customerId?: IntFilter<"SalesOrder"> | number
    status?: StringFilter<"SalesOrder"> | string
    totalAmount?: DecimalFilter<"SalesOrder"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrder"> | Date | string
  }

  export type CustomerCreateWithoutSalesOrdersInput = {
    code: string
    name: string
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutSalesOrdersInput = {
    id?: number
    code: string
    name: string
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutSalesOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSalesOrdersInput, CustomerUncheckedCreateWithoutSalesOrdersInput>
  }

  export type SalesOrderItemCreateWithoutSalesOrderInput = {
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutSalesOrderItemsInput
  }

  export type SalesOrderItemUncheckedCreateWithoutSalesOrderInput = {
    id?: number
    productId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderItemCreateOrConnectWithoutSalesOrderInput = {
    where: SalesOrderItemWhereUniqueInput
    create: XOR<SalesOrderItemCreateWithoutSalesOrderInput, SalesOrderItemUncheckedCreateWithoutSalesOrderInput>
  }

  export type SalesOrderItemCreateManySalesOrderInputEnvelope = {
    data: SalesOrderItemCreateManySalesOrderInput | SalesOrderItemCreateManySalesOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutSalesOrdersInput = {
    update: XOR<CustomerUpdateWithoutSalesOrdersInput, CustomerUncheckedUpdateWithoutSalesOrdersInput>
    create: XOR<CustomerCreateWithoutSalesOrdersInput, CustomerUncheckedCreateWithoutSalesOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSalesOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSalesOrdersInput, CustomerUncheckedUpdateWithoutSalesOrdersInput>
  }

  export type CustomerUpdateWithoutSalesOrdersInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutSalesOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemUpsertWithWhereUniqueWithoutSalesOrderInput = {
    where: SalesOrderItemWhereUniqueInput
    update: XOR<SalesOrderItemUpdateWithoutSalesOrderInput, SalesOrderItemUncheckedUpdateWithoutSalesOrderInput>
    create: XOR<SalesOrderItemCreateWithoutSalesOrderInput, SalesOrderItemUncheckedCreateWithoutSalesOrderInput>
  }

  export type SalesOrderItemUpdateWithWhereUniqueWithoutSalesOrderInput = {
    where: SalesOrderItemWhereUniqueInput
    data: XOR<SalesOrderItemUpdateWithoutSalesOrderInput, SalesOrderItemUncheckedUpdateWithoutSalesOrderInput>
  }

  export type SalesOrderItemUpdateManyWithWhereWithoutSalesOrderInput = {
    where: SalesOrderItemScalarWhereInput
    data: XOR<SalesOrderItemUpdateManyMutationInput, SalesOrderItemUncheckedUpdateManyWithoutSalesOrderInput>
  }

  export type SalesOrderCreateWithoutItemsInput = {
    orderNo: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSalesOrdersInput
  }

  export type SalesOrderUncheckedCreateWithoutItemsInput = {
    id?: number
    orderNo: string
    customerId: number
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderCreateOrConnectWithoutItemsInput = {
    where: SalesOrderWhereUniqueInput
    create: XOR<SalesOrderCreateWithoutItemsInput, SalesOrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutSalesOrderItemsInput = {
    sku: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    stockQty?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutSalesOrderItemsInput = {
    id?: number
    sku: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    stockQty?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutSalesOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSalesOrderItemsInput, ProductUncheckedCreateWithoutSalesOrderItemsInput>
  }

  export type SalesOrderUpsertWithoutItemsInput = {
    update: XOR<SalesOrderUpdateWithoutItemsInput, SalesOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<SalesOrderCreateWithoutItemsInput, SalesOrderUncheckedCreateWithoutItemsInput>
    where?: SalesOrderWhereInput
  }

  export type SalesOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: SalesOrderWhereInput
    data: XOR<SalesOrderUpdateWithoutItemsInput, SalesOrderUncheckedUpdateWithoutItemsInput>
  }

  export type SalesOrderUpdateWithoutItemsInput = {
    orderNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSalesOrdersNestedInput
  }

  export type SalesOrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNo?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutSalesOrderItemsInput = {
    update: XOR<ProductUpdateWithoutSalesOrderItemsInput, ProductUncheckedUpdateWithoutSalesOrderItemsInput>
    create: XOR<ProductCreateWithoutSalesOrderItemsInput, ProductUncheckedCreateWithoutSalesOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSalesOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSalesOrderItemsInput, ProductUncheckedUpdateWithoutSalesOrderItemsInput>
  }

  export type ProductUpdateWithoutSalesOrderItemsInput = {
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQty?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutSalesOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQty?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemCreateManyProductInput = {
    id?: number
    salesOrderId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesOrder?: SalesOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SalesOrderItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    salesOrderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    salesOrderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderCreateManyCustomerInput = {
    id?: number
    orderNo: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderUpdateWithoutCustomerInput = {
    orderNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SalesOrderItemUpdateManyWithoutSalesOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SalesOrderItemUncheckedUpdateManyWithoutSalesOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemCreateManySalesOrderInput = {
    id?: number
    productId: number
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderItemUpdateWithoutSalesOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutSalesOrderItemsNestedInput
  }

  export type SalesOrderItemUncheckedUpdateWithoutSalesOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemUncheckedUpdateManyWithoutSalesOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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