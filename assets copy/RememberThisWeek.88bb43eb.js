import{Q as d}from"./QBtn.1968b278.js";import{_ as u,u as f,Q as h,H as a,a as p}from"./plugin-vue_export-helper.f28cd9ee.js";import{D as n,O as m,Q as o,S as _,I as r,G as c,F as k,T as g,U as v,E as w}from"./index.18e645c1.js";import"./Ripple.f5e783d2.js";const b={class:"page",width:"100%"},x={class:"q-mt-none q-mb-none q-ml-sm"},y={class:"row"},B={__name:"RememberThisWeek",setup(q){const t=f(),i=()=>{t.getTodayYahrzeits(),t.getWeeksYarhzeits(new a),t.getMonthsYarhzeits()};return i(),(l,s)=>(n(),m("div",b,[o("h6",x,"Saturday "+_(new(r(a))().onOrBefore(6))+" to Friday "+_(new(r(a))().onOrAfter(5)),1),c(h,{position:"top-right",offset:[18,18]},{default:k(()=>[c(d,{fab:"",onClick:s[0]||(s[0]=e=>l.$q.fullscreen.toggle()),icon:l.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),o("div",y,[(n(!0),m(g,null,v(r(t).thisWeekContinuous,e=>(n(),w(p,{key:e.id,ename:e.ename,hname:e.hname,hdate:e.hdate,look:"l6"},null,8,["ename","hname","hdate"]))),128))]),o("button",{onClick:s[1]||(s[1]=e=>i()),style:{"max-width":"600px"}}," Refresh data ")]))}};var Y=u(B,[["__scopeId","data-v-0a539e6e"]]);export{Y as default};
