import{g as l,E as c,o as r,n as d,F as a,G as u,H as s}from"./index.94f5a4bb.js";function m(){let t;const o=l();function e(){t=void 0}return c(e),r(e),{removeTick:e,registerTick(n){t=n,d(()=>{t===n&&(a(o)===!1&&t(),t=void 0)})}}}const p=[Element,String],f=[null,document,document.body,document.scrollingElement,document.documentElement];function g(t,o){let e=u(o);if(e===void 0){if(t==null)return window;e=t.closest(".scroll,.scroll-y,.overflow-auto")}return f.includes(e)?window:e}function h(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function v(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let i;function y(){if(i!==void 0)return i;const t=document.createElement("p"),o=document.createElement("div");s(t,{width:"100%",height:"200px"}),s(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(t),document.body.appendChild(o);const e=t.offsetWidth;o.style.overflow="scroll";let n=t.offsetWidth;return e===n&&(n=o.clientWidth),o.remove(),i=e-n,i}function E(t,o=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:o?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{y as a,h as b,v as c,g,E as h,p as s,m as u};
