import{af as X,S as Z,i as $,s as ee,k as q,l as J,m as O,h as m,n as h,b as E,K as v,O as A,Y as D,a4 as C,I as T,J as U,L as b,Q as N,q as te,R as j,r as ae,D as L,u as se,a2 as p,$ as le,a3 as ne,P as oe,T as re}from"./index.2dcdb534.js";import{w as _}from"./index.8878996c.js";let z="https://obmra8er90.execute-api.us-east-1.amazonaws.com/dev/services/",G="S3",V="ask-vivek";const F="https://gajavelli.github.io/meet-vivek/",ie="770045059026-t6djoeaqpc9piu2q55oggjpfsq6c7i4i.apps.googleusercontent.com",ce=F,Ee="https://www.googleapis.com/oauth2/v3/userinfo",ue="https://oauth2.googleapis.com/revoke?token=",fe="https://accounts.google.com/o/oauth2/v2/auth",de="https://www.googleapis.com/auth/userinfo.email",Re="https://www.vivek2024.com/wp-content/uploads/2023/04/logo_large.png",Ae="Vivek2024",Ce=async(a,e)=>{const t=z;return e=e||"",await fetch(t+a+"/"+e,K("GET"))},Ue=async(a,e,t)=>{const s=z;return t===void 0?await fetch(s+a,K("POST",e)):await fetch(s+a,ge("POST",e,t))},K=(a,e)=>{e=e||"";let t="";return localStorage.getItem("authinfo")!=""&&(t=JSON.parse(localStorage.getItem("authinfo")).access_token),e!=""?(window.location.pathname.split("/").length>0&&(e={...e,appid:V,code:t,from_data_source:G}),{method:a,type:"cors",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}):{method:a,type:"cors",headers:{"Content-Type":"application/json"}}},ge=(a,e,t)=>{e=e||"";let s="";return localStorage.getItem("authinfo")!=""&&(s=JSON.parse(localStorage.getItem("authinfo")).access_token),e!=""?(window.location.pathname.split("/").length>0&&(e={...e,appid:V,code:s,from_data_source:G}),{method:a,type:"cors",body:JSON.stringify(e),headers:{"Content-Type":"application/json",...t}}):{method:a,type:"cors",headers:{"Content-Type":"application/json"}}},P={};function B(a){return a==="local"?localStorage:sessionStorage}function R(a,e,t){const s=(t==null?void 0:t.serializer)??JSON,f=(t==null?void 0:t.storage)??"local";function u(o,n){B(f).setItem(o,s.stringify(n))}if(!P[a]){const o=_(e,i=>{const g=B(f).getItem(a);g&&i(s.parse(g));{const c=d=>{d.key===a&&i(d.newValue?s.parse(d.newValue):null)};return window.addEventListener("storage",c),()=>window.removeEventListener("storage",c)}}),{subscribe:n,set:r}=o;P[a]={set(i){u(a,i),r(i)},update(i){const g=i(X(o));u(a,g),r(g)},subscribe:n}}return P[a]}R("modeOsPrefers",!1);R("modeUserPrefers",void 0);R("modeCurrent",!1);function he(a){let e,t,s=String(a[1]).substring(0,2).toUpperCase()+"",f,u;return{c(){e=N("svg"),t=N("text"),f=te(s),this.h()},l(o){e=j(o,"svg",{class:!0,viewBox:!0});var n=O(e);t=j(n,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var r=O(t);f=ae(r,s),r.forEach(m),n.forEach(m),this.h()},h(){h(t,"x","50%"),h(t,"y","50%"),h(t,"dominant-baseline","central"),h(t,"text-anchor","middle"),h(t,"font-weight","bold"),h(t,"font-size",150),h(t,"class",u="avatar-text "+a[2]),h(e,"class","avatar-initials w-full h-full"),h(e,"viewBox","0 0 512 512")},m(o,n){E(o,e,n),L(e,t),L(t,f)},p(o,n){n&2&&s!==(s=String(o[1]).substring(0,2).toUpperCase()+"")&&se(f,s),n&4&&u!==(u="avatar-text "+o[2])&&h(t,"class",u)},d(o){o&&m(e)}}}function me(a){let e,t,s,f,u,o,n,r,i=[{class:t="avatar-image "+be},{style:s=a[8].style??""},{src:f=a[0]},{alt:u=a[8].alt||""},a[7]()],g={};for(let c=0;c<i.length;c+=1)g=T(g,i[c]);return{c(){e=q("img"),this.h()},l(c){e=J(c,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){p(e,g)},m(c,d){E(c,e,d),n||(r=[le(o=a[4].call(null,e,a[5])),v(e,"error",a[19])],n=!0)},p(c,d){p(e,g=ne(i,[{class:t},d&256&&s!==(s=c[8].style??"")&&{style:s},d&1&&!oe(e.src,f=c[0])&&{src:f},d&256&&u!==(u=c[8].alt||"")&&{alt:u},c[7]()])),o&&re(o.update)&&d&32&&o.update.call(null,c[5])},d(c){c&&m(e),n=!1,D(r)}}}function _e(a){let e,t,s,f;function u(r,i){return r[0]?me:he}let o=u(a),n=o(a);return{c(){e=q("figure"),n.c(),this.h()},l(r){e=J(r,"FIGURE",{class:!0,"data-testid":!0});var i=O(e);n.l(i),i.forEach(m),this.h()},h(){h(e,"class",t="avatar "+a[6]),h(e,"data-testid","avatar")},m(r,i){E(r,e,i),n.m(e,null),s||(f=[v(e,"click",a[15]),v(e,"keydown",a[16]),v(e,"keyup",a[17]),v(e,"keypress",a[18])],s=!0)},p(r,[i]){o===(o=u(r))&&n?n.p(r,i):(n.d(1),n=o(r),n&&(n.c(),n.m(e,null))),i&64&&t!==(t="avatar "+r[6])&&h(e,"class",t)},i:A,o:A,d(r){r&&m(e),n.d(),s=!1,D(f)}}}let ve="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",be="w-full h-full object-cover";function ke(a,e,t){let s;const f=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let u=C(e,f),{initials:o="AB"}=e,{fill:n="fill-token"}=e,{src:r=""}=e,{fallback:i=""}=e,{action:g=()=>{}}=e,{actionParams:c=""}=e,{background:d="bg-surface-400-500-token"}=e,{width:k="w-16"}=e,{border:S=""}=e,{rounded:I="rounded-full"}=e,{shadow:w=""}=e,{cursor:y=""}=e;function x(){return delete u.class,u}function H(l){b.call(this,a,l)}function M(l){b.call(this,a,l)}function Q(l){b.call(this,a,l)}function Y(l){b.call(this,a,l)}const W=()=>t(0,r=i);return a.$$set=l=>{t(8,e=T(T({},e),U(l))),t(20,u=C(e,f)),"initials"in l&&t(1,o=l.initials),"fill"in l&&t(2,n=l.fill),"src"in l&&t(0,r=l.src),"fallback"in l&&t(3,i=l.fallback),"action"in l&&t(4,g=l.action),"actionParams"in l&&t(5,c=l.actionParams),"background"in l&&t(9,d=l.background),"width"in l&&t(10,k=l.width),"border"in l&&t(11,S=l.border),"rounded"in l&&t(12,I=l.rounded),"shadow"in l&&t(13,w=l.shadow),"cursor"in l&&t(14,y=l.cursor)},a.$$.update=()=>{t(6,s=`${ve} ${d} ${k} ${S} ${I} ${w} ${y} ${e.class??""}`)},e=U(e),[r,o,n,i,g,c,s,x,e,d,k,S,I,w,y,H,M,Q,Y,W]}class Ne extends Z{constructor(e){super(),$(this,e,ke,_e,ee,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}const Se=_(void 0),Ie=_(void 0),we=_(void 0),ye=_(void 0),je=_(!1),Le=()=>{Pe()},pe=()=>{debugger;let a=JSON.parse(localStorage.getItem("authinfo")),e=(a==null?void 0:a.access_token)||"";var t=ue+e;fetch(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(s=>s.json()).then(s=>{Se.set(""),we.set(""),Ie.set(""),ye.set("no"),localStorage.setItem("authinfo",""),window.document.location=F})};function Pe(){var a=document.createElement("form");a.setAttribute("method","GET"),a.setAttribute("action",fe);let e={client_id:ie,redirect_uri:ce,scope:de,state:"oauthSignIn;",include_granted_scopes:"true",response_type:"token"};for(var t in e){var s=document.createElement("input");s.setAttribute("type","hidden"),s.setAttribute("name",t),s.setAttribute("value",e[t]),a.appendChild(s)}document.body.appendChild(a),a.submit()}export{Ne as A,Ue as R,Re as S,Ae as T,Ee as U,we as a,Ie as b,ye as c,Le as d,je as e,ce as f,pe as g,Ce as h,Se as s};
