import{a as G,J as k,r as D,K as X,L as Y,M as Q,N as Z,F as ee,O as N,P as te,Q as z,I as se,R as re,i as ae,S as ne,T as ie,U as B,d as K,t as S,v as $,y as j,_ as R,x as g,V as E,W as V,X as A,Y as q,Z as oe,$ as ce}from"./1nd5GeGG.js";const L=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function le(r,a){a?a={...L,...a}:a=L;const s=W(a);return s.dispatch(r),s.toString()}const ue=Object.freeze(["prototype","__proto__","constructor"]);function W(r){let a="",s=new Map;const t=e=>{a+=e};return{toString(){return a},getContext(){return s},dispatch(e){return r.replacer&&(e=r.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let i="";const f=n.length;f<10?i="unknown:["+n+"]":i=n.slice(8,f-1),i=i.toLowerCase();let c=null;if((c=s.get(e))===void 0)s.set(e,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):r.ignoreUnknown||this.unkown(e,i);else{let l=Object.keys(e);r.unorderedObjects&&(l=l.sort());let h=[];r.respectType!==!1&&!T(e)&&(h=ue),r.excludeKeys&&(l=l.filter(u=>!r.excludeKeys(u)),h=h.filter(u=>!r.excludeKeys(u))),t("object:"+(l.length+h.length)+":");const o=u=>{this.dispatch(u),t(":"),r.excludeValues||this.dispatch(e[u]),t(",")};for(const u of l)o(u);for(const u of h)o(u)}},array(e,n){if(n=n===void 0?r.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const c of e)this.dispatch(c);return}const i=new Map,f=e.map(c=>{const l=W(r);l.dispatch(c);for(const[h,o]of l.getContext())i.set(h,o);return l.toString()});return s=i,f.sort(),this.array(f,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),T(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,r.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const J="[native code] }",de=J.length;function T(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-de)===J}var fe=Object.defineProperty,he=(r,a,s)=>a in r?fe(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,O=(r,a,s)=>(he(r,typeof a!="symbol"?a+"":a,s),s);class v{constructor(a,s){O(this,"words"),O(this,"sigBytes"),a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||pe).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const t=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=t<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new v([...this.words])}}const pe={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const t=r.words[s>>>2]>>>24-s%4*8&255;a.push((t>>>4).toString(16),(t&15).toString(16))}return a.join("")}},ye={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,n=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,f=e<<16|n<<8|i;for(let c=0;c<4&&t*8+c*6<r.sigBytes*8;c++)s.push(a.charAt(f>>>6*(3-c)&63))}return s.join("")}},_e={parse(r){const a=r.length,s=[];for(let t=0;t<a;t++)s[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new v(s,a)}},ge={parse(r){return _e.parse(unescape(encodeURIComponent(r)))}};class me{constructor(){O(this,"_data",new v),O(this,"_nDataBytes",0),O(this,"_minBufferSize",0),O(this,"blockSize",512/32)}reset(){this._data=new v,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=ge.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,t=this._data.sigBytes/(this.blockSize*4);a?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,e),this._data.sigBytes-=n}return new v(s,n)}}class ve extends me{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}var we=Object.defineProperty,be=(r,a,s)=>a in r?we(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,Be=(r,a,s)=>(be(r,a+"",s),s);const H=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],De=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class Se extends ve{constructor(){super(...arguments),Be(this,"_hash",new v([...H]))}reset(){super.reset(),this._hash=new v([...H])}_doProcessBlock(a,s){const t=this._hash.words;let e=t[0],n=t[1],i=t[2],f=t[3],c=t[4],l=t[5],h=t[6],o=t[7];for(let u=0;u<64;u++){if(u<16)b[u]=a[s+u]|0;else{const d=b[u-15],w=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,_=b[u-2],U=(_<<15|_>>>17)^(_<<13|_>>>19)^_>>>10;b[u]=w+b[u-7]+U+b[u-16]}const C=c&l^~c&h,x=e&n^e&i^n&i,P=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),p=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),m=o+p+C+De[u]+b[u],y=P+x;o=h,h=l,l=c,c=f+m|0,f=i,i=n,n=e,e=m+y|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+i|0,t[3]=t[3]+f|0,t[4]=t[4]+c|0,t[5]=t[5]+l|0,t[6]=t[6]+h|0,t[7]=t[7]+o|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(t+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Ce(r){return new Se().finalize(r).toString(ye)}function xe(r,a={}){const s=typeof r=="string"?r:le(r,a);return Ce(s).slice(0,10)}const Pe=r=>r==="defer"||r===!1;function ke(...r){var P;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,t,e={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=G(),i=t,f=()=>k.value,c=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];e.server=e.server??!0,e.default=e.default??f,e.getCachedData=e.getCachedData??c,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??k.deep,e.dedupe=e.dedupe??"cancel";const l=e.getCachedData(s,n),h=l!=null;if(!n._asyncData[s]||!e.immediate){(P=n.payload._errors)[s]??(P[s]=k.errorValue);const p=e.deep?D:X;n._asyncData[s]={data:p(h?l:e.default()),pending:D(!h),error:Y(n.payload._errors,s),status:D("idle"),_default:e.default}}const o={...n._asyncData[s]};delete o._default,o.refresh=o.execute=(p={})=>{if(n._asyncDataPromises[s]){if(Pe(p.dedupe??e.dedupe))return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if(p._initial||n.isHydrating&&p._initial!==!1){const y=p._initial?l:e.getCachedData(s,n);if(y!=null)return Promise.resolve(y)}o.pending.value=!0,o.status.value="pending";const m=new Promise((y,d)=>{try{y(i(n))}catch(w){d(w)}}).then(async y=>{if(m.cancelled)return n._asyncDataPromises[s];let d=y;e.transform&&(d=await e.transform(y)),e.pick&&(d=$e(d,e.pick)),n.payload.data[s]=d,o.data.value=d,o.error.value=k.errorValue,o.status.value="success"}).catch(y=>{if(m.cancelled)return n._asyncDataPromises[s];o.error.value=te(y),o.data.value=z(e.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=m,n._asyncDataPromises[s]},o.clear=()=>Oe(n,s);const u=()=>o.refresh({_initial:!0}),C=e.server!==!1&&n.payload.serverRendered;{const p=se();if(p&&!p._nuxtOnBeforeMountCbs){p._nuxtOnBeforeMountCbs=[];const d=p._nuxtOnBeforeMountCbs;Q(()=>{d.forEach(w=>{w()}),d.splice(0,d.length)}),Z(()=>d.splice(0,d.length))}C&&n.isHydrating&&(o.error.value||l!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):p&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?p._nuxtOnBeforeMountCbs.push(u):e.immediate&&u();const m=re();if(e.watch){const d=ee(e.watch,()=>o.refresh());m&&N(d)}const y=n.hook("app:data:refresh",async d=>{(!d||d.includes(s))&&await o.refresh()});m&&N(y)}const x=Promise.resolve(n._asyncDataPromises[s]).then(()=>o);return Object.assign(x,o),x}function Oe(r,a){a in r.payload.data&&(r.payload.data[a]=void 0),a in r.payload._errors&&(r.payload._errors[a]=k.errorValue),r._asyncData[a]&&(r._asyncData[a].data.value=void 0,r._asyncData[a].error.value=k.errorValue,r._asyncData[a].pending.value=!1,r._asyncData[a].status.value="idle"),a in r._asyncDataPromises&&(r._asyncDataPromises[a]&&(r._asyncDataPromises[a].cancelled=!0),r._asyncDataPromises[a]=void 0)}function $e(r,a){const s={};for(const t of a)s[t]=r[t];return s}function ze(r,a,s){const[t={},e]=[{},a],n=ae(()=>B(r)),i=t.key||xe([e,typeof n.value=="string"?n.value:"",...Fe(t)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);const f=i===e?"$f"+i:i;if(!t.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:l,default:h,transform:o,pick:u,watch:C,immediate:x,getCachedData:P,deep:p,dedupe:m,...y}=t,d=ne({...ie,...y,cache:typeof t.cache=="boolean"?void 0:t.cache}),w={server:c,lazy:l,default:h,transform:o,pick:u,immediate:x,getCachedData:P,deep:p,dedupe:m,watch:C===!1?[]:[d,n,...C||[]]};let _;return ke(f,()=>{var M;(M=_==null?void 0:_.abort)==null||M.call(_,"Request aborted as another request to the same endpoint was initiated."),_=typeof AbortController<"u"?new AbortController:{};const I=B(t.timeout);let F;return I&&(F=setTimeout(()=>_.abort("Request aborted due to timeout."),I),_.signal.onabort=()=>clearTimeout(F)),(t.$fetch||globalThis.$fetch)(n.value,{signal:_.signal,...d}).finally(()=>{clearTimeout(F)})},w)}function Fe(r){var s;const a=[((s=B(r.method))==null?void 0:s.toUpperCase())||"GET",B(r.baseURL)];for(const t of[r.params||r.query]){const e=B(t);if(!e)continue;const n={};for(const[i,f]of Object.entries(e))n[B(i)]=B(f);a.push(n)}return a}const Re=K({__name:"CollapseItem",props:{item:{}},emits:["click"],setup(r,{emit:a}){const s=a;return(t,e)=>(S(),$("li",{onClick:e[0]||(e[0]=n=>s("click"))},j(t.item.name),1))}}),Ue=R(Re,[["__scopeId","data-v-5c21150d"]]),Ie={class:"collapse"},Me={class:"collapse__title"},Ne={class:"collapse__dropdown"},Le={class:"collapse__list"},Te=K({__name:"Collapse",props:{category:{}},emits:["click"],setup(r,{emit:a}){let s=D(0);const t=a;function e(n){s.value=n}return(n,i)=>{const f=Ue;return S(),$("div",Ie,[g("div",{class:"collapse__heading",onClick:i[0]||(i[0]=c=>t("click"))},[g("div",Me,j(n.category.text),1)]),g("div",Ne,[g("ul",Le,[(S(!0),$(E,null,V(n.category.subcategories,c=>(S(),A(f,{item:c,class:q({"is-active":c.id===z(s)}),onClick:l=>e(c.id)},null,8,["item","class","onClick"]))),256))])])])}}}),He=R(Te,[["__scopeId","data-v-37e034ef"]]),Ke=oe("categoryStore",{state:()=>({categories:[]}),actions:{async fetch(){try{const r=await $fetch("/api/category");this.categories=r}catch(r){console.log(r)}}}}),je={class:"home"},Ee={class:"aside reverse"},Ve={class:"aside__container"},Ae={__name:"index",async setup(r){let a,s;const t=Ke(),{data:e}=([a,s]=ce(()=>ze("/api/recipe","$PslAyef5YX")),a=await a,s(),a);let n=D(0);D("");const i=D(e);async function f(c){n.value=c.id;try{const l=await $fetch(`/api/filterRecipes?category=${c.value}`);i.value=l}catch(l){console.log(l)}}return(c,l)=>{const h=He;return S(),$("div",je,[g("aside",Ee,[l[0]||(l[0]=g("h2",null,"Категории",-1)),g("div",Ve,[(S(!0),$(E,null,V(z(t).categories,o=>(S(),A(h,{category:o,class:q({"is-visible":o.id===z(n)}),onClick:u=>f(o)},null,8,["category","class","onClick"]))),256))])]),l[1]||(l[1]=g("div",{class:"main"},[g("header",null,[g("h1",null,"Доска рецептов")]),g("div",{class:"actions"},[g("div",{class:"actions__search search"})]),g("div",{class:"cards"})],-1))])}}},Je=R(Ae,[["__scopeId","data-v-d684bbcf"]]);export{Je as default};