import { useImmer } from './useImmer';
export function useAsycFn(fn, deps = [], initialState = {loading: false}) {
    console.log('ddd')
    // const [state, setState] = useImmer(initialState);
    // const hooksDeps = [fn, isMounted, state.loading];
    // const callback = () => {
    //     fn()
    // }
    // return [state, callback];

}