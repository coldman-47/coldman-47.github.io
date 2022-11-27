"use strict";(self.webpackChunkdigitechschool_webapp=self.webpackChunkdigitechschool_webapp||[]).push([[803],{7803:(L,a,n)=>{n.r(a),n.d(a,{ServicesModule:()=>N});var c=n(9450),s=n(433),e=n(4650),l=n(1644),m=n(5593),v=n(4247),b=n(5047),g=n(1740),d=n(1795);const h=function(){return["/etablissement/services"]};let f=(()=>{class t{constructor(i,r,u){this._route=i,this._router=r,this._serviceExtService=u,this.serviceForm=new s.cw({label:new s.NI,tarif:new s.NI,nbMois:new s.NI,debutMois:new s.NI}),this.isEdit=!1,this.title="Nouveau service"}ngOnInit(){this._route.params.subscribe(i=>{i.id&&this._serviceExtService.getServiceExtraById(i.id).subscribe(r=>{this.service=r,this.title="Modifier service",this.isEdit=!0,this.serviceForm.patchValue(r)})})}onSubmit(){this.serviceForm.invalid||(this.service={...this.service,...this.serviceForm.value},this.isEdit?this._serviceExtService.updateServiceExtra(this.service).subscribe({next:()=>{this._router.navigate(["/etablissement/services"])}}):this._serviceExtService.addServiceExtra(this.service).subscribe({next:()=>{this._router.navigate(["/etablissement/services"])}}))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(c.gz),e.Y36(c.F0),e.Y36(l.d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-services-form"]],decls:26,vars:6,consts:[[1,"d-flex","justify-content-between","align-items-center"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-secondary","p-button-text",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"grid"],[1,"field","col-12","md:col-6"],["for","label"],["pInputText","","inputId","label","formControlName","label",1,"form-control"],["for","tarif"],["inputId","tarif","formControlName","tarif",1,"form-control"],["for","nbMois"],["inputId","nbMois","formControlName","nbMois",1,"form-control"],["for","debutMois"],["inputId","debutMois","formControlName","debutMois",1,"form-control"],[1,"field","col-12"],["pButton","","type","submit",1,"p-button","p-button-lg",3,"disabled"]],template:function(i,r){1&i&&(e.TgZ(0,"p-card")(1,"div",0)(2,"h2"),e._uU(3),e.qZA(),e._UZ(4,"button",1),e.qZA(),e.TgZ(5,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(6,"div",3)(7,"div",4)(8,"label",5),e._uU(9,"Nom du service"),e.qZA(),e._UZ(10,"input",6),e.qZA(),e.TgZ(11,"div",4)(12,"label",7),e._uU(13,"Tarif"),e.qZA(),e._UZ(14,"p-inputNumber",8),e.qZA(),e.TgZ(15,"div",4)(16,"label",9),e._uU(17,"Nombre de mois"),e.qZA(),e._UZ(18,"p-inputNumber",10),e.qZA(),e.TgZ(19,"div",4)(20,"label",11),e._uU(21,"Mois de d\xe9marrage"),e.qZA(),e._UZ(22,"p-inputNumber",12),e.qZA(),e.TgZ(23,"div",13)(24,"button",14),e._uU(25),e.qZA()()()()()),2&i&&(e.xp6(3),e.Oqu(r.title),e.xp6(1),e.Q6J("routerLink",e.DdM(5,h)),e.xp6(1),e.Q6J("formGroup",r.serviceForm),e.xp6(19),e.Q6J("disabled",r.serviceForm.invalid),e.xp6(1),e.Oqu(r.isEdit?"Modifier":"Enregistrer"))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,m.Hq,v.Z,b.Rn,g.o,c.rH,d.H]}),t})();var p=n(805),S=n(2137),Z=n(8396),x=n(2453);function A(t,o){1&t&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Nom"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Prix"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Mois d\xe9marrage"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Nombre de mois"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Actions"),e.qZA()())}const C=function(t){return[t,"modifier"]};function T(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._UZ(10,"button",6),e.TgZ(11,"button",7),e.NdJ("click",function(){const F=e.CHM(i).$implicit,q=e.oxw();return e.KtG(q.onDeleteService(F._id))}),e.qZA()()()}if(2&t){const i=o.$implicit;e.xp6(2),e.Oqu(i.label),e.xp6(2),e.Oqu(i.tarif),e.xp6(2),e.Oqu(i.debutMois),e.xp6(2),e.Oqu(i.nbMois),e.xp6(2),e.Q6J("routerLink",e.VKq(5,C,i._id))}}const y=function(){return["nouveau"]},E=function(){return{width:"50vw"}},M=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-services"]],decls:1,vars:0,template:function(i,r){1&i&&e._UZ(0,"router-outlet")},dependencies:[c.lC]}),t})(),children:[{path:"",component:(()=>{class t{constructor(i,r,u){this._confirmationService=i,this._messageService=r,this._serviecExtraService=u,this.services=[]}ngOnInit(){this._serviecExtraService.getAllServicesExtra(),this._serviecExtraService.servicesExtra$.subscribe(i=>this.services=i)}onDeleteService(i){this._confirmationService.confirm({message:"Voulez-vous supprimer ce service?",header:"Suppression",acceptLabel:"Supprimer",acceptButtonStyleClass:"p-button-danger",rejectLabel:"Annuler",icon:"pi pi-info-circle",accept:()=>{this._serviecExtraService.deleteServiceExtra(i).subscribe({next:r=>{this._messageService.add({severity:"info",summary:"Confirmation",detail:"Service supprim\xe9"}),this._serviecExtraService.getAllServicesExtra()},error:r=>{this._messageService.add({severity:"error",summary:"Erreur",detail:r.error.message})}})}})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(p.YP),e.Y36(p.ez),e.Y36(l.d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-services-list"]],decls:10,vars:7,consts:[[1,"d-flex","justify-content-between","align-items-center"],["pButton","","pRipple","","type","button","icon","pi pi-plus",1,"p-button-rounded","p-button-primary","p-button-text",3,"routerLink"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["rejectButtonStyleClass","p-button-text",3,"baseZIndex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-warning","p-button-text",3,"routerLink"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger","p-button-text",3,"click"]],template:function(i,r){1&i&&(e.TgZ(0,"p-card")(1,"div",0)(2,"h2"),e._uU(3,"Services extra"),e.qZA(),e._UZ(4,"button",1),e.qZA(),e.TgZ(5,"p-table",2),e.YNc(6,A,11,0,"ng-template",3),e.YNc(7,T,12,7,"ng-template",4),e.qZA()(),e._UZ(8,"p-confirmDialog",5)(9,"p-toast")),2&i&&(e.xp6(4),e.Q6J("routerLink",e.DdM(5,y)),e.xp6(1),e.Q6J("value",r.services),e.xp6(3),e.Akn(e.DdM(6,E)),e.Q6J("baseZIndex",1e4))},dependencies:[m.Hq,v.Z,p.jx,S.Q,c.rH,d.H,Z.iA,x.FN]}),t})()},{path:"nouveau",component:f},{path:":id/modifier",component:f}]}];let U=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(M),c.Bz]}),t})();var _=n(296);let N=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.m,U]}),t})()}}]);