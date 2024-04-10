import{_ as x,a as f,b as u,c as v,d as h,e as w,f as y,g as b,h as B,i as k,j as S,k as L}from"./Vuetify@logo-kOvv89zl.js";import{_ as P,c as o,a as t,t as g,F as i,r as p,b as _,d as V,o as a,n as j}from"./index-sowVAk3T.js";const H="/assets/Developer_Zero-B8gSNUct.png",N={name:"HomeView",data(){return{name:"Eusebio Pizarro",know:["Frontend Developer","Backend Developer"],description:"Soy desarrollador, que disfruta creando soluciones digitales, resolviendo problemas y diseñando experiencias únicas para los usuarios.",skylls:[{title:"Frontend",color:"bg-primary/20 text-primary",data:[{name:"Html@logo.svg",alt:"Html"},{name:"Css@logo.svg",alt:"Css"},{name:"JavaScript@logo.svg",alt:"JavaScript"},{name:"Vue@logo.svg",alt:"Vue"},{name:"Vuetify@logo.svg",alt:"Vuetify"},{name:"Tailwindcss@logo.svg",alt:"Tailwind"},{name:"Bootstrap@logo.svg",alt:"Bootstrap"}]},{title:"Backend",color:"bg-success/20 text-success",data:[{name:"Php@logo.svg",alt:"Php"},{name:"Node@logo.svg",alt:"Node"}]},{title:"Lenguajes de programación",color:"bg-warning/20 text-warning",data:[{name:"Java@logo.svg",alt:"Java"},{name:"Python@logo.svg",alt:"Python"}]},{title:"Base de datos",color:"bg-error/20 text-error",data:[{name:"MySQL@logo.svg",alt:"MySQL"}]}]}},mounted(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{getPhoto(){return H},getImageUrl:function(r){return new URL(Object.assign({"../assets/img/logos/Bootstrap@logo.svg":x,"../assets/img/logos/Css@logo.svg":f,"../assets/img/logos/Html@logo.svg":u,"../assets/img/logos/Java@logo.svg":v,"../assets/img/logos/JavaScript@logo.svg":h,"../assets/img/logos/MySQL@logo.svg":w,"../assets/img/logos/Node@logo.svg":y,"../assets/img/logos/Php@logo.svg":b,"../assets/img/logos/Python@logo.svg":B,"../assets/img/logos/Tailwindcss@logo.svg":k,"../assets/img/logos/Vue@logo.svg":S,"../assets/img/logos/Vuetify@logo.svg":L})[`../assets/img/logos/${r}`],import.meta.url).href},handleScroll(){this.applyAnimation("transition-to-r","-translate-x-full","transition-slide-0"),this.applyAnimation("transition-to-l","translate-x-full","transition-slide-0"),this.applyAnimation("transition-up","scale-50","transition-scale-100")},applyAnimation(r,d,m){const e=document.getElementsByClassName(r);for(var s=0;s<e.length;s++){const c=window.innerHeight,l=e[s].getBoundingClientRect().top,n=e[s].getBoundingClientRect().bottom;l<c&&n>=0?(e[s].classList.add(m),e[s].classList.remove(d)):(e[s].classList.add(d),e[s].classList.remove(m))}}}},A={class:"w-full min-h-screen flex flex-col sm:flex-row items-center gap-5 px-5 md:px-10 lg:px-16 overflow-hidden"},C={class:"w-full sm:w-1/2 md:w-1/2 flex flex-col gap-3 pt-20 md:pt-10 lg:pt-16 text-secondary select-none transition-props transition-to-r -translate-x-full"},E={class:"mb-2 text-center sm:text-left"},D={class:"py-2 px-3 bg-primary/10 text-primary text-sm sm:text-base italic font-bold uppercase rounded-md"},J={class:"overflow-hidden relative text-center sm:text-left h-12 pt-[5px] -mt-[5px]"},T={class:"animate-flip-text"},F={class:"py-0 px-3 h-[25px] mb-[25px] block text-default text-xl md:text-3xl text-shadow font-bold transition-all"},I={class:"text-sm sm:text-lg lg:text-xl text-center sm:text-left text-secondary font-bold"},U=t("div",{class:"flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mt-3"},[t("a",{href:"about",class:"btn btn-outlined-primary rounded-full"}," Acerca de mí "),t("a",{href:"/projects",class:"btn btn-primary rounded-full"},[_(" Proyectos "),t("i",{class:"fa-solid fa-arrow-up-right-from-square ms-2"})])],-1),q={class:"w-full flex items-center justify-center sm:w-1/2 md:w-1/2 px-5 md:px-0 lg:px-5 py-5 sm:pt-10 transition-props transition-to-l translate-x-full"},z=["src"],M={class:"w-full min-h-screen flex flex-col justify-center items-center gap-5 py-3 px-10 overflow-hidden"},Q=t("div",{class:"flex flex-col items-center gap-5 p-1 text-4xl text-black/75 dark:text-white/75 font-bold transition-props transition-up scale-50"},[_(" HABILIDADES "),t("span",{class:"w-10 h-1.5 bg-default rounded"})],-1),R=t("span",{class:"max-w-4xl text-center text-secondary font-medium select-none transition-props transition-up scale-50"}," Aquí encontrará información sobre mis habilidades y conocimientos actuales, principalmente en términos de programación y tecnología. ",-1),Z={class:"max-w-3xl flex justify-center flex-wrap gap-2 pt-10 rounded transition-props transition-up scale-50"},O=V('<div class="w-full flex flex-wrap justify-center gap-x-3 gap-y-1 mb-5"><span class="flex gap-1 items-center text-primary text-sm font-medium tracking-tight"><i class="fa-solid fa-circle text-2xs"></i>Frontend </span><span class="flex gap-1 items-center text-success text-sm font-medium tracking-tight"><i class="fa-solid fa-circle text-2xs"></i>Backend </span><span class="flex gap-1 items-center text-warning text-sm font-medium tracking-tight"><i class="fa-solid fa-circle text-2xs"></i>Lenguajes de programación </span><span class="flex gap-1 items-center text-error text-sm font-medium tracking-tight"><i class="fa-solid fa-circle text-2xs"></i>Base de datos </span></div>',1),G=["src","alt"];function K(r,d,m,e,s,c){return a(),o(i,null,[t("div",A,[t("div",C,[t("div",E,[t("span",D," Hola soy "+g(s.name),1)]),t("div",J,[t("ul",T,[(a(!0),o(i,null,p(s.know,l=>(a(),o("li",F,g(l),1))),256))])]),t("span",I,g(s.description),1),U]),t("div",q,[t("img",{src:c.getPhoto(),class:"object-fill w-4/5 sm:w-full md:w-4/5",alt:"Pizarro Ep"},null,8,z)])]),t("div",M,[Q,R,t("div",Z,[O,(a(!0),o(i,null,p(s.skylls,l=>(a(),o(i,null,[(a(!0),o(i,null,p(l.data,n=>(a(),o("span",{class:j(["flex gap-2 p-2 font-medium rounded select-none",l.color])},[t("img",{src:c.getImageUrl(n.name),alt:n.alt,class:"w-5"},null,8,G),_(" "+g(n.alt),1)],2))),256))],64))),256))])])],64)}const $=P(N,[["render",K]]);export{$ as default};
