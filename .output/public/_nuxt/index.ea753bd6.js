import{_ as r}from"./CardDoctor.f7600e45.js";import{r as l,c as n,a as e,b as c,F as i,o as f}from"./entry.1fa087d1.js";const u=e("section",{class:"bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50",style:{"background-image":"url(/assets/images/bg/hea.jpg)","background-size":"cover","background-position":"center","background-repeat":"no-repeat","backdrop-filter":"blur(105px)"}},[e("div",{class:"relative container w-full py-8 lg:py-24 text-center z-40"},[e("h1",{class:"text-5xl mb-3 text-primary"}," Médicos "),e("ul",{class:"inline-flex gap-4"},[e("li",null,"Inicios"),e("li",null,"Nostros")])])],-1),p={class:"container"},b={__name:"index",setup(g){const t=l([]);return(async()=>{console.log("init");let a=await(await fetch("https://goyeneche.linox.net.pe/api/doctors")).json();t.value=a,console.log(t.value)})(),(s,a)=>{const o=r;return f(),n(i,null,[u,e("section",null,[e("div",p,[c(o,{items:t.value},null,8,["items"])])])],64)}}};export{b as default};