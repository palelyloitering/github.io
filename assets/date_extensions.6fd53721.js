import{i as k,e as d,x as b,c as a,h as x,g as D,j as O,D as P,O as Q,Q as l,X as h,Y as C,R as g,S as m}from"./index.8d7070b0.js";import{a as w}from"./render.260b5f95.js";const B={position:{type:String,default:"bottom-right",validator:t=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(t)},offset:{type:Array,validator:t=>t.length===2},expand:Boolean};function I(){const{props:t,proxy:{$q:e}}=D(),s=k(b,d);if(s===d)return console.error("QPageSticky needs to be child of QLayout"),d;const v=a(()=>{const o=t.position;return{top:o.indexOf("top")!==-1,right:o.indexOf("right")!==-1,bottom:o.indexOf("bottom")!==-1,left:o.indexOf("left")!==-1,vertical:o==="top"||o==="bottom",horizontal:o==="left"||o==="right"}}),c=a(()=>s.header.offset),p=a(()=>s.right.offset),u=a(()=>s.footer.offset),f=a(()=>s.left.offset),_=a(()=>{let o=0,n=0;const r=v.value,y=e.lang.rtl===!0?-1:1;r.top===!0&&c.value!==0?n=`${c.value}px`:r.bottom===!0&&u.value!==0&&(n=`${-u.value}px`),r.left===!0&&f.value!==0?o=`${y*f.value}px`:r.right===!0&&p.value!==0&&(o=`${-y*p.value}px`);const i={transform:`translate(${o}, ${n})`};return t.offset&&(i.margin=`${t.offset[1]}px ${t.offset[0]}px`),r.vertical===!0?(f.value!==0&&(i[e.lang.rtl===!0?"right":"left"]=`${f.value}px`),p.value!==0&&(i[e.lang.rtl===!0?"left":"right"]=`${p.value}px`)):r.horizontal===!0&&(c.value!==0&&(i.top=`${c.value}px`),u.value!==0&&(i.bottom=`${u.value}px`)),i}),$=a(()=>`q-page-sticky row flex-center fixed-${t.position} q-page-sticky--${t.expand===!0?"expand":"shrink"}`);function S(o){const n=w(o.default);return x("div",{class:$.value,style:_.value},t.expand===!0?n:[x("div",n)])}return{$layout:s,getStickyContent:S}}var N=O({name:"QPageSticky",props:B,setup(t,{slots:e}){const{getStickyContent:s}=I();return()=>s(e)}});const R={class:"line"},j={class:"hebrew"},q={class:"line"},z={class:"hdate"},L={class:"line h7"},V={__name:"RememberItemLook",props:{ename:{type:String},hname:{type:String},hdate:{type:String},edate:{type:Object},look:{type:String}},setup(t){const e=t;return(s,v)=>(P(),Q("div",{class:C([e.look,"personProp shadow-10"])},[l("h6",R,[h(s.$slots,"ename",{},()=>[g(m(e.ename),1)])]),l("div",j,[l("h6",q,[h(s.$slots,"hname",{},()=>[g(m(e.hname),1)])])]),l("div",z,[l("p",L,[h(s.$slots,"hdate",{},()=>[g(m(e.hdate),1)])])])],2))}};Date.prototype.addDays=function(t){var e=new Date(this.valueOf());return e.setHours(0,0,0,0),e.setDate(e.getDate()+t),e};Date.prototype.toISODate=function(){return this.getFullYear()+"-"+("0"+(this.getMonth()+1)).slice(-2)+"-"+("0"+this.getDate()).slice(-2)};export{N as Q,V as _};
