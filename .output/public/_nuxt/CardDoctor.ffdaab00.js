import{o as e,c as r,F as d,n as _,a as t,t as s}from"./entry.356ef29d.js";const u={class:"container__cards"},p={class:"cover"},h=["src"],m=t("div",{class:"img__back bg-cover w-full h-48 absolute bottom-0 left-0 border-b-8 border-white rounded-b-lg transition-all duration-300 hover:bottom-8"},null,-1),g={class:"description bg-white shadow-lg mt-10 p-5 rounded-b-lg transition-all duration-300 hover:py-10"},b={class:"mt-2 uppercase"},v=t("button",{class:"py-2 px-4 mt-4 bg-red-700 text-white text-sm rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-700"}," Ver Detalles ",-1),f=[v],y={__name:"CardDoctor",props:{items:{type:Array,required:!0}},setup(l){return(n,a)=>(e(),r("div",u,[(e(!0),r(d,null,_(l.items,(o,i)=>(e(),r("div",{key:i,class:"card transition-all duration-300 transform hover:scale-105"},[t("div",p,[t("img",{src:o.photo_url,alt:"",class:"w-48 mx-auto relative top-10 z-10 filter drop-shadow-md transition-all duration-400 transform hover:top-0 hover:filter-none"},null,8,h),m]),t("div",g,[t("h2",b,s(o.full_name),1),t("p",null,s(o.specialty_name),1),t("p",null,"CMP: "+s(o.registration_code),1),t("a",{href:"#",onClick:a[0]||(a[0]=(...c)=>n.toggle&&n.toggle(...c)),class:"inline-block"},f)])]))),128))]))}},k=y;export{k as _};
