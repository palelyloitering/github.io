import{g as r,E as i,o as s,F as m}from"./index.94f5a4bb.js";function a(){let e=null;const o=r();function t(){e!==null&&(clearTimeout(e),e=null)}return i(t),s(t),{removeTimeout:t,registerTimeout(n,u){t(),m(o)===!1&&(e=setTimeout(()=>{e=null,n()},u))}}}export{a as u};