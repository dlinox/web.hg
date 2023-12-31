import{_ as x}from"./nuxt-link.b44bd191.js";import{r as g,c as a,a as e,F as n,n as p,q as m,o as r,t as s,b as u,w as h,d as b}from"./entry.ffd4ebaa.js";const v=e("section",{class:"bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50",style:{"background-image":"url(/assets/images/bg/hea.jpg)","background-size":"cover","background-position":"center","background-repeat":"no-repeat","backdrop-filter":"blur(105px)"}},[e("div",{class:"relative container w-full py-8 lg:py-24 text-center z-40"},[e("h1",{class:"text-5xl mb-3 text-primary"},"Informes y publicaciones"),e("ul",{class:"inline-flex gap-4"},[e("li",null,"Inicio"),e("li",null,"Informes y publicaciones")])])],-1),y={class:"relative items-center w-full py-12 lg:py-32"},_={class:"container grid grid-cols-2 gap-8"},w={class:"flex-none w-56 relative"},k=["src","alt"],z={class:"flex-auto p-4"},N={class:"flex flex-wrap"},B={class:"flex-auto font-medium text-slate-900"},V={class:"w-full flex-none mt-2 order-1 text-xl font-bold text-primary"},j={class:"text-sm font-medium text-slate-400"},L={class:"flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"},C={class:"space-x-2 flex text-sm font-bold"},H={class:"text-sm text-slate-500"},I={class:"flex space-x-4 text-sm font-medium"},D={class:"flex-auto flex space-x-4"},F=m(`<div class="col-span-2"><div class="flex justify-center"><div class="flex rounded-md mt-8"><a href="#" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.707 3.293a1 1 0 010 1.414L7.414\r
                    9H17a1 1 0 110 2H7.414l3.293 3.293a1 1 0\r
                    01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1\r
                    1 0 011.414 0z" clip-rule="evenodd"></path></svg></a><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 1 </a><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 2 </a><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 3 </a><span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 8 </a><a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"> 9 </a><a href="#" class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M9.293 16.707a1 1 0\r
                    010-1.414L12.586 11H3a1 1 0 010-2h9.586l-3.293\r
                    -3.293a1 1 0 011.414-1.414l5 5a1 1 0\r
                    010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a></div></div></div>`,1),E={__name:"index",setup(M){const l=g([]);return(async()=>{console.log("init");let o=await(await fetch("https://goyeneche.linox.net.pe/api/publicaciones")).json();l.value=o})(),(c,o)=>{const d=x;return r(),a(n,null,[v,e("section",null,[e("div",y,[e("div",_,[(r(!0),a(n,null,p(l.value,(t,f)=>{var i;return r(),a("div",{key:f,class:"flex font-sans bg-white shadow-md rounded-lg col-span-2 lg:col-span-1"},[e("div",w,[e("img",{src:t.image_url,alt:t.title,class:"absolute inset-0 w-full h-full object-cover rounded-lg",loading:"lazy"},null,8,k)]),e("div",z,[e("div",N,[e("h1",B,s(t.date_published),1),e("div",V,s(t.name),1),e("div",j,s((i=t.author)==null?void 0:i.area.name),1)]),e("div",L,[e("div",C,[e("p",H,s(t.description),1)])]),e("div",I,[e("div",D,[u(d,{class:"h-10 px-6 font-semibold rounded-full bg-primary w-full text-white items-center flex",type:"submit",to:`/publicaciones/${t.slug}`},{default:h(()=>[b(" Ver detalles ")]),_:2},1032,["to"])])])])])}),128)),F])])])],64)}}};export{E as default};