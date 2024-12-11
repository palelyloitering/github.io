import{c as l,j as A,h as r,r as $,s as f,b as z,V as U,M as X,o as G,W as J,w as Y,p as Z,g as p}from"./index.65778e06.js";import{b as j,d as ee,e as te,f as ne,a as ae,Q as O,R as ue}from"./Ripple.7c16dfa9.js";import{h as le}from"./render.720aa52f.js";const ie={size:{type:[String,Number],default:"1em"},color:String};function re(e){return{cSize:l(()=>e.size in j?`${j[e.size]}px`:e.size),classes:l(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var oe=A({name:"QSpinner",props:{...ie,thickness:{type:Number,default:5}},setup(e){const{cSize:i,classes:v}=re(e);return()=>r("svg",{class:v.value+" q-spinner-mat",width:i.value,height:i.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const Q={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},se=Object.keys(Q),ce={align:{type:String,validator:e=>se.includes(e)}};function de(e){return l(()=>{const i=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Q[i]}`})}const _={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ve={xs:8,sm:10,md:14,lg:20,xl:24},fe=["button","submit","reset"],be=/[^\s]\/[^\s]/,ge=["flat","outline","push","unelevated"];function me(e,i){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":i}const he={...ee,...te,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ge.reduce((e,i)=>(e[i]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ce.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},ye={...he,round:Boolean};function ke(e){const i=ne(e,ve),v=de(e),{hasRouterLink:x,hasLink:E,linkTag:S,linkAttrs:C,navigateOnClick:T}=ae({fallbackTag:"button"}),P=l(()=>{const a=e.fab===!1&&e.fabMini===!1?i.value:{};return e.padding!==void 0?Object.assign({},a,{padding:e.padding.split(/\s+/).map(d=>d in _?_[d]+"px":d).join(" "),minWidth:"0",minHeight:"0"}):a}),R=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),h=l(()=>e.disable!==!0&&e.loading!==!0),L=l(()=>h.value===!0?e.tabindex||0:-1),n=l(()=>me(e,"standard")),B=l(()=>{const a={tabindex:L.value};return E.value===!0?Object.assign(a,C.value):fe.includes(e.type)===!0&&(a.type=e.type),S.value==="a"?(e.disable===!0?a["aria-disabled"]="true":a.href===void 0&&(a.role="button"),x.value!==!0&&be.test(e.type)===!0&&(a.type=e.type)):e.disable===!0&&(a.disabled="",a["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(a,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),a}),c=l(()=>{let a;e.color!==void 0?e.flat===!0||e.outline===!0?a=`text-${e.textColor||e.color}`:a=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(a=`text-${e.textColor}`);const d=e.round===!0?"round":`rectangle${R.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${d}`+(a!==void 0?" "+a:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),y=l(()=>v.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:c,style:P,innerClasses:y,attributes:B,hasLink:E,linkTag:S,navigateOnClick:T,isActionable:h}}const{passiveCapture:o}=Z;let b=null,g=null,m=null;var Se=A({name:"QBtn",props:{...ye,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:i,emit:v}){const{proxy:x}=p(),{classes:E,style:S,innerClasses:C,attributes:T,hasLink:P,linkTag:R,navigateOnClick:h,isActionable:L}=ke(e),n=$(null),B=$(null);let c=null,y,a=null;const d=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),K=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:P.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),N=l(()=>({center:e.round})),D=l(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),W=l(()=>{if(e.loading===!0)return{onMousedown:q,onTouchstart:q,onClick:q,onKeydown:q,onKeyup:q};if(L.value===!0){const t={onClick:M,onKeydown:V,onMousedown:H};if(x.$q.platform.has.touch===!0){const u=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${u}`]=F}return t}return{onClick:f}}),I=l(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+E.value,style:S.value,...T.value,...W.value}));function M(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const u=document.activeElement;if(e.type==="submit"&&u!==document.body&&n.value.contains(u)===!1&&u.contains(n.value)===!1){n.value.focus();const w=()=>{document.removeEventListener("keydown",f,!0),document.removeEventListener("keyup",w,o),n.value!==null&&n.value.removeEventListener("blur",w,o)};document.addEventListener("keydown",f,!0),document.addEventListener("keyup",w,o),n.value.addEventListener("blur",w,o)}}h(t)}}function V(t){n.value!==null&&(v("keydown",t),z(t,[13,32])===!0&&g!==n.value&&(g!==null&&k(),t.defaultPrevented!==!0&&(n.value.focus(),g=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",s,!0),n.value.addEventListener("blur",s,o)),f(t)))}function F(t){n.value!==null&&(v("touchstart",t),t.defaultPrevented!==!0&&(b!==n.value&&(b!==null&&k(),b=n.value,c=t.target,c.addEventListener("touchcancel",s,o),c.addEventListener("touchend",s,o)),y=!0,a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,y=!1},200)))}function H(t){n.value!==null&&(t.qSkipRipple=y===!0,v("mousedown",t),t.defaultPrevented!==!0&&m!==n.value&&(m!==null&&k(),m=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",s,o)))}function s(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(g===n.value&&z(t,[13,32])===!0){const u=new MouseEvent("click",t);u.qKeyEvent=!0,t.defaultPrevented===!0&&U(u),t.cancelBubble===!0&&X(u),n.value.dispatchEvent(u),f(t),t.qKeyEvent=!0}v("keyup",t)}k()}}function k(t){const u=B.value;t!==!0&&(b===n.value||m===n.value)&&u!==null&&u!==document.activeElement&&(u.setAttribute("tabindex",-1),u.focus()),b===n.value&&(c!==null&&(c.removeEventListener("touchcancel",s,o),c.removeEventListener("touchend",s,o)),b=c=null),m===n.value&&(document.removeEventListener("mouseup",s,o),m=null),g===n.value&&(document.removeEventListener("keyup",s,!0),n.value!==null&&n.value.removeEventListener("blur",s,o),g=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function q(t){f(t),t.qSkipRipple=!0}return G(()=>{k(!0)}),Object.assign(x,{click:t=>{L.value===!0&&M(t)}}),()=>{let t=[];e.icon!==void 0&&t.push(r(O,{name:e.icon,left:e.stack!==!0&&d.value===!0,role:"img"})),d.value===!0&&t.push(r("span",{class:"block"},[e.label])),t=le(i.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(r(O,{name:e.iconRight,right:e.stack!==!0&&d.value===!0,role:"img"}));const u=[r("span",{class:"q-focus-helper",ref:B})];return e.loading===!0&&e.percentage!==void 0&&u.push(r("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[r("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),u.push(r("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+C.value},t)),e.loading!==null&&u.push(r(J,{name:"q-transition--fade"},()=>e.loading===!0?[r("span",{key:"loading",class:"absolute-full flex flex-center"},i.loading!==void 0?i.loading():[r(oe)])]:null)),Y(r(R.value,I.value,u),[[ue,K.value,void 0,N.value]])}}});export{Se as Q,oe as a,de as b,ce as u};