import{ag as g,a1 as a,a7 as o,a4 as _,a3 as v,a8 as t,a9 as l,aa as r,a5 as i,ab as p,ac as c,Q as h,a2 as k}from"./index.94f5a4bb.js";import{Q as w}from"./QPageSticky.2f198c0f.js";import{_ as y}from"./date_extensions.b04f6d6d.js";import{u as b,H as u}from"./storeYahrzeits.c1c79bb4.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const T={class:"page",width:"99%"},x={class:"header q-ma-none"},Y={class:"header q-ma-none",align:"center"},q={class:"row"},B={__name:"TodayPage",setup(P){const s=b();return setInterval(function(){console.log("hi at ",new Date)},6e4),g.request,g.exit,(()=>{s.getTodayYahrzeits(),s.getWeeksYarhzeits(new u),s.getMonthsYarhzeits()})(),(d,e)=>(a(),o("div",T,[_(w,{position:"top-right",offset:[18,18]},{default:v(()=>[_(h,{fab:"",onClick:e[0]||(e[0]=m=>d.$q.fullscreen.toggle()),icon:d.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),t("div",x,[e[4]||(e[4]=t("br",null,null,-1)),t("h5",Y,[e[1]||(e[1]=l(" Today is ")),t("b",null,r(new Date().toDateString()),1),e[2]||(e[2]=l(". This is ")),t("b",null,r(new(i(u))().render("en",!1)),1),e[3]||(e[3]=l(", and after sunset, ")),t("b",null,r(new(i(u))().add(1)),1)])]),e[5]||(e[5]=t("br",null,null,-1)),(a(!0),o(p,null,c(i(s).todayY,(m,f)=>(a(),o("div",{key:f},[t("h4",null,r(f),1),t("div",q,[(a(!0),o(p,null,c(m,n=>(a(),k(y,{key:n.id,ename:n.ename,hname:n.hname,hdate:n.hdate,look:"l5"},null,8,["ename","hname","hdate"]))),128))])]))),128))]))}};var C=D(B,[["__scopeId","data-v-0e828913"]]);export{C as default};
