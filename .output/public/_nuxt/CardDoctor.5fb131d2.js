import{r as m,o as a,c as i,a as t,F as h,n as g,t as o,s,E as v}from"./entry.b8c5d436.js";const w={class:"container__cards"},y={class:"cover"},k=["src"],C=t("div",{class:"img__back bg-cover w-full h-48 absolute bottom-0 left-0 border-b-8 border-white rounded-b-lg transition-all duration-300 hover:bottom-8"},null,-1),M={class:"description bg-white shadow-lg mt-10 p-5 rounded-b-lg transition-all duration-300 hover:py-10"},z={class:"mt-2 uppercase"},D=["onClick"],j={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},B={class:"relative w-auto my-6 mx-auto max-w-6xl"},V={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},$={class:"relative flex items-start justify-between p-2 border-b border-solid border-blueGray-200 rounded-t"},E={class:"relative flex-auto"},F=t("i",{class:"fas fa-times"},null,-1),N=[F],P={class:"p-5"},q={class:"flex font-sans"},A={class:"flex-none w-48 relative"},G=["src"],L={class:"flex-auto p-6"},S={class:"flex flex-wrap"},H={class:"flex-auto text-lg font-semibold text-slate-900"},I={class:"text-lg font-semibold text-slate-500"},J={class:"w-full flex-none text-sm font-medium text-slate-700 mt-2"},K=t("div",{class:"flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"},null,-1),O=t("div",{class:"flex space-x-4 mb-6 text-sm font-medium"},null,-1),Q={class:"text-sm text-slate-700"},R={__name:"CardDoctor",props:{items:{type:Array,required:!0}},setup(b){const r=m(!1),l=m({}),c=()=>{r.value=!r.value},x=d=>{l.value=d,c()};return(d,n)=>{var u,_;return a(),i(h,null,[t("div",w,[(a(!0),i(h,null,g(b.items,(e,p)=>(a(),i("div",{key:p,class:"card transition-all duration-300 transform hover:scale-105"},[t("div",y,[t("img",{src:e.photo_url,alt:"",class:"w-48 mx-auto relative top-10 z-10 filter drop-shadow-md transition-all duration-400 transform hover:top-0 hover:filter-none"},null,8,k),C]),t("div",M,[t("h2",z,o(e.full_name),1),t("p",null,o(e.specialty_name),1),t("p",null,"CMP: "+o(e.registration_code),1),t("a",{href:"#",onClick:n[0]||(n[0]=(...f)=>d.toggle&&d.toggle(...f)),class:"inline-blockw-full"},[t("button",{onClick:f=>x(e),class:"py-2 px-4 mt-4 bg-red-700 text-white text-sm rounded-md transition-all duration-300 hover:bg-red-800 hover:shadow-md w-full"}," Ver Detalles ",8,D)])])]))),128))]),s(r)?(a(),i("div",j,[t("div",B,[t("div",V,[t("div",$,[t("div",E,[t("button",{class:"top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:n[1]||(n[1]=e=>c())},N)])]),t("div",P,[t("div",q,[t("div",A,[t("img",{src:s(l).photo_url,alt:"",class:"absolute inset-0 w-full h-full object-contain",loading:"lazy"},null,8,G)]),t("form",L,[t("div",S,[t("h3",H,o((u=s(l))==null?void 0:u.full_name),1),t("div",I," CMP: "+o(s(l).registration_code),1),t("div",J,o((_=s(l))==null?void 0:_.specialty_name),1)]),K,O,t("p",Q,o(s(l).description),1)])])])])])])):v("",!0),s(r)?(a(),i("div",{key:1,class:"opacity-25 fixed inset-0 z-40 bg-black",onClick:n[2]||(n[2]=e=>c())})):v("",!0)],64)}}},U=R;export{U as _};