import"./chunk-BYXBJQAS.js";import{c as K,e as Q,f as U,g as f}from"./chunk-4VFH4KMF.js";import{A as m,C as I,Ca as A,D as C,Da as $,E as F,F as t,G as i,H as g,Ha as z,Ia as J,J as y,P as a,Q as d,X as x,ba as p,ca as E,da as D,ea as N,fa as u,ga as T,ha as w,i as v,ia as G,ja as L,l as S,na as M,oa as R,pa as j,qa as O,ra as q,sa as B,v as l,va as _,w as b,wa as k,xa as H,y as h,ya as P,za as V}from"./chunk-675YSVJL.js";import"./chunk-N3PT3BRI.js";import"./chunk-5TFNS7IN.js";import"./chunk-QKUHOLOF.js";import"./chunk-6DP5AXAB.js";import"./chunk-G3CV3VGG.js";import"./chunk-JX3TYZ34.js";import"./chunk-RUY5SX76.js";import"./chunk-NIOQNOHM.js";import"./chunk-4U6PRYVA.js";import"./chunk-QXT6YJJ4.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-RW4GY4BD.js";var W=(()=>{let e=class e{constructor(){this.firestoreService=S(K)}createDocument(n,r){let c=f(this.firestoreService,n);return U(c,r)}readCollection(n){let r=f(this.firestoreService,n);return Q(r,{idField:"id"})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function Z(o,e){if(o&1&&(t(0,"ion-item")(1,"ion-label"),a(2),i(),t(3,"ion-label"),a(4),i()()),o&2){let s=e.$implicit;l(2),d(" ",s==null?null:s.score," "),l(2),d(" ",s==null?null:s.opinion," ")}}var de=(()=>{let e=class e{constructor(n){this.providerService=n,this.myForm=new N({score:new u("",p.required),opinion:new u("",p.required)}),this.dataList=[],this.collectionName="reviews"}onSubmit(){this.providerService.createDocument(this.collectionName,this.myForm.value).then(()=>{this.myForm.reset()})}ngOnInit(){this.loadData()}loadData(){this.providerService.readCollection(this.collectionName).subscribe(n=>{this.dataList=n})}};e.\u0275fac=function(r){return new(r||e)(b(W))},e.\u0275cmp=h({type:e,selectors:[["app-tab2"]],decls:29,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],[1,"ion-padding-bottom","ion-margin-bottom"],[1,"ion-text-center"],[3,"ngSubmit","formGroup"],["formControlName","score","label","Calificaci\xF3n","placeholder","Seleccione un valor"],["value","bueno"],["value","regular"],["value","malo"],["formControlName","opinion","label","Opini\xF3n","placeholder","Agregue aqu\xED su descripci\xF3n"],["type","submit",3,"disabled"]],template:function(r,c){r&1&&(t(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),a(3," Retroalimentaci\xF3n "),i()()(),t(4,"ion-content",1)(5,"ion-card",2)(6,"ion-card-header")(7,"ion-card-title"),a(8,"Su opini\xF3n es importante"),i()(),t(9,"ion-card-content",3)(10,"form",4),y("ngSubmit",function(){return c.onSubmit()}),t(11,"ion-select",5)(12,"ion-select-option",6),a(13,"Bueno"),i(),t(14,"ion-select-option",7),a(15,"Regular"),i(),t(16,"ion-select-option",8),a(17,"Malo"),i()(),g(18,"ion-textarea",9),t(19,"ion-button",10),a(20,"Enviar"),i()()()(),t(21,"ion-card",2)(22,"ion-card-header")(23,"ion-card-title"),a(24,"Opiniones"),i()(),t(25,"ion-card-content")(26,"ion-list"),C(27,Z,5,2,"ion-item",null,I),i()()()()),r&2&&(m("translucent",!0),l(4),m("fullscreen",!0),l(6),m("formGroup",c.myForm),l(9),m("disabled",!c.myForm.valid),l(8),F(c.dataList))},dependencies:[_,$,A,B,R,O,q,j,z,V,J,M,P,k,H,L,T,E,D,w,G,x],encapsulation:2});let o=e;return o})();export{de as Tab2Page};
