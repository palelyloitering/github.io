import{a1 as o,a7 as r,a4 as u,a3 as m,a8 as t,a9 as f,aa as i,a5 as h,ab as c,ac as p,Q as y,a2 as k}from"./index.94f5a4bb.js";import{Q as x}from"./QPageSticky.2f198c0f.js";import{Q as q,a as g}from"./QCard.c965c291.js";import{u as S,e as D,H as e}from"./storeYahrzeits.c1c79bb4.js";import{_ as T}from"./date_extensions.b04f6d6d.js";import{u as A}from"./storeShulMemberDB.173f7849.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.f76caa75.js";const B={class:"page",width:"100%","full-height":""},K={class:"header q-ma-none",align:"center"},L={class:"row q-mx-md q-mb-md items-center"},M={class:"row justify-left"},N={class:"text-left"},W={class:"text-bold indigo-8"},F={__name:"AllAboutThisWeekContinuous",setup(Y){const v=S(),w=A(),_=()=>{v.getMultipleWeeksYarhzeits([new e],150),w.getShulMembersForWC()},b=D([new e,new e().add(1,"day"),new e().add(2,"day"),new e().add(3,"day"),new e().add(4,"day"),new e().add(5,"day"),new e().add(6,"day"),new e(29,"Cheshvan",5769),new e(29,"Cheshvan",5770),new e(29,"Cheshvan",5771),new e(29,"Cheshvan",5772),new e(29,"Cheshvan",5773),new e(29,"Cheshvan",5774),new e(29,"Kislev",5769),new e(29,"Kislev",5770),new e(29,"Kislev",5771),new e(29,"Kislev",5772),new e(29,"Kislev",5773),new e(29,"Kislev",5774)]);w.getShulMembersForList(b);const C=d=>{console.log("I received the following key:",d);const n=d.split(" "),l=Number(n[0]),a=Number(n[2]),s=n[1];return new e(l,s,a).greg()};return _(),(d,n)=>(o(),r("div",B,[u(x,{position:"top-right",offset:[5,5]},{default:m(()=>[u(y,{fab:"",onClick:n[0]||(n[0]=l=>d.$q.fullscreen.toggle()),icon:d.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},null,8,["icon"])]),_:1}),t("h5",K,[n[1]||(n[1]=f(" Today is ")),t("b",null,i(new Date().toDateString()),1),n[2]||(n[2]=f(". This is ")),t("b",null,i(new(h(e))().render("en",!0)),1),n[3]||(n[3]=f(", and after sunset, ")),t("b",null,i(new(h(e))().add(1).render("en",!1)),1)]),n[6]||(n[6]=t("br",null,null,-1)),(o(!0),r(c,null,p(h(v).allDataContinuous,(l,a)=>(o(),r("div",{key:a},[n[4]||(n[4]=t("div",{class:"q-my-none q-mx-sm align-center"},null,-1)),t("div",L,[(o(!0),r(c,null,p(l,s=>(o(),k(T,{key:s.id,ename:s.ename,hname:s.hname,hdate:s.hdate,look:"l6"},null,8,["ename","hname","hdate"]))),128))])]))),128)),n[7]||(n[7]=t("br",null,null,-1)),u(q,{class:"q-mx-xl"},{default:m(()=>[u(g,null,{default:m(()=>n[5]||(n[5]=[t("div",{class:"text-bold"}," The Congregation wishes \u201CLong Life\u201D to all those who are commemorating a Yahrzeit in the coming week ",-1)])),_:1}),u(g,null,{default:m(()=>[t("div",M,[(o(!0),r(c,null,p(h(w).listResults,(l,a)=>(o(),r("div",{key:a,class:"q-px-md q-py-none"},[t("p",N,[t("span",W,i(a)+" / "+i(C(a).toDateString()),1),f(" "+i(l.map(function(s){return s.shulMemberFullName}).join(", ")),1)])]))),128))])]),_:1})]),_:1})]))}};var R=Q(F,[["__scopeId","data-v-11d387f1"]]);export{R as default};