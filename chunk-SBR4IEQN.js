import{g,t as A}from"./chunk-GRCMRLZW.js";import{Ad as p,Ae as T,Bd as v,Hd as s,Ld as W,Wd as I,Yd as m,e as S,f as y,ie as f,le as h,ne as d,qe as E}from"./chunk-LQNL2FVI.js";var b=S(W(),1);function H(){return y(this,null,function*(){if(m)return;function r(o){o.forEach(n=>{f.push(n)}),d.emit("WEB_FINISH"),window.__FINISHED__=!0}let a=E(f,I);if(f.splice(0,f.length),!I)return r(a);if(window.localStorage.getItem(s.DATE_TIME)!==p.datetime){let o=[s.TOKEN,s.IS_DARK,s.AUTH_CODE,s.LOCATION];Array.from({length:globalThis.localStorage.length},(n,e)=>{let t=globalThis.localStorage.key(e);t&&!o.includes(t)&&globalThis.localStorage.removeItem(t)}),globalThis.localStorage.setItem(s.DATE_TIME,p.datetime),b.default.removeItem(s.WEBSITE),r(a),I&&setTimeout(()=>{d.emit("NOTIFICATION",{type:"success",title:h("_buildSuccess"),content:p.datetime,config:{nzDuration:0}})},1e3);return}try{let o=(yield b.default.getItem(s.WEBSITE))||a;r(o)}catch{r(a)}})}function u(r){return r=r||f,m?T({content:JSON.stringify(r),path:v}):b.default.setItem(s.WEBSITE,r)}function K(r){r||=f;let{id:a}=g(),{oneIndex:i,twoIndex:o}=A(a),n=!r[i].nav[o].collapsed;return r[i].nav[o].collapsed=n,r[i].nav[o].nav.map(e=>(e.collapsed=n,e)),m||u(r),n}function R(r,a=!1){return y(this,null,function*(){let i=!1;function o(n){for(let e=0;e<n.length;e++){let t=n[e];Array.isArray(t.nav)&&(t.nav=t.nav.filter(l=>l.name&&r.includes(a?l.rId:l.id)?(i=!0,!1):!0),o(t.nav))}}if(o(f),i){yield u(f);let{q:n}=g();n&&!m&&d.emit("WEB_REFRESH")}return i})}function M(r,a){let i=Object.keys(a),o=!1;function n(e){for(let t=0;t<e.length;t++){let l=e[t];if(l.name&&l.id===r){o=!0;for(let c of i)l[c]=a[c]}Array.isArray(l.nav)&&n(l.nav)}}return n(f),u(f),o}function j(r){let a=null;function i(o){for(let n=0;n<o.length;n++){let e=o[n];if(e.name&&e.id===r){a=e;break}Array.isArray(e.nav)&&i(e.nav)}}return i(f),a}function q(r,a){let i=Object.keys(a),o=!1;function n(e){for(let t=0;t<e.length;t++){let l=e[t];if(l.title&&l.id===r){o=!0;for(let c of i)l[c]=a[c]}Array.isArray(l.nav)&&!l.nav[0]?.name&&n(l.nav)}}return n(f),u(f),o}function w(r,a=!1){return y(this,null,function*(){let i=!1;function o(n){for(let e=0;e<n.length;e++){let t=n[e];if(Array.isArray(t.nav)){if(o(t.nav),t.nav[0]?.name)break;t.nav=t.nav.filter(l=>l.title&&r.includes(a?l.rId:l.id)?(i=!0,!1):!0)}}}return r.forEach(n=>{f.forEach((e,t)=>{e.id===n&&(i=!0,f.splice(t,1))})}),o(f),i&&(yield u(f)),i})}function z(r,a){let i=!1;function o(n){for(let e=0;e<n.length;e++){let t=n[e];t.title&&t.id===r&&(i=!0,t.nav.unshift(a)),Array.isArray(t.nav)&&o(t.nav)}}return o(f),u(f),i}export{H as a,u as b,K as c,R as d,M as e,j as f,q as g,w as h,z as i};
