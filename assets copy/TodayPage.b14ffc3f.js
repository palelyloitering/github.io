import{Q as v}from"./QBtn.1968b278.js";import{_ as h,u as k,Q as w,H as r,a as y}from"./plugin-vue_export-helper.f28cd9ee.js";import{P as _,D as s,O as o,G as f,F as D,Q as t,R as i,S as l,I as u,T as p,U as c,E as T}from"./index.18e645c1.js";import"./Ripple.f5e783d2.js";const b={class:"page",width:"99%"},x={class:"header q-ma-none"},P={class:"header q-ma-none",align:"center"},Y={class:"row"},q={__name:"TodayPage",setup(B){const a=k();return setInterval(function(){console.log("hi at ",new Date)},6e4),_.request,_.exit,(()=>{a.getTodayYahrzeits(),a.getWeeksYarhzeits(new r),a.getMonthsYarhzeits()})(),(d,e)=>(s(),o("div",b,[f(w,{position:"top-right",offset:[18,18]},{default:D(()=>[f(v,{fab:"",onClick:e[0]||(e[0]=g=>d.$q.fullscreen.toggle()),icon:d.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),t("div",x,[e[4]||(e[4]=t("br",null,null,-1)),t("h5",P,[e[1]||(e[1]=i(" Today is ")),t("b",null,l(new Date().toDateString()),1),e[2]||(e[2]=i(". This is ")),t("b",null,l(new(u(r))().render("en",!1)),1),e[3]||(e[3]=i(", and after sunset, ")),t("b",null,l(new(u(r))().add(1)),1)])]),e[5]||(e[5]=t("br",null,null,-1)),(s(!0),o(p,null,c(u(a).todayY,(g,m)=>(s(),o("div",{key:m},[t("h4",null,l(m),1),t("div",Y,[(s(!0),o(p,null,c(g,n=>(s(),T(y,{key:n.id,ename:n.ename,hname:n.hname,hdate:n.hdate,look:"l5"},null,8,["ename","hname","hdate"]))),128))])]))),128))]))}};var V=h(q,[["__scopeId","data-v-0e828913"]]);export{V as default};
