import{r as c,c as a,a as e,F as r,n as d,o as l,t as i}from"./entry.83a81a70.js";const p=e("section",{class:"bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50",style:{"background-image":"url(/assets/images/bg/hea.jpg)","background-size":"cover","background-position":"center","background-repeat":"no-repeat","backdrop-filter":"blur(105px)"}},[e("div",{class:"relative container w-full py-8 lg:py-24 text-center z-40"},[e("h1",{class:"text-5xl mb-3 text-primary"},"Especialidades médicas"),e("ul",{class:"inline-flex gap-4"},[e("li",null,"Inicios"),e("li",null,"Nostros")])])],-1),f={class:"relative items-center w-full py-12 lg:py-32"},g={class:"container"},u={class:"grid grid-cols-2 gap-5"},_={class:"rounded-lg overflow-hidden shadow-lg"},v=["src","alt"],h={class:"px-6 py-4"},m={class:"font-bold text-xl mb-2"},b={class:"text-gray-700 text-base"},k={__name:"index",setup(x){const s=c([]);return(async()=>{console.log("init");let o=await(await fetch("https://goyeneche.linox.net.pe/api/especialidades-medicas")).json();s.value=o,console.log(s.value)})(),(n,o)=>(l(),a(r,null,[p,e("section",f,[e("div",g,[e("div",u,[(l(!0),a(r,null,d(s.value,t=>(l(),a("div",_,[e("img",{class:"w-full",src:t.image_url,alt:t.name},null,8,v),e("div",h,[e("div",m,i(t.name),1),e("p",b,i(t.description),1)])]))),256))])])])],64))}};export{k as default};
