import{a1 as s,a7 as o,a4 as d,a3 as c,a8 as t,a9 as g,aa as r,a5 as n,ab as f,ac as h,a6 as w,Q as x,a2 as v}from"./index.94f5a4bb.js";import{Q as S}from"./QPageSticky.2f198c0f.js";import{Q as y,a as b}from"./QCard.c965c291.js";import{_ as D}from"./date_extensions.b04f6d6d.js";import{u as W,H as l}from"./storeYahrzeits.c1c79bb4.js";import{u as q}from"./storeShulMemberDB.173f7849.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.f76caa75.js";const T={class:"page",width:"100%","full-height":""},A={class:"header q-ma-none",align:"center"},L={class:"q-my-none q-mx-sm align-center text-h5"},Q={class:"row q-mx-md q-mb-md items-center"},B={class:"row justify-left"},N={class:"text-left text-h6 text-bold indigo-8"},Y={class:"text-h7"},K={__name:"AllAboutThisWeek",setup(U){const _=W(),i=q(),k=()=>{_.getTodayYahrzeits(),_.getWeeksYarhzeits(new l),i.getShulMembersForWC()};return i.setCurrentWeek(new Date),k(),(p,e)=>(s(),o("div",T,[d(S,{position:"top-right",offset:[5,5]},{default:c(()=>[d(x,{fab:"",onClick:e[0]||(e[0]=m=>p.$q.fullscreen.toggle()),icon:p.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),t("h5",A,[e[1]||(e[1]=g(" Today is ")),t("b",null,r(new Date().toDateString()),1),e[2]||(e[2]=g(". This is ")),t("b",null,r(new(n(l))().render("en",!0)),1),e[3]||(e[3]=g(", and after sunset, ")),t("b",null,r(new(n(l))().add(1).render("en",!1)),1)]),e[7]||(e[7]=t("br",null,null,-1)),(s(!0),o(f,null,h(n(_).thisWeek,(m,a)=>(s(),o("div",{key:a},[t("div",L,r(new(n(l))(Number(a)).greg().toLocaleDateString("en-UK",{weekday:"long",day:"numeric",month:"long"}))+" - "+r(new(n(l))(Number(a))),1),t("div",Q,[(s(!0),o(f,null,h(m,u=>(s(),v(D,{key:u.id,ename:u.ename,hname:u.hname,look:"l5"},null,8,["ename","hname"]))),128))])]))),128)),e[8]||(e[8]=t("br",null,null,-1)),w("",!0),d(y,{class:"q-mx-xl"},{default:c(()=>[d(b,null,{default:c(()=>e[5]||(e[5]=[t("div",{class:"text-bold text-h6"}," The Congregation wishes \u201CLong Life\u201D to all those who are commemorating a Yahrzeit in the coming week ",-1)])),_:1}),d(b,null,{default:c(()=>[t("div",B,[(s(!0),o(f,null,h(n(i).members,(m,a)=>(s(),o("ul",{key:m,class:"q-px-md q-py-none text-h7"},[t("li",N,[g(r(n(i).currentWeek[a]),1),t("span",Y,[e[6]||(e[6]=t("br",null,null,-1)),g("("+r(new(n(l))(n(i).currentWeek[a]).subtract(1,"d").greg().toLocaleDateString("en-UK",{weekday:"short",day:"numeric"}))+" - "+r(new(n(l))(n(i).currentWeek[a]).greg().toLocaleDateString("en-UK",{weekday:"short",day:"numeric"}))+" "+r(new(n(l))(n(i).currentWeek[a]).greg().toLocaleDateString("en-UK",{month:"short"}))+")",1)])]),t("ul",null,[(s(!0),o(f,null,h(m,u=>(s(),o("li",{key:u},r(u),1))),128))])]))),128))])]),_:1})]),_:1})]))}};var I=C(K,[["__scopeId","data-v-6a9ca6b8"]]);export{I as default};