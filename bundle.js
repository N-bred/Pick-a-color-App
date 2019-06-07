var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function r(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function s(e){return document.createTextNode(e)}function p(){return s(" ")}function d(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function m(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function f(e){return""===e?void 0:+e}function g(e,t){t=""+t,e.data!==t&&(e.data=t)}function h(e,t,n){e.style.setProperty(t,n)}let v;function $(e){v=e}const _=[],b=Promise.resolve();let x=!1;const y=[],N=[],k=[];function C(e){N.push(e)}function w(){const e=new Set;do{for(;_.length;){const e=_.shift();$(e),T(e.$$)}for(;y.length;)y.shift()();for(;N.length;){const t=N.pop();e.has(t)||(t(),e.add(t))}}while(_.length);for(;k.length;)k.pop()();x=!1}function T(e){e.fragment&&(e.update(e.dirty),a(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(C))}function j(e,n,o){const{fragment:i,on_mount:c,on_destroy:l,after_render:u}=e.$$;i.m(n,o),C(()=>{const n=c.map(t).filter(r);l?l.push(...n):a(n),e.$$.on_mount=[]}),u.forEach(C)}function D(e,t){e.$$.dirty||(_.push(e),x||(x=!0,b.then(w)),e.$$.dirty=n()),e.$$.dirty[t]=!0}function E(t,r,o,i,c,l){const u=v;$(t);const s=r.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:null};let d=!1;var m;p.ctx=o?o(t,s,(e,n)=>{p.ctx&&c(p.ctx[e],p.ctx[e]=n)&&(p.bound[e]&&p.bound[e](n),d&&D(t,e))}):s,p.update(),d=!0,a(p.before_render),p.fragment=i(p.ctx),r.target&&(r.hydrate?p.fragment.l((m=r.target,Array.from(m.childNodes))):p.fragment.c(),r.intro&&t.$$.fragment.i&&t.$$.fragment.i(),j(t,r.target,r.anchor),w()),$(u)}class A{$destroy(){var t,n;n=!0,(t=this).$$&&(a(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function P(t){var n,r,o,m,f,v,$,_,b,x,y,N,k,C;return{c(){n=u("div"),r=p(),o=u("div"),m=u("p"),f=s("Color in RGBA:\r\n    "),v=u("span"),$=s("rgba"),_=s(t.rgbaNoText),b=p(),x=u("p"),y=s("Color in HEX:\r\n    "),N=u("span"),k=s(t.hex),n.className="canvas svelte-1u0yjwn",h(n,"background",t.rgba),v.className="select-color svelte-1u0yjwn",h(v,"color",t.makeColorDarker(t.rgbaNoText)),m.className="info__text svelte-1u0yjwn",N.className="select-color svelte-1u0yjwn",h(N,"color",t.makeColorDarker(t.rgbaNoText)),x.className="info__text svelte-1u0yjwn",o.className="info svelte-1u0yjwn",C=[d(v,"click",t.click_handler),d(N,"click",t.click_handler_1)]},m(e,t){c(e,n,t),c(e,r,t),c(e,o,t),i(o,m),i(m,f),i(m,v),i(v,$),i(v,_),i(o,b),i(o,x),i(x,y),i(x,N),i(N,k)},p(e,t){e.rgba&&h(n,"background",t.rgba),e.rgbaNoText&&g(_,t.rgbaNoText),(e.makeColorDarker||e.rgbaNoText)&&h(v,"color",t.makeColorDarker(t.rgbaNoText)),e.hex&&g(k,t.hex),(e.makeColorDarker||e.rgbaNoText)&&h(N,"color",t.makeColorDarker(t.rgbaNoText))},i:e,o:e,d(e){e&&(l(n),l(r),l(o)),a(C)}}}function S(e,t,n){let{r:a,g:r,b:o,opacity:i}=t;const c=(e,t,n)=>{return(e=>{let t=Number(e).toString(16);return t.length<2&&(t="0"+t),t})(e)},l=e=>{(e=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})(e),alert("Color copied!")};let u,s,p;return e.$set=(e=>{"r"in e&&n("r",a=e.r),"g"in e&&n("g",r=e.g),"b"in e&&n("b",o=e.b),"opacity"in e&&n("opacity",i=e.opacity)}),e.$$.update=((e={r:1,g:1,b:1,opacity:1})=>{(e.r||e.g||e.b||e.opacity)&&n("rgba",u=`rgba(${a},${r},${o},${i})`),(e.r||e.g||e.b||e.opacity)&&n("rgbaNoText",s=`(${a},${r},${o},${i})`),(e.r||e.g||e.b)&&n("hex",p=`#${c(a)}${c(r)}${c(o)}`)}),{r:a,g:r,b:o,opacity:i,makeColorDarker:e=>{const t=e.replace("(","").replace(")","").split(",");return t[t.length-1]="1",`rgba(${t.join(",")})`},alertCopied:l,rgba:u,rgbaNoText:s,hex:p,click_handler:function(){return l(u)},click_handler_1:function(){return l(p)}}}class B extends A{constructor(e){super(),E(this,e,S,P,o,["r","g","b","opacity"])}}function O(e){var t,n,r,o,s,f,g,h,v,$,_,b,x,y,N,k,C,w,T,D,E,A,P,S,O,G,L,R,q,F,H,J,M,X,Y,z=new B({props:{r:e.r,g:e.g,b:e.b,opacity:e.opacity}});return{c(){(t=u("h1")).textContent="Pick a color",n=p(),r=u("div"),o=u("div"),s=u("div"),(f=u("p")).textContent="Red",g=p(),h=u("input"),v=p(),$=u("input"),_=p(),b=u("div"),(x=u("p")).textContent="Green",y=p(),N=u("input"),k=p(),C=u("input"),w=p(),T=u("div"),(D=u("p")).textContent="Blue",E=p(),A=u("input"),P=p(),S=u("input"),O=p(),G=u("div"),(L=u("p")).textContent="Opacity",R=p(),q=u("input"),F=p(),H=u("input"),J=p(),M=u("div"),z.$$.fragment.c(),t.className="title svelte-1xpfmda",f.className="svelte-1xpfmda",h.className=" range range-red svelte-1xpfmda",m(h,"type","range"),h.min="0",h.max="255",h.step="1",m($,"type","number"),$.min="0",$.max="255",$.className="svelte-1xpfmda",s.className="choose svelte-1xpfmda",x.className="svelte-1xpfmda",N.className=" range range-green svelte-1xpfmda",m(N,"type","range"),N.min="0",N.max="255",N.step="1",m(C,"type","number"),C.min="0",C.max="255",C.className="svelte-1xpfmda",b.className="choose svelte-1xpfmda",D.className="svelte-1xpfmda",A.className=" range range-blue svelte-1xpfmda",m(A,"type","range"),A.min="0",A.max="255",A.step="1",m(S,"type","number"),S.min="0",S.max="255",S.className="svelte-1xpfmda",T.className="choose svelte-1xpfmda",L.className="svelte-1xpfmda",q.className=" range range-opacity svelte-1xpfmda",m(q,"type","range"),q.min="0",q.max="1",q.step="0.1",m(H,"type","number"),H.step="0.1",H.min="0",H.max="1",H.className="svelte-1xpfmda",G.className="choose svelte-1xpfmda",o.className="wrapper svelte-1xpfmda",M.className="back svelte-1xpfmda",r.className="container svelte-1xpfmda",Y=[d(h,"change",e.input0_change_input_handler),d(h,"input",e.input0_change_input_handler),d($,"input",e.input1_input_handler),d(N,"change",e.input2_change_input_handler),d(N,"input",e.input2_change_input_handler),d(C,"input",e.input3_input_handler),d(A,"change",e.input4_change_input_handler),d(A,"input",e.input4_change_input_handler),d(S,"input",e.input5_input_handler),d(q,"change",e.input6_change_input_handler),d(q,"input",e.input6_change_input_handler),d(H,"input",e.input7_input_handler)]},m(a,l){c(a,t,l),c(a,n,l),c(a,r,l),i(r,o),i(o,s),i(s,f),i(s,g),i(s,h),h.value=e.r,i(s,v),i(s,$),$.value=e.r,i(o,_),i(o,b),i(b,x),i(b,y),i(b,N),N.value=e.g,i(b,k),i(b,C),C.value=e.g,i(o,w),i(o,T),i(T,D),i(T,E),i(T,A),A.value=e.b,i(T,P),i(T,S),S.value=e.b,i(o,O),i(o,G),i(G,L),i(G,R),i(G,q),q.value=e.opacity,i(G,F),i(G,H),H.value=e.opacity,i(r,J),i(r,M),j(z,M,null),X=!0},p(e,t){e.r&&(h.value=t.r),e.r&&($.value=t.r),e.g&&(N.value=t.g),e.g&&(C.value=t.g),e.b&&(A.value=t.b),e.b&&(S.value=t.b),e.opacity&&(q.value=t.opacity),e.opacity&&(H.value=t.opacity);var n={};e.r&&(n.r=t.r),e.g&&(n.g=t.g),e.b&&(n.b=t.b),e.opacity&&(n.opacity=t.opacity),z.$set(n)},i(e){X||(z.$$.fragment.i(e),X=!0)},o(e){z.$$.fragment.o(e),X=!1},d(e){e&&(l(t),l(n),l(r)),z.$destroy(),a(Y)}}}function G(e,t,n){let a=0,r=0,o=0,i=1;return{r:a,g:r,b:o,opacity:i,input0_change_input_handler:function(){a=f(this.value),n("r",a)},input1_input_handler:function(){a=f(this.value),n("r",a)},input2_change_input_handler:function(){r=f(this.value),n("g",r)},input3_input_handler:function(){r=f(this.value),n("g",r)},input4_change_input_handler:function(){o=f(this.value),n("b",o)},input5_input_handler:function(){o=f(this.value),n("b",o)},input6_change_input_handler:function(){i=f(this.value),n("opacity",i)},input7_input_handler:function(){i=f(this.value),n("opacity",i)}}}class L extends A{constructor(e){super(),E(this,e,G,O,o,[])}}function R(t){var n,a,r,o,p,d,m,f=t.date.getFullYear();return{c(){n=u("footer"),a=u("h3"),r=s("Nbred ©\r\n    "),o=u("span"),p=s(f),d=s("\r\n    All rights reserved -\r\n    "),(m=u("a")).textContent="(Powered by SveltJS)",m.href="https://svelte.dev/",m.target="_blank",m.className="svelte-i8fipi",a.className="svelte-i8fipi",n.className="footer svelte-i8fipi"},m(e,t){c(e,n,t),i(n,a),i(a,r),i(a,o),i(o,p),i(a,d),i(a,m)},p:e,i:e,o:e,d(e){e&&l(n)}}}function q(e){return{date:new Date}}class F extends A{constructor(e){super(),E(this,e,q,R,o,[])}}function H(t){var n,a,r,o=new L({}),i=new F({});return{c(){n=u("div"),o.$$.fragment.c(),a=p(),i.$$.fragment.c(),n.className="container svelte-18stkjo"},m(e,t){c(e,n,t),j(o,n,null),c(e,a,t),j(i,e,t),r=!0},p:e,i(e){r||(o.$$.fragment.i(e),i.$$.fragment.i(e),r=!0)},o(e){o.$$.fragment.o(e),i.$$.fragment.o(e),r=!1},d(e){e&&l(n),o.$destroy(),e&&l(a),i.$destroy(e)}}}return new class extends A{constructor(e){super(),E(this,e,null,H,o,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
