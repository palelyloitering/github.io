import{a1 as i,a7 as l,a8 as t,ad as o,ae as c,a9 as n,aa as r}from"./index.94f5a4bb.js";const p={class:"line"},d={class:"hebrew"},h={class:"line size"},_={class:"hdate"},m={class:"line size"},g={__name:"RememberItemLook",props:{ename:{type:String},hname:{type:String},hdate:{type:String},edate:{type:Object},look:{type:String},size:{type:String}},setup(s){const e=s;return(a,u)=>(i(),l("div",{class:c([e.look,"personProp shadow-10"])},[t("h6",p,[o(a.$slots,"ename",{},()=>[n(r(e.ename),1)])]),t("div",d,[t("h6",h,[o(a.$slots,"hname",{},()=>[n(r(e.hname),1)])])]),t("div",_,[t("p",m,[o(a.$slots,"hdate",{},()=>[n(r(e.hdate),1)])])])],2))}};Date.prototype.addDays=function(s){var e=new Date(this.valueOf());return e.setHours(0,0,0,0),e.setDate(e.getDate()+s),e};Date.prototype.toISODate=function(){return this.getFullYear()+"-"+("0"+(this.getMonth()+1)).slice(-2)+"-"+("0"+this.getDate()).slice(-2)};export{g as _};
