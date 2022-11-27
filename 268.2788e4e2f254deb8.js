"use strict";(self.webpackChunkdigitechschool_webapp=self.webpackChunkdigitechschool_webapp||[]).push([[268],{6268:(I,a,s)=>{s.r(a),s.d(a,{BoursesModule:()=>J});var u=s(9450),i=s(433),e=s(4650),m=s(3547),l=s(5593),d=s(4247),h=s(5047),b=s(1795);const v=function(){return["/etablissement/bourses"]};let g=(()=>{class t{constructor(o,n,p){this._route=o,this._router=n,this._bourseService=p,this.bourseForm=new i.cw({annee:new i.NI,pourcentage:new i.NI}),this.isEdit=!1,this.title="Nouvelle bourse"}ngOnInit(){this._route.params.subscribe(o=>{o.id&&this._bourseService.getBourse(o.id).subscribe(n=>{this.bourse=n,this.title="Modifier bourse",this.isEdit=!0,this.bourseForm.patchValue(n)})})}onSubmit(){this.bourseForm.invalid||(this.bourse={...this.bourse,...this.bourseForm.value},this.isEdit?this._bourseService.updateBourse(this.bourse).subscribe({next:()=>{this._router.navigate(["/etablissement/bourses"])}}):this._bourseService.addBourse(this.bourse).subscribe({next:()=>{this._router.navigate(["/etablissement/bourses"])}}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(m.x))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-bourses-form"]],decls:18,vars:6,consts:[[1,"d-flex","justify-content-between","align-items-center"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-secondary","p-button-text",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"grid"],[1,"field","col-12","md:col-6"],["for","annee"],["inputId","annee","formControlName","annee",1,"form-control"],["for","pourcentage"],["inputId","pourcentage","formControlName","pourcentage",1,"form-control"],[1,"field","col-12"],["pButton","","type","submit",1,"p-button","p-button-lg",3,"disabled"]],template:function(o,n){1&o&&(e.TgZ(0,"p-card")(1,"div",0)(2,"h2"),e._uU(3),e.qZA(),e._UZ(4,"button",1),e.qZA(),e.TgZ(5,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(6,"div",3)(7,"div",4)(8,"label",5),e._uU(9,"Ann\xe9e"),e.qZA(),e._UZ(10,"p-inputNumber",6),e.qZA(),e.TgZ(11,"div",4)(12,"label",7),e._uU(13,"Pourcentage"),e.qZA(),e._UZ(14,"p-inputNumber",8),e.qZA(),e.TgZ(15,"div",9)(16,"button",10),e._uU(17),e.qZA()()()()()),2&o&&(e.xp6(3),e.Oqu(n.title),e.xp6(1),e.Q6J("routerLink",e.DdM(5,v)),e.xp6(1),e.Q6J("formGroup",n.bourseForm),e.xp6(11),e.Q6J("disabled",n.bourseForm.invalid),e.xp6(1),e.Oqu(n.isEdit?"Modifier":"Enregistrer"))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,l.Hq,d.Z,h.Rn,u.rH,b.H]}),t})();var c=s(805),f=s(6895),B=s(2137),Z=s(8396),C=s(2453);function x(t,r){1&t&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Ann\xe9e"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Pourcentage"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Actions"),e.qZA()())}const _=function(t){return[t,"modifier"]};function y(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"button",7),e.TgZ(7,"button",8),e.NdJ("click",function(){const M=e.CHM(o).$implicit,N=e.oxw(2);return e.KtG(N.onDeleteBourse(M._id))}),e.qZA()()()}if(2&t){const o=r.$implicit;e.xp6(2),e.Oqu(o.annee),e.xp6(2),e.hij("",o.pourcentage," %"),e.xp6(2),e.Q6J("routerLink",e.VKq(3,_,o._id))}}function A(t,r){if(1&t&&(e.ynx(0),e.TgZ(1,"p-table",4),e.YNc(2,x,7,0,"ng-template",5),e.YNc(3,y,8,5,"ng-template",6),e.qZA(),e.BQk()),2&t){const o=r.ngIf;e.xp6(1),e.Q6J("value",o)}}const S=function(){return["nouveau"]},T=function(){return{width:"50vw"}},F=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-bourses"]],decls:1,vars:0,template:function(o,n){1&o&&e._UZ(0,"router-outlet")},dependencies:[u.lC]}),t})(),children:[{path:"",component:(()=>{class t{constructor(o,n,p){this._confirmationService=o,this._messageService=n,this._bourseService=p}ngOnInit(){this.bourses$=this._bourseService.bourses$,this._bourseService.getBourses()}onDeleteBourse(o){this._confirmationService.confirm({message:"Voulez-vous supprimer cette bourse?",header:"Suppression",acceptLabel:"Supprimer",acceptButtonStyleClass:"p-button-danger",rejectLabel:"Annuler",icon:"pi pi-info-circle",accept:()=>{this._bourseService.deleteBourse(o).subscribe({next:n=>{this._messageService.add({severity:"info",summary:"Confirmation",detail:"Bourse supprim\xe9e"}),this._bourseService.getBourses()},error:n=>{this._messageService.add({severity:"error",summary:"Erreur",detail:n.error.message})}})}})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.YP),e.Y36(c.ez),e.Y36(m.x))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-bourses-list"]],decls:9,vars:9,consts:[[1,"d-flex","justify-content-between","align-items-center"],["pButton","","pRipple","","type","button","icon","pi pi-plus",1,"p-button-rounded","p-button-primary","p-button-text",3,"routerLink"],[4,"ngIf"],["rejectButtonStyleClass","p-button-text",3,"baseZIndex"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-warning","p-button-text",3,"routerLink"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger","p-button-text",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"p-card")(1,"div",0)(2,"h2"),e._uU(3,"Bourses"),e.qZA(),e._UZ(4,"button",1),e.qZA(),e.YNc(5,A,4,1,"ng-container",2),e.ALo(6,"async"),e.qZA(),e._UZ(7,"p-confirmDialog",3)(8,"p-toast")),2&o&&(e.xp6(4),e.Q6J("routerLink",e.DdM(7,S)),e.xp6(1),e.Q6J("ngIf",e.lcZ(6,5,n.bourses$)),e.xp6(2),e.Akn(e.DdM(8,T)),e.Q6J("baseZIndex",1e4))},dependencies:[f.O5,l.Hq,d.Z,c.jx,B.Q,u.rH,b.H,Z.iA,C.FN,f.Ov]}),t})()},{path:"nouveau",component:g},{path:":id/modifier",component:g}]}];let L=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(F),u.Bz]}),t})();var U=s(296);let J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[U.m,L]}),t})()}}]);