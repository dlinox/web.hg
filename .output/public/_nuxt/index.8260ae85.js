import{r as s,c as l,a as e,F as i,o}from"./entry.ffd4ebaa.js";const c=e("section",{class:"bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50",style:{"background-image":"url(/assets/images/bg/hea.jpg)","background-size":"cover","background-position":"center","background-repeat":"no-repeat","backdrop-filter":"blur(105px)"}},[e("div",{class:"relative container w-full py-8 lg:py-24 text-center z-40"},[e("h1",{class:"text-5xl mb-3 text-primary"},"Organigrama"),e("ul",{class:"inline-flex gap-4"},[e("li",null,"Inicio"),e("li",null,"Nosotros")])])],-1),p={style:{"background-image":`repeating-linear-gradient(\r
          90deg,\r
          hsla(0, 33%, 66%, 0.06) 0,\r
          hsla(196, 0%, 79%, 0.06) 1px,\r
          transparent 1px,\r
          transparent 96px\r
        ),\r
        repeating-linear-gradient(\r
          0deg,\r
          hsla(196, 0%, 79%, 0.06) 0,\r
          hsla(196, 0%, 79%, 0.06) 1px,\r
          transparent 1px,\r
          transparent 96px\r
        ),\r
        repeating-linear-gradient(\r
          0deg,\r
          hsla(196, 0%, 79%, 0.09) 0,\r
          hsla(196, 0%, 79%, 0.09) 1px,\r
          transparent 1px,\r
          transparent 12px\r
        ),\r
        repeating-linear-gradient(\r
          90deg,\r
          hsla(196, 0%, 79%, 0.09) 0,\r
          hsla(196, 0%, 79%, 0.09) 1px,\r
          transparent 1px,\r
          transparent 12px\r
        ),\r
        linear-gradient(90deg, #fff, #fff)`}},g={class:"relative items-center w-full py-12 lg:py-32"},f={class:"container"},d=["src"],m={__name:"index",setup(u){const a=s(null);return(async()=>{console.log("init");let r=await(await fetch("https://goyeneche.linox.net.pe/api/organigrama")).json();a.value=r,console.log(a.value)})(),(n,r)=>{var t;return o(),l(i,null,[c,e("section",p,[e("div",g,[e("div",f,[e("img",{class:"w-full rounded-lg shadow-lg",src:(t=a.value)==null?void 0:t.organigram_url,alt:""},null,8,d)])])])],64)}}};export{m as default};
