import{a1 as t,a7 as s,a4 as c,a3 as g,a8 as o,a9 as h,ab as _,ac as d,a5 as i,Q as p,aa as f,a2 as k}from"./index.94f5a4bb.js";import{Q as v}from"./QPageSticky.2f198c0f.js";import{_ as b}from"./date_extensions.b04f6d6d.js";import{u as D,H as l}from"./storeYahrzeits.c1c79bb4.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const W={class:"page",width:"100%","full-height":""},x={class:"q-my-none q-mx-md"},y={class:"row q-mx-md q-mb-md"},q={__name:"RememberThisWeekWithDate",setup(B){const a=D();return(()=>{a.getTodayYahrzeits(),a.getWeeksYarhzeits(new l),a.getMonthsYarhzeits()})(),(m,e)=>(t(),s("div",W,[c(v,{position:"top-right",offset:[18,18]},{default:g(()=>[c(p,{fab:"",onClick:e[0]||(e[0]=u=>m.$q.fullscreen.toggle()),icon:m.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),e[1]||(e[1]=o("br",null,null,-1)),e[2]||(e[2]=h()),(t(!0),s(_,null,d(i(a).thisWeek,(u,r)=>(t(),s("div",{key:r},[o("h5",x,f(new(i(l))(Number(r)))+" / "+f(new Date(new(i(l))(Number(r)).greg()).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1),o("div",y,[(t(!0),s(_,null,d(u,n=>(t(),k(b,{key:n.id,ename:n.ename,hname:n.hname,look:"l5"},null,8,["ename","hname"]))),128))])]))),128))]))}};var z=w(q,[["__scopeId","data-v-07ace8a8"]]);export{z as default};
