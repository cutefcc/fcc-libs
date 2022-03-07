import { Draft } from 'immer';

declare type DraftFunction<S> = (draft: Draft<S>) => void;

declare type ImmerHooks<S> = [S, Updater<S>];

declare type Updater<S> = (update: S | DraftFunction<S>) => void;

export declare function useImmer<S = unknown>(initValue: S | (() => S)): ImmerHooks<S>;

export declare function useMountedState(): () => boolean;

export { }
