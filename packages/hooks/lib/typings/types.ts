import { Draft } from "immer";
export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (update: S | DraftFunction<S>) => void;
export type ImmerHooks<S> = [S, Updater<S>];