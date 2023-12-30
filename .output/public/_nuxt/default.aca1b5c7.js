import{_ as O}from"./nuxt-link.271cf4da.js";import{G as B,H as R,B as L,r as h,y as C,g as N,m as z,u as F,o as _,c as g,a as n,b as y,w as A,F as k,n as j,C as x,P as $,t as I,_ as U,I as D,J as G}from"./entry.e8e065a3.js";const H=""+new URL("logo.f76a732d.png",import.meta.url).href,P=""+globalThis.__publicAssetsURL("assets/images/icons/mesa_trans.png"),X=""+globalThis.__publicAssetsURL("assets/images/icons/trasn_trans.png"),Y=""+globalThis.__publicAssetsURL("assets/images/icons/libro_trans.png");function V(e){return B()?(R(e),!0):!1}function T(e){return typeof e=="function"?e():L(e)}const q=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const J=e=>e!=null,Q=Object.prototype.toString,K=e=>Q.call(e)==="[object Object]",b=()=>{};function w(e){var t;const o=T(e);return(t=o==null?void 0:o.$el)!=null?t:o}const S=q?window:void 0;function Z(...e){let t,o,r,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,r,i]=e,t=S):[t,o,r,i]=e,!t)return b;Array.isArray(o)||(o=[o]),Array.isArray(r)||(r=[r]);const a=[],u=()=>{a.forEach(l=>l()),a.length=0},c=(l,s,d,v)=>(l.addEventListener(s,d,v),()=>l.removeEventListener(s,d,v)),p=N(()=>[w(t),T(i)],([l,s])=>{if(u(),!l)return;const d=K(s)?{...s}:s;a.push(...o.flatMap(v=>r.map(m=>c(l,v,m,d))))},{immediate:!0,flush:"post"}),f=()=>{p(),u()};return V(f),f}function ee(){const e=h(!1);return z()&&F(()=>{e.value=!0}),e}function te(e){const t=ee();return C(()=>(t.value,!!e()))}function oe(e,t,o={}){const{root:r,rootMargin:i="0px",threshold:a=.1,window:u=S,immediate:c=!0}=o,p=te(()=>u&&"IntersectionObserver"in u),f=C(()=>{const m=T(e);return(Array.isArray(m)?m:[m]).map(w).filter(J)});let l=b;const s=h(c),d=p.value?N(()=>[f.value,w(r),s.value],([m,W])=>{if(l(),!s.value||!m.length)return;const E=new IntersectionObserver(t,{root:w(W),rootMargin:i,threshold:a});m.forEach(M=>M&&E.observe(M)),l=()=>{E.disconnect(),l=b}},{immediate:c,flush:"post"}):b,v=()=>{l(),d(),s.value=!1};return V(v),{isSupported:p,isActive:s,pause(){l(),s.value=!1},resume(){s.value=!0},stop:v}}function ae(e,t={}){const{window:o=S,scrollTarget:r}=t,i=h(!1);return oe(e,a=>{let u=i.value,c=0;for(const p of a)p.time>=c&&(c=p.time,u=p.isIntersecting);i.value=u},{root:r,window:o,threshold:0}),i}function se(e={}){const{window:t=S,behavior:o="auto"}=e;if(!t)return{x:h(0),y:h(0)};const r=h(t.scrollX),i=h(t.scrollY),a=C({get(){return r.value},set(c){scrollTo({left:c,behavior:o})}}),u=C({get(){return i.value},set(c){scrollTo({top:c,behavior:o})}});return Z(t,"scroll",()=>{r.value=t.scrollX,i.value=t.scrollY},{capture:!1,passive:!0}),{x:a,y:u}}const re={class:"w-full"},ne={class:"container mx-auto items-center flex justify-between"},ie={class:"p-1 h-32"},le=n("img",{src:H,class:"h-28 py-2"},null,-1),ce=n("div",{class:"grid grid-cols-3 gap-3"},[n("img",{class:"my-auto hover:shadow-md hover:p-2 transition-all duration-300 ease-in-out",width:"130px",src:P,alt:""}),n("img",{class:"my-auto hover:shadow-md hover:p-2 transition-all duration-300 ease-in-out",width:"120px",src:X,alt:""}),n("img",{class:"my-auto hover:shadow-md hover:p-2 transition-all duration-300 ease-in-out",width:"140px",src:Y,alt:""})],-1),ue={class:"container h-full"},pe={class:"inline-flex h-full"},fe={class:"ml-1"},de={class:"group-hover:block hidden absolute -bottom-100 left-0 bg-gray-50 transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-5 group-hover:z-40 z-0"},me={__name:"Header",setup(e){const{x:t,y:o}=se(),r=h(null);ae(r);const i=[{name:"Inicio",path:"/",icon:"fa-solid fa-home"},{name:"Nosotros",path:"#",icon:"fa-solid fa-users",group:[{name:"¿Quiénes somos?",path:"/quienes-somos"},{name:"Misíon y visíon",path:"/mision-vision"},{name:"Organigrama",path:"/organigrama"},{name:"Objetivos",path:"/objetivos"},{name:"Autoridades",path:"/autoridades"}]},{name:"Servicios",path:"#",icon:"fa-solid fa-hospital",group:[{name:"Especialidades médicas",path:"/especialidades-medicas"},{name:"Apoyo al diagnóstico",path:"/apoyo-al-diagnostico"},{name:"Oficinas administrativas",path:"/oficinas-administrativas"}]},{name:"Medicos",path:"/medicos",icon:"fa-solid fa-user-md"},{name:"Información al usuario",path:"#",icon:"fa-solid fa-info-circle",group:[{name:"Cartera de servicios",path:"/cartera-de-servicios"},{name:"Circuitos de atención",path:"/cirtucitos-de-atencion"},{name:"Noticias",path:"/noticias"},{name:"Campañas y eventos",path:"/campanas-y-eventos"}]},{name:"Informes y publicaciones",path:"#",icon:"fa-solid fa-file-alt",group:[{name:"Convocatorias",path:"/convocatorias"},{name:"Publicaciones",path:"/publicaciones"}]},{name:"Contactanos",path:"#",icon:"fa-solid fa-phone",group:[{name:"Correo institucional",path:"#"},{name:"Aula virtual",path:"#"}]}];return(a,u)=>{const c=O,p=O;return _(),g("header",re,[n("div",ne,[n("div",ie,[y(c,{to:"/"},{default:A(()=>[le]),_:1})]),ce]),n("div",{class:x(["bg-primary h-20",{"fixed top-0 left-0 w-full z-50":L(o)>128}]),ref_key:"target",ref:r},[n("nav",ue,[n("ul",pe,[(_(),g(k,null,j(i,(f,l)=>n("li",{key:l,class:x(["relative after:absolute group after:bg-gray-200 after:bottom-0 after:rounded-0 after:left-0 after:h-[5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",{"relative before:absolute before:bg-gray-50 before:rounded-0 before:bottom-0 before:left-0 before:h-[5px] before:w-full before:origin-bottom-left before:scale-x-100 before:transition-transform before:ease-in-out after:duration-300":(a._.provides[$]||a.$route).path===f.path}])},[y(p,{class:"h-full flex items-center px-3 text-white",to:f.path},{default:A(()=>[n("i",{class:x(f.icon)},null,2),n("span",fe,I(f.name),1)]),_:2},1032,["to"]),n("ul",de,[(_(!0),g(k,null,j(f.group,(s,d)=>(_(),g("li",{key:d,class:x(["relative after:absolute group after:bg-gray-200 after:bottom-0 after:rounded-0 after:left-0 after:h-[5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",{"bg-gray-100 text-primary":(a._.provides[$]||a.$route).path===s.path}])},[y(p,{to:s.path,class:x(["h-full flex items-center px-5 py-3 text-gray-900 hover:text-primary",{"text-primary":(a._.provides[$]||a.$route).path===s.path}])},{default:A(()=>[n("span",null,I(s.name),1)]),_:2},1032,["to","class"])],2))),128))])],2)),64))])])],2)])}}},he=me,ve={},_e={class:"bg-white"},ge=D('<div class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8"><nav class="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer"><div class="px-5 py-2"><a href="/" class="text-sm text-gray-500 hover:text-blue-600"> Inicio </a></div><div class="px-5 py-2"><a href="/medicos" class="text-sm text-gray-500 hover:text-blue-600"> Medicos </a></div><div class="px-5 py-2"><a href="/especialidades-medicas" class="text-sm text-gray-500 hover:text-blue-600"> Especialidades Medicas </a></div><div class="px-5 py-2"><a href="/noticias" class="text-sm text-gray-500 hover:text-blue-600"> Noticias </a></div><div class="px-5 py-2"><a href="/cartera-de-servicios" class="text-sm text-gray-500 hover:text-blue-600"> Cartera de Servicios </a></div><div class="px-5 py-2"><a href="/convocatorias" class="text-sm text-gray-500 hover:text-blue-600"> Convocatorias </a></div></nav><div class="flex justify-center mt-8 space-x-6"></div><p class="mt-8 text-center"><span class="mx-auto mt-2 text-sm text-gray-500"> Copyright © 2023 </span></p></div>',1),xe=[ge];function ye(e,t){return _(),g("footer",_e,xe)}const be=U(ve,[["render",ye]]);const we=n("i",{class:"fa-solid fa-arrow-up"},null,-1),Ce=[we],$e={__name:"default",setup(e){const t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(o,r)=>{const i=he,a=be;return _(),g(k,null,[y(i),G(o.$slots,"default"),y(a),n("button",{class:"fixed bottom-2 right-2 p-3 rounded-lg bg-primary text-white",onClick:t},Ce)],64)}}};export{$e as default};
