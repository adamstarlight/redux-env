import { Env } from './environment'

export type AsyncAction<R = any> = (env: Env<R>) => void

export type AsyncActions<T extends keyof any = string> = Record<T, AsyncAction>

export type AsyncActionThunks<A extends AsyncActions> = {
  [T in keyof A]: A[T] extends AsyncAction ? A[T] : void
}

export type AsyncActionGroup<_R> = Record<string, unknown>

type ExtractEnv<A> = A[keyof A] extends AsyncAction<infer R> ? R : never

export function createAsyncGroup<A extends AsyncActions>(
  actions: AsyncActionThunks<A>
): AsyncActionGroup<ExtractEnv<typeof actions>> {
  throw new Error('not implemented!')
}

// interface CartService {}

// type HasAuthService = Has<'auth', number>
// type HasProductService = Has<'product', CartService>
// type HasCartService = Has<'cart', CartService>

// const _group = createAsyncGroup({
//   any(_env: Env<HasCartService>) {},
//   increment(_env: Env<HasAuthService>) {},
//   decrement(_env: Env<HasProductService>) {},
// })
