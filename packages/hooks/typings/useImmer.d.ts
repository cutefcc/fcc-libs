import { Draft } from "immer";
export declare type DraftFunction<S> = (draft: Draft<S>) => void;
export declare type Updater<S> = (update: S | DraftFunction<S>) => void;
export declare type ImmerHooks<S> = [S, Updater<S>];
export declare function useImmer<S = unknown>(initValue: S | (() => S)): ImmerHooks<S>;
//# sourceMappingURL=useImmer.d.ts.map