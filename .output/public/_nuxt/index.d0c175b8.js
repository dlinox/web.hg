import{_ as i}from"./ECG.099e95f6.js";import{r as o,c as r,a as e,b as c,F as u,o as _}from"./entry.e8e065a3.js";const p=""+globalThis.__publicAssetsURL("assets/images/about_us/hg-img-1.jpg"),d=e("section",{class:"bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50",style:{"background-image":"url(/assets/images/bg/hea.jpg)","background-size":"cover","background-position":"center","background-repeat":"no-repeat","backdrop-filter":"blur(105px)"}},[e("div",{class:"relative container w-full py-8 lg:py-24 text-center z-40"},[e("h1",{class:"text-5xl mb-3 text-primary"},"¿Quiénes somos?"),e("ul",{class:"inline-flex gap-4"},[e("li",null,"Inicio"),e("li",null,"Nosotros")])])],-1),g={class:"relative items-center w-full py-12 lg:py-32"},f={class:"container"},m={class:"grid grid-cols-2 gap-5"},v=e("div",null,[e("img",{src:p,alt:""})],-1),b={class:"container mb-6"},h=e("h3",{class:"text-3xl font-bold z-10 relative"},"Hospital Goyeneche",-1),x=["innerHTML"],j={__name:"index",setup(y){const t=o([]),s=o(null);return(async()=>{console.log("init");let a=await(await fetch("https://goyeneche.linox.net.pe/api/quienes-somos")).json();t.value=a,s.value=t.value.about_us,console.log(t.value)})(),(l,a)=>{const n=i;return _(),r(u,null,[d,e("section",g,[e("div",f,[e("div",m,[v,e("div",null,[e("div",b,[h,c(n,{class:"-mt-4 z-0 relative",width:"250px"})]),e("div",{innerHTML:s.value},null,8,x)])])])])],64)}}};export{j as default};