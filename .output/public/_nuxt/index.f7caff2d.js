import{r as p,c as a,a as e,F as s,n as d,o as r,t as l}from"./entry.79e4c22c.js";const g=e("section",{class:"bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50",style:{"background-image":"url(/assets/images/bg/hea.jpg)","background-size":"cover","background-position":"center","background-repeat":"no-repeat","backdrop-filter":"blur(105px)"}},[e("div",{class:"relative container w-full py-8 lg:py-24 text-center z-40"},[e("h1",{class:"text-5xl mb-3 text-primary"},"Objetivos"),e("ul",{class:"inline-flex gap-4"},[e("li",null,"Inicio"),e("li",null,"Nosotros")])])],-1),f={class:"",style:{"background-image":`repeating-linear-gradient(\r
          90deg,\r
          hsla(0, 33%, 66%, 0.2) 0,\r
          hsla(196, 0%, 79%, 0.2) 1px,\r
          transparent 1px,\r
          transparent 96px\r
        ),\r
        repeating-linear-gradient(\r
          0deg,\r
          hsla(196, 0%, 79%, 0.2) 0,\r
          hsla(196, 0%, 79%, 0.2) 1px,\r
          transparent 1px,\r
          transparent 96px\r
        ),\r
        repeating-linear-gradient(\r
          0deg,\r
          hsla(196, 0%, 79%, 0.1) 0,\r
          hsla(196, 0%, 79%, 0.1) 1px,\r
          transparent 1px,\r
          transparent 12px\r
        ),\r
        repeating-linear-gradient(\r
          90deg,\r
          hsla(196, 0%, 79%, 0.1) 0,\r
          hsla(196, 0%, 79%, 0.1) 1px,\r
          transparent 1px,\r
          transparent 12px\r
        ),\r
        linear-gradient(90deg, #fff, #fff)`}},u={class:"container"},x={class:"grid grid-cols-1 gap-8 relative items-center w-full py-12 lg:py-32"},h={class:"shadow-md p-8 rounded-lg bg-white/10 backdrop-blur-sm rounded-br-[80px] z-10"},_={class:"container mb-6"},b={class:"font-extrabold text-7xl text-black/10"},m={class:"text-2xl font-bold z-10 relative my-3"},w={__name:"index",setup(v){const t=p([]);return(async()=>{console.log("init");let n=await(await fetch("https://goyeneche.linox.net.pe/api/objetivos")).json();t.value=n,console.log(t.value)})(),(i,n)=>(r(),a(s,null,[g,e("section",f,[e("div",u,[e("div",x,[(r(!0),a(s,null,d(t.value,(o,c)=>(r(),a("div",h,[e("div",_,[e("span",b,l(c+1),1),e("h3",m,l(o.name),1)])]))),256))])])])],64))}};export{w as default};
