import{r as d,c as a,a as e,F as n,n as f,o as l,t as s}from"./entry.83a81a70.js";const u=e("section",{class:"bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50",style:{"background-image":"url(/assets/images/bg/hea.jpg)","background-size":"cover","background-position":"center","background-repeat":"no-repeat","backdrop-filter":"blur(105px)"}},[e("div",{class:"relative container w-full py-8 lg:py-24 text-center z-40"},[e("h1",{class:"text-5xl mb-3 text-primary"},"Noticias"),e("ul",{class:"inline-flex gap-4"},[e("li",null,"Inicios"),e("li",null,"Nostros")])])],-1),p={class:"relative items-center w-full py-12 lg:py-32"},_={class:"container grid grid-cols-1 gap-8 md:grid-cols-2"},x={class:"flex-none w-56 relative"},g=["src","alt"],m={class:"flex-auto p-4"},h={class:"flex flex-wrap"},b={class:"flex-auto font-medium text-slate-900"},v={class:"w-full flex-none mt-2 order-1 text-xl font-bold text-primary"},y={class:"text-sm font-medium text-slate-400"},w={class:"flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"},k={class:"space-x-2 flex text-sm font-bold"},z={class:"text-sm text-slate-500"},j=e("div",{class:"flex space-x-4 text-sm font-medium"},[e("div",{class:"flex-auto flex space-x-4"},[e("button",{class:"h-10 px-6 font-semibold rounded-full bg-primary w-full text-white",type:"submit"}," Ver detalles ")])],-1),F={__name:"index",setup(B){const o=d([]);return(async()=>{console.log("init");let i=await(await fetch("https://goyeneche.linox.net.pe/api/news")).json();o.value=i})(),(r,i)=>(l(),a(n,null,[u,e("section",null,[e("div",p,[e("div",_,[(l(!0),a(n,null,f(o.value,(t,c)=>(l(),a("div",{key:c,class:"flex font-sans bg-white shadow-md rounded-lg"},[e("div",x,[e("img",{src:t.image_url,alt:t.title,class:"absolute inset-0 w-full h-full object-cover rounded-lg",loading:"lazy"},null,8,g)]),e("div",m,[e("div",h,[e("h1",b,s(t.date_published),1),e("div",v,s(t.title),1),e("div",y,s(t.author.area.name),1)]),e("div",w,[e("div",k,[e("p",z,s(t.description),1)])]),j])]))),128))])])])],64))}};export{F as default};
