import{m as L}from"./chunk-QXT6YJJ4.js";import{b as d}from"./chunk-LF5XB4YN.js";import"./chunk-RW4GY4BD.js";var k=n=>{if(d===void 0)return;let o=0,t,s,r,h=n.getBoolean("animated",!0)&&n.getBoolean("rippleEffect",!0),f=new WeakMap,p=()=>{r&&clearTimeout(r),r=void 0,t&&(E(!1),t=void 0)},w=e=>{t||e.button===2||u(g(e),e)},b=e=>{u(void 0,e)},u=(e,i)=>{if(e&&e===t)return;r&&clearTimeout(r),r=void 0;let{x:c,y:a}=L(i);if(t){if(f.has(t))throw new Error("internal error");t.classList.contains(l)||m(t,c,a),E(!0)}if(e){let A=f.get(e);A&&(clearTimeout(A),f.delete(e)),e.classList.remove(l);let T=()=>{m(e,c,a),r=void 0};D(e)?T():r=setTimeout(T,S)}t=e},m=(e,i,c)=>{if(o=Date.now(),e.classList.add(l),!h)return;let a=C(e);a!==null&&(v(),s=a.addRipple(i,c))},v=()=>{s!==void 0&&(s.then(e=>e()),s=void 0)},E=e=>{v();let i=t;if(!i)return;let c=R-Date.now()+o;if(e&&c>0&&!D(i)){let a=setTimeout(()=>{i.classList.remove(l),f.delete(i)},R);f.set(i,a)}else i.classList.remove(l)};d.addEventListener("ionGestureCaptured",p),d.addEventListener("pointerdown",w,!0),d.addEventListener("pointerup",b,!0),d.addEventListener("pointercancel",p,!0)},g=n=>{if(n.composedPath!==void 0){let o=n.composedPath();for(let t=0;t<o.length-2;t++){let s=o[t];if(!(s instanceof ShadowRoot)&&s.classList.contains("ion-activatable"))return s}}else return n.target.closest(".ion-activatable")},D=n=>n.classList.contains("ion-activatable-instant"),C=n=>{if(n.shadowRoot){let o=n.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return n.querySelector("ion-ripple-effect")},l="ion-activated",S=100,R=150;export{k as startTapClick};
