import{Q as d}from"./QBtn.3f12cf1e.js";import{Q as u,_ as f}from"./date_extensions.6fd53721.js";import{_ as p,u as h,H as a}from"./plugin-vue_export-helper.7c2bc943.js";import{D as o,O as m,Q as n,S as _,I as r,G as c,F as k,T as g,U as v,E as w}from"./index.8d7070b0.js";import"./Ripple.6982f1a4.js";import"./render.260b5f95.js";const b={class:"page",width:"100%"},x={class:"q-mt-none q-mb-none q-ml-sm"},y={class:"row"},B={__name:"RememberThisWeek",setup(q){const t=h(),i=()=>{t.getTodayYahrzeits(),t.getWeeksYarhzeits(new a),t.getMonthsYarhzeits()};return i(),(l,s)=>(o(),m("div",b,[n("h6",x,"Saturday "+_(new(r(a))().onOrBefore(6))+" to Friday "+_(new(r(a))().onOrAfter(5)),1),c(u,{position:"top-right",offset:[18,18]},{default:k(()=>[c(d,{fab:"",onClick:s[0]||(s[0]=e=>l.$q.fullscreen.toggle()),icon:l.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),n("div",y,[(o(!0),m(g,null,v(r(t).thisWeekContinuous,e=>(o(),w(f,{key:e.id,ename:e.ename,hname:e.hname,hdate:e.hdate,look:"l6"},null,8,["ename","hname","hdate"]))),128))]),n("button",{onClick:s[1]||(s[1]=e=>i()),style:{"max-width":"600px"}}," Refresh data ")]))}};var C=p(B,[["__scopeId","data-v-0a539e6e"]]);export{C as default};
