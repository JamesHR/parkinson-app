"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1436],{1436:(Y,c,n)=>{n.r(c),n.d(c,{PatientsTestHistoryPageModule:()=>C});var d=n(6895),l=n(4719),r=n(7479),s=n(7941),t=n(6738),u=n(5444),m=n(9118),p=n(9534),P=n(8306),b=n(5078),g=n(4724),h=n(3406);const f=function(){return["001","002","003","004","005","006","007"]},T=function(){return[23.12,39.75,35.02,51,42.82,51.78,53.22]},M=function(a){return{name:"% de probbailidad",data:a,color:"#17bebb"}},y=function(a){return[a]},v=function(){return["Positivo","Negativo"]},z=function(){return[5,2]},Z=function(){return{size:2,value:"Fecha"}},H=function(){return{size:6,value:"Prueba"}},D=function(){return{size:2,value:"Probabilidad",css:"ion-hide-md-down"}},F=function(){return{size:2,value:"Tiempo",css:"ion-hide-md-down"}},x=function(a,o,e,i){return[a,o,e,i]},A=function(){return{Fecha:"30/06/2022",Prueba:"Prueba de Mano alzada",Probabilidad:"53.22%",Tiempo:"5m 42s"}},U=function(){return{Fecha:"15/06/2022",Prueba:"Prueba de Mano alzada",Probabilidad:"51.70%",Tiempo:"4m 12s"}},J=function(){return{Fecha:"30/05/2022",Prueba:"Prueba de Mano alzada",Probabilidad:"42.82%",Tiempo:"4m 37s"}},S=function(){return{Fecha:"15/05/2022",Prueba:"Prueba de Mano alzada",Probabilidad:"51.00%",Tiempo:"5m 12s"}},B=function(){return{Fecha:"30/04/2022",Prueba:"Prueba de Mano alzada",Probabilidad:"35.02%",Tiempo:"6m 07s"}},I=function(){return{Fecha:"15/04/2022",Prueba:"Prueba de Mano alzada",Probabilidad:"39.75%",Tiempo:"5m 22s"}},j=function(){return{Fecha:"30/03/2022",Prueba:"Prueba de Mano alzada",Probabilidad:"23.12%",Tiempo:"4m 52s"}},K=function(a,o,e,i,N,O,V){return[a,o,e,i,N,O,V]},Q=[{path:"",component:(()=>{class a{constructor(e,i){this.route=e,this.router=i,this.patient="",this.gender="",this.showTest=()=>this.router.navigate(["/patients-test-result"],{replaceUrl:!0})}ngOnInit(){}ionViewWillEnter(){this.route.queryParams.subscribe(e=>{this.patient=e.patient,this.gender=e.gender})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(s.gz),t.Y36(s.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-patients-test-history"]],decls:23,vars:41,consts:[["when","lg","content-id","main-content",1,"sidebar"],["activeOption","Inicio"],["id","main-content",1,"ion-page"],[1,"ion-no-padding"],["fixed",""],["size","12"],["title","Historial del paciente"],["size-md","12","size-lg","6"],["textSecondary","TecNM Instituto Tecnol\xf3gico de Orizaba","textTertiary","47 a\xf1os",3,"avatar","textPrimary"],["size-lg","3"],["icon","custom-clipboard","textPrimary","Pruebas realizadas","textSecondary","7"],["icon","custom-chart","textPrimary","Probabilidad global","textSecondary","72%"],["size-sm","12","size-md","8","size-lg","9"],["title","Seguimiento de probabilidad","filter","2022","type","line",3,"labels","dataset"],["size-sm","12","size-md","4","size-lg","3"],["title","Resultados",3,"labels","dataset"],["title","Historial de pruebas","filter","2022",3,"headers","data","itemHandler"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-split-pane",0),t._UZ(1,"app-menu-content",1),t.TgZ(2,"div",2)(3,"ion-content",3)(4,"ion-grid",4)(5,"ion-row")(6,"ion-col",5),t._UZ(7,"app-header-dashboard",6),t.qZA()(),t.TgZ(8,"ion-row")(9,"ion-col",7),t._UZ(10,"app-card-info",8),t.qZA(),t.TgZ(11,"ion-col",9),t._UZ(12,"app-card-data",10),t.qZA(),t.TgZ(13,"ion-col",9),t._UZ(14,"app-card-data",11),t.qZA()(),t.TgZ(15,"ion-row")(16,"ion-col",12),t._UZ(17,"app-card-chart",13),t.qZA(),t.TgZ(18,"ion-col",14),t._UZ(19,"app-card-chart-small",15),t.qZA()(),t.TgZ(20,"ion-row")(21,"ion-col",5),t._UZ(22,"app-card-table",16),t.qZA()()()()()()),2&e&&(t.xp6(10),t.Q6J("avatar","f"===i.gender?"avatar-patient-woman":"avatar-patient-man")("textPrimary",i.patient),t.xp6(7),t.Q6J("labels",t.DdM(9,f))("dataset",t.VKq(13,y,t.VKq(11,M,t.DdM(10,T)))),t.xp6(2),t.Q6J("labels",t.DdM(15,v))("dataset",t.DdM(16,z)),t.xp6(3),t.Q6J("headers",t.l5B(21,x,t.DdM(17,Z),t.DdM(18,H),t.DdM(19,D),t.DdM(20,F)))("data",t.Hh0(33,K,t.DdM(26,A),t.DdM(27,U),t.DdM(28,J),t.DdM(29,S),t.DdM(30,B),t.DdM(31,I),t.DdM(32,j)))("itemHandler",i.showTest))},dependencies:[r.wI,r.W2,r.jY,r.Nd,r.jI,u.K,m.s,p.n,P.P,b.s,g._,h.q]}),a})()}];let R=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.Bz.forChild(Q),s.Bz]}),a})();var w=n(3758);let C=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[d.ez,l.u5,r.Pc,R,w.K]}),a})()}}]);