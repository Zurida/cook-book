import{n as k,o,c as i,t as v,r as u,a as t,F as f,s as $,J as h,z as y,q as m,E as A,D as B,b as D,w as F,d as V}from"./DmMZ6FQP.js";import{_ as C}from"./DlAUqK2U.js";import{_ as b}from"./D-Z_2B0R.js";import{_ as N}from"./Bp8lVPVE.js";import{u as S}from"./Cs4zP8Ms.js";import"./6MTvc8b6.js";import"./D1l9REAm.js";const T=k({__name:"CollapseItem",props:{item:{}},emits:["click"],setup(d,{emit:e}){const n=e;return(l,a)=>(o(),i("li",{onClick:a[0]||(a[0]=c=>n("click"))},v(l.item.name),1))}}),z=C(T,[["__scopeId","data-v-5c21150d"]]),E={class:"collapse"},R={class:"collapse__title"},q={class:"collapse__dropdown"},G={class:"collapse__list"},J=k({__name:"Collapse",props:{category:{}},emits:["click"],setup(d,{emit:e}){let n=u(0);const l=e;function a(c){n.value=c}return(c,p)=>{const g=z;return o(),i("div",E,[t("div",{class:"collapse__heading",onClick:p[0]||(p[0]=r=>l("click"))},[t("div",R,v(c.category.text),1)]),t("div",q,[t("ul",G,[(o(!0),i(f,null,$(c.category.subcategories,r=>(o(),h(g,{item:r,class:y({"is-active":r.id===m(n)}),onClick:s=>a(r.id)},null,8,["item","class","onClick"]))),256))])])])}}}),L=C(J,[["__scopeId","data-v-37e034ef"]]),P=d=>{const e=new Date(d);return new Intl.DateTimeFormat("ru-RU",{dateStyle:"long"}).format(e)},U=["href"],X={class:"card__description"},Y={class:"card__date"},j=["title"],H={class:"card__tags"},K=k({__name:"Card",props:{card:{},to:{}},setup(d){return(e,n)=>{const l=N;return o(),i("a",{href:e.to,class:"card"},[n[0]||(n[0]=t("div",{class:"card__image"},null,-1)),t("div",X,[t("div",Y,"Добавлено: "+v(m(P)(e.card.createdAt)),1),t("h3",{class:"card__title",title:e.card.title},v(e.card.title),9,j),t("div",H,[(o(!0),i(f,null,$(e.card.tags,a=>(o(),h(l,{key:a,tag:a},null,8,["tag"]))),128))])])],8,U)}}}),M=C(K,[["__scopeId","data-v-da473f56"]]),O={class:"home"},Q={class:"aside reverse"},W={class:"aside__container"},Z={class:"main"},tt={class:"actions"},et={class:"cards"},st={__name:"index",async setup(d){let e,n;const l=A(),{data:a}=([e,n]=B(()=>S("/api/recipe","$PslAyef5YX")),e=await e,n(),e);let c=u(0);u("");const p=u(a);async function g(r){c.value=r.id;try{const s=await $fetch(`/api/filterRecipes?category=${r.value}`);p.value=s}catch(s){console.log(s)}}return(r,s)=>{const I=L,w=b,x=M;return o(),i("div",O,[t("aside",Q,[s[0]||(s[0]=t("h2",null,"Категории",-1)),t("div",W,[(o(!0),i(f,null,$(m(l).categories,_=>(o(),h(I,{category:_,class:y({"is-visible":_.id===m(c)}),onClick:ot=>g(_)},null,8,["category","class","onClick"]))),256))])]),t("div",Z,[s[3]||(s[3]=t("header",null,[t("h1",null,"Доска рецептов")],-1)),t("div",tt,[D(w,{small:"",to:"/create",class:"actions__link"},{default:F(()=>s[1]||(s[1]=[V("+ Добавить рецепт")])),_:1}),s[2]||(s[2]=t("div",{class:"actions__search search"},null,-1))]),t("div",et,[(o(!0),i(f,null,$(m(p),_=>(o(),h(x,{card:_,to:`/recipe/${_.id}`},null,8,["card","to"]))),256))])])])}}},dt=C(st,[["__scopeId","data-v-4c5a1578"]]);export{dt as default};