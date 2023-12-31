import{r as u,c as s,a as t,F as o,n,o as a,t as r,q as g}from"./entry.79e4c22c.js";const f=t("section",{class:"bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50",style:{"background-image":"url(/assets/images/bg/hea.jpg)","background-size":"cover","background-position":"center","background-repeat":"no-repeat","backdrop-filter":"blur(105px)"}},[t("div",{class:"relative container w-full py-8 lg:py-24 text-center z-40"},[t("h1",{class:"text-5xl mb-3 text-primary"},"Convocatorias"),t("ul",{class:"inline-flex gap-4"},[t("li",null,"Inicio"),t("li",null,"Informes y publicaciones")])])],-1),h={class:"relative items-center w-full py-12 lg:py-32"},y={class:"container"},x={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-lg"},b=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"py-4 px-6"},"Convocatoria"),t("th",{scope:"col",class:"py-4 px-6"},"Documentos"),t("th",{scope:"col",class:"py-4 px-6"},"Fecha de publicación")])],-1),v={class:"py-4 px-6"},m={class:"flex-row"},k={class:"font-semibold text-xl"},w={class:"mt-3"},C={class:"py-8 px-6"},z={class:"flex-row gap-9"},j={class:"mb-3"},B={class:"font-semibold text-sm"},D={class:"mt-2"},F=["href"],I={class:"py-4 px-6"},L={class:"col-span-2"},H={class:"flex justify-center"},M={class:"flex rounded-md mt-8"},R=["innerHTML","onClick"],T="https://goyeneche.linox.net.pe/api/convocatorias",V={__name:"index",setup(q){const c=u([]),i=u([]),d=async p=>{let e=await(await fetch(p)).json();c.value=e.data,i.value=e.links};return(async()=>{console.log("init"),await d(T)})(),(p,_)=>(a(),s(o,null,[f,t("section",h,[t("div",y,[t("table",x,[b,t("tbody",null,[(a(!0),s(o,null,n(c.value,e=>(a(),s("tr",{key:e.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[t("td",v,[t("div",m,[t("div",k,r(e.title),1),t("div",w,[t("p",null,r(e.description),1)])])]),t("td",C,[t("div",z,[(a(!0),s(o,null,n(e.documents,l=>(a(),s("div",j,[t("div",B,r(l.name),1),t("div",D,[t("a",{href:l.file_url,target:"_blank",class:"px-4 py-2 uppercase bg-red-600 text-white"}," ver ",8,F)])]))),256))])]),t("td",I,r(e.date_published),1)]))),128))])]),t("div",L,[t("div",H,[t("div",M,[(a(!0),s(o,null,n(i.value,(e,l)=>(a(),s("button",{key:l,class:g(["relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50",{"bg-primary text-primary":e.active}]),innerHTML:e.label,onClick:N=>e.url?d(e.url):null},null,10,R))),128))])])])])])],64))}};export{V as default};
