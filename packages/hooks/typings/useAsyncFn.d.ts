import { FuctionReturnPromise } from "./miseTypes";
declare type AsyncState<T> = {
    loading: boolean;
    error?: undefined;
    value?: undefined;
} | {
    loading: true;
    error?: Error | undefined;
    value?: T;
} | {
    loading: false;
    error?: Error;
    value?: undefined;
} | {
    loading: false;
    error?: undefined;
    value?: T;
};
declare type StateFromFunctionReturnPromise<T extends FuctionReturnPromise> = AsyncState<ReturnType<T>>;
declare type AsyncFnReturn<T extends FuctionReturnPromise> = [
    StateFromFunctionReturnPromise<T>,
    T
];
export default function useAsycFn<T extends FuctionReturnPromise>(fn: T, initialState?: StateFromFunctionReturnPromise<T>): AsyncFnReturn<T>;
export {};
//# sourceMappingURL=useAsyncFn.d.ts.map