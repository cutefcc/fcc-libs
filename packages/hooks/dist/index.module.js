import{useState as n,useCallback as r,useRef as t,useEffect as o}from"react";import u,{freeze as c}from"immer";function e(t){var o=n(c("function"==typeof t?t():t,!0)),e=o[1];return[o[0],r(function(n){e("function"==typeof n?u(n):c(n))},[])]}function f(){var n=t(!1),u=r(function(){return n.current},[]);return o(function(){return n.current=!0,function(){n.current=!1}},[]),u}export{e as useImmer,f as useMountedState};
//# sourceMappingURL=index.module.js.map
