import{_ as x,c as o,a,F as c,r as m,d as u,b as f,o as i,n as g,t as h}from"./index-DKaZuem0.js";const y={data(){return{skylls,email:"pizarroe022@gmail.com",copied:!1}},mounted(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{copyEmail:function(){const e=document.createElement("input");e.style.position="fixed",e.style.opacity=0,e.value=this.email,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.copied=!0,setTimeout(()=>{this.copied=!1},3e3)},handleScroll(){this.applyAnimation("transition-up","scale-50","transition-scale-100")},applyAnimation(e,r,d){const s=document.getElementsByClassName(e);for(var t=0;t<s.length;t++){const p=window.innerHeight,l=s[t].getBoundingClientRect().top,n=s[t].getBoundingClientRect().bottom;l<p&&n>=0?(s[t].classList.add(d),s[t].classList.remove(r)):(s[t].classList.add(r),s[t].classList.remove(d))}}}},w=u('<div class="w-full min-h-screen flex flex-col justify-center items-center gap-10 px-5 md:px-10 lg:px-16 pt-10 md:pt-0 overflow-hidden"><div class="flex flex-col items-center gap-3 transition-props transition-up scale-50"><span class="text-black/90 dark:text-white/90 text-center text-3xl font-bold uppercase"> ¿Qué puedo hacer? </span><span class="w-10 h-1.5 bg-default rounded"></span><span class="max-w-3xl text-secondary text-center font-medium mt-5"> En la actualidad, me dedico al diseño y el desarrollo de sitios de aplicaciones web y de escritorio, tanto en el lado del cliente como en el del servidor. Me mantengo constantemente actualizado, adquiriendo nuevos conocimientos en función de las demandas y tendencias tecnológicas del mercado actual y futuro en el campo del diseño, desarrollo de aplicaciones web y de escritorio en general. Me siento muy motivado por mi trabajo, ya que puedo aportar mis conocimientos, habilidades, ofrecer nuevas ideas, soluciones personalizadas, y asegurarme de que se cumplan los estándares de calidad en cada proyecto que realizo, ayudando así a los clientes a lograr sus objetivos. </span></div></div>',1),v={class:"w-full min-h-screen flex flex-col justify-center items-center gap-5 py-3 px-10 overflow-hidden"},_=a("div",{class:"flex flex-col items-center gap-5 p-1 text-4xl text-black/75 dark:text-white/75 font-bold transition-props transition-up scale-50"},[f(" HABILIDADES "),a("span",{class:"w-10 h-1.5 bg-default rounded"})],-1),b=a("span",{class:"max-w-4xl text-center text-secondary font-medium select-none transition-props transition-up scale-50"}," Aquí encontrará información sobre mis habilidades y conocimientos actuales, principalmente en términos de programación y tecnología. ",-1),k={class:"max-w-3xl flex justify-center flex-wrap gap-2 pt-10 rounded transition-props transition-up scale-50"},B=u('<div class="w-full flex flex-wrap justify-center gap-x-3 gap-y-1 mb-5"><span class="flex gap-1 items-center text-primary text-sm font-medium tracking-tight"><i class="fa-solid fa-circle text-2xs"></i>Frontend </span><span class="flex gap-1 items-center text-success text-sm font-medium tracking-tight"><i class="fa-solid fa-circle text-2xs"></i>Backend </span><span class="flex gap-1 items-center text-warning text-sm font-medium tracking-tight"><i class="fa-solid fa-circle text-2xs"></i>Lenguajes de programación </span><span class="flex gap-1 items-center text-error text-sm font-medium tracking-tight"><i class="fa-solid fa-circle text-2xs"></i>Base de datos </span></div>',1),L=["src","alt"];function E(e,r,d,s,t,p){return i(),o(c,null,[w,a("div",v,[_,b,a("div",k,[B,(i(!0),o(c,null,m(t.skylls,l=>(i(),o(c,null,[(i(!0),o(c,null,m(l.data,n=>(i(),o("span",{class:g(["flex gap-2 p-2 font-medium rounded select-none",l.color])},[a("img",{src:e.getImageUrl(n.name),alt:n.alt,class:"w-5"},null,8,L),f(" "+h(n.alt),1)],2))),256))],64))),256))])])],64)}const S=x(y,[["render",E]]);export{S as default};
