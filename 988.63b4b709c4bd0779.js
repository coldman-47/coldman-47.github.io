"use strict";(self.webpackChunkdigitechschool_webapp=self.webpackChunkdigitechschool_webapp||[]).push([[988],{9988:(Y,v,r)=>{r.r(v),r.d(v,{RedevanceModule:()=>Q});var l=r(9450),e=r(4650),u=r(805),m=r(4715),p=r(6895),f=r(5593),g=r(4247),Z=r(2137),x=r(9764),h=r(1795),_=r(2453);const y=function(i){return[i,"modifier"]};function C(i,c){if(1&i){const n=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"button",11),e.TgZ(2,"button",12),e.NdJ("click",function(){e.CHM(n);const s=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.onDelete(s))}),e.qZA()()}if(2&i){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(1,y,n.redevance._id))}}function N(i,c){if(1&i&&(e.TgZ(0,"div",6)(1,"p-panel",7)(2,"div",8)(3,"p"),e._uU(4,"Montant : "),e.TgZ(5,"span",9),e._uU(6),e.qZA()(),e.TgZ(7,"p"),e._uU(8,"Inscription : "),e.TgZ(9,"span",9),e._uU(10),e.qZA()(),e.TgZ(11,"p"),e._uU(12,"Nbr Mois : "),e.TgZ(13,"span",9),e._uU(14),e.qZA()(),e.TgZ(15,"p"),e._uU(16,"Niveaux : "),e.TgZ(17,"span",9),e._uU(18),e.qZA()()(),e.YNc(19,C,3,3,"ng-template",10),e.qZA()()),2&i){const n=c.$implicit,t=e.oxw(2);e.xp6(1),e.Q6J("header",t.getTitle(n.filieres)),e.xp6(5),e.hij("",n.redevance.montant," FCFA"),e.xp6(4),e.hij("",n.redevance.montantInscription," FCFA"),e.xp6(4),e.Oqu(n.redevance.nbMois),e.xp6(4),e.Oqu(t.getNiveaux(n.niveaux))}}function R(i,c){if(1&i&&(e.ynx(0),e.TgZ(1,"div",4),e.YNc(2,N,20,5,"div",5),e.qZA(),e.BQk()),2&i){const n=c.ngIf;e.xp6(2),e.Q6J("ngForOf",n)}}const T=function(){return["nouvelle"]},A=function(){return{width:"50vw"}};let I=(()=>{class i{constructor(n,t,s){this._confirmationService=n,this._messageService=t,this._redevanceService=s}ngOnInit(){this.data$=this._redevanceService.redevances$,this._redevanceService.getRedevances()}getTitle(n){return n?n.map(t=>t.label).join(" - "):""}getNiveaux(n){return n?n.map(t=>t.label).join(" - "):""}onDelete(n){this._confirmationService.confirm({message:"Voulez-vous supprimer cette redevance?",header:"Suppression",acceptLabel:"Supprimer",acceptButtonStyleClass:"p-button-danger",rejectLabel:"Annuler",icon:"pi pi-info-circle",accept:()=>{n._id&&this._redevanceService.deleteRedevance(n._id).subscribe({next:t=>{this._messageService.add({severity:"info",summary:"Confirmation",detail:"Redance supprim\xe9e"}),this._redevanceService.getRedevances()},error:t=>{this._messageService.add({severity:"error",summary:"Erreur",detail:t.error.message})}})}})}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(u.YP),e.Y36(u.ez),e.Y36(m.v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-redevances"]],decls:9,vars:9,consts:[[1,"d-flex","justify-content-between","align-items-center"],["pButton","","pRipple","","type","button","icon","pi pi-plus",1,"p-button-rounded","p-button-primary","p-button-text",3,"routerLink"],[4,"ngIf"],["rejectButtonStyleClass","p-button-text",3,"baseZIndex"],[1,"grid"],["class","col-6 md:col-4",4,"ngFor","ngForOf"],[1,"col-6","md:col-4"],[3,"header"],[1,"flex","flex-column","gap-2"],[1,"font-bold"],["pTemplate","footer"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","p-button-text",3,"routerLink"],["pButton","","pRipple","","type","button","icon","pi pi-trash",1,"p-button-rounded","p-button-danger","p-button-text",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"p-card")(1,"div",0)(2,"h2"),e._uU(3,"Redevance"),e.qZA(),e._UZ(4,"button",1),e.qZA(),e.YNc(5,R,3,1,"ng-container",2),e.ALo(6,"async"),e.qZA(),e._UZ(7,"p-confirmDialog",3)(8,"p-toast")),2&n&&(e.xp6(4),e.Q6J("routerLink",e.DdM(7,T)),e.xp6(1),e.Q6J("ngIf",e.lcZ(6,5,t.data$)),e.xp6(2),e.Akn(e.DdM(8,A)),e.Q6J("baseZIndex",1e4))},dependencies:[p.sg,p.O5,f.Hq,g.Z,u.jx,Z.Q,l.rH,x.s,h.H,_.FN,p.Ov]}),i})();var o=r(433),S=r(391),M=r(4419),F=r(666),U=r(5047),L=r(5722);const w=function(){return["/etablissement/redevances"]};let b=(()=>{class i{constructor(n,t,s,a,d){this._route=n,this._router=t,this._filiereService=s,this._redevanceService=a,this._cycleService=d,this.redevanceForm=new o.cw({redevance:new o.cw({montant:new o.NI(null,[o.kI.required]),montantInscription:new o.NI(null,[o.kI.required]),nbMois:new o.NI(null,[o.kI.required]),debutMois:new o.NI(null,[o.kI.required])}),filieres:new o.NI([],[o.kI.required]),cycle:new o.NI([],[o.kI.required]),niveaux:new o.NI([],[o.kI.required])}),this.cycles=[],this.filieres=[],this.niveaux=[],this.isEdit=!1,this.title="Nouvelle redevance"}ngOnInit(){this._cycleService.cycles.subscribe({next:n=>this.cycles=n}),this._cycleService.getCycles(),this._route.params.subscribe(n=>{n.id&&this._redevanceService.getRedevance(n.id).subscribe(t=>{this.redevance=t,t.niveaux&&t.niveaux[0]._id&&this._filiereService.getFilieresByNiveau(t.niveaux[0]._id).subscribe(s=>{if(s){this.filieres=s;const a=t.niveaux?.map(d=>d.cycle)[0];this.title="Modifier redevance",this.isEdit=!0,this.getNiveaux({value:a}),this.redevanceForm.patchValue({redevance:{montant:t.redevance?.montant,montantInscription:t.redevance?.montantInscription,nbMois:t.redevance?.nbMois,debutMois:t.redevance?.debutMois},filieres:t.filieres,cycle:a,niveaux:t.niveaux?.map(d=>d._id)})}})})})}getNiveaux(n){this.niveaux=this.cycles.find(t=>t._id===n.value)?.niveaux,this.redevanceForm.get("niveaux")?.setValue([]),this.redevanceForm.get("filieres")?.setValue([])}getFilieres(n){n.value[0]?this._filiereService.getFilieresByNiveau(n.value[0]).subscribe(t=>this.filieres=t):this.filieres=[],this.redevanceForm.get("filieres")?.setValue([])}onSubmit(){if(this.redevanceForm.invalid)return;const n={...this.redevance,...this.redevanceForm.value};this.isEdit?this._redevanceService.updateRedevance(n._id,n).subscribe({next:s=>this._router.navigate(["/etablissement/redevances"])}):this._redevanceService.createRedevance(n).subscribe({next:()=>this._router.navigate(["/etablissement/redevances"])})}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(l.gz),e.Y36(l.F0),e.Y36(S.t),e.Y36(m.v),e.Y36(M.K))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-new-redevance"]],decls:40,vars:16,consts:[[1,"d-flex","justify-content-between","align-items-center"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button-rounded","p-button-secondary","p-button-text",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"grid"],["formGroupName","redevance"],[1,"field","col-12","md:col-6"],["for","montant"],["inputId","montant","formControlName","montant",1,"form-control"],["for","montantInscription"],["inputId","montantInscription","formControlName","montantInscription",1,"form-control"],["for","nbMois"],["inputId","nbMois","formControlName","nbMois",1,"form-control"],["for","debutMois"],["inputId","debutMois","formControlName","debutMois",1,"form-control"],[1,"field","col-12"],["formControlName","cycle","optionLabel","label","optionValue","_id","placeholder","Choix du cycle",1,"form-control",3,"options","onChange"],["_cycle",""],["display","chip","name","niveaux","formControlName","niveaux","optionLabel","label","optionValue","_id","placeholder","Choix des niveaux",1,"form-control",3,"selectionLimit","showHeader","disabled","options","onChange"],["placeholder","Choix de la fili\xe8re","formControlName","filieres",1,"form-control",3,"selectionLimit","showHeader","options","optionValue","optionLabel"],["pButton","","type","submit",1,"p-button","p-button-lg",3,"disabled"]],template:function(n,t){if(1&n&&(e.TgZ(0,"p-card")(1,"div",0)(2,"h2"),e._uU(3),e.qZA(),e._UZ(4,"button",1),e.qZA(),e.TgZ(5,"form",2),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(6,"div",3),e.ynx(7,4),e.TgZ(8,"div",5)(9,"label",6),e._uU(10,"Montant"),e.qZA(),e._UZ(11,"p-inputNumber",7),e.qZA(),e.TgZ(12,"div",5)(13,"label",8),e._uU(14,"Montant inscription"),e.qZA(),e._UZ(15,"p-inputNumber",9),e.qZA(),e.TgZ(16,"div",5)(17,"label",10),e._uU(18,"Nombre de mois"),e.qZA(),e._UZ(19,"p-inputNumber",11),e.qZA(),e.TgZ(20,"div",5)(21,"label",12),e._uU(22,"D\xe9but mois"),e.qZA(),e._UZ(23,"p-inputNumber",13),e.qZA(),e.BQk(),e.TgZ(24,"div",14)(25,"label"),e._uU(26,"Cycle"),e.qZA(),e.TgZ(27,"p-dropdown",15,16),e.NdJ("onChange",function(a){return t.getNiveaux(a)}),e.qZA()(),e.TgZ(29,"div",5)(30,"label"),e._uU(31,"Niveaux"),e.qZA(),e.TgZ(32,"p-multiSelect",17),e.NdJ("onChange",function(a){return t.getFilieres(a)}),e.qZA()(),e.TgZ(33,"div",5)(34,"label"),e._uU(35,"Fili\xe8re"),e.qZA(),e._UZ(36,"p-multiSelect",18),e.qZA(),e.TgZ(37,"div",14)(38,"button",19),e._uU(39),e.qZA()()()()()),2&n){const s=e.MAs(28);e.xp6(3),e.Oqu(t.title),e.xp6(1),e.Q6J("routerLink",e.DdM(15,w)),e.xp6(1),e.Q6J("formGroup",t.redevanceForm),e.xp6(22),e.Q6J("options",t.cycles),e.xp6(5),e.Q6J("selectionLimit",1)("showHeader",!1)("disabled",!s.value)("options",t.niveaux),e.xp6(4),e.Q6J("selectionLimit",1)("showHeader",!1)("options",t.filieres)("optionValue","_id")("optionLabel","label"),e.xp6(2),e.Q6J("disabled",t.redevanceForm.invalid),e.xp6(1),e.Oqu(t.isEdit?"Modifier":"Enregistrer")}},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,o.x0,f.Hq,g.Z,F.Lt,U.Rn,l.rH,L.NU,h.H]}),i})();const q=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-redevance"]],decls:1,vars:0,template:function(n,t){1&n&&e._UZ(0,"router-outlet")},dependencies:[l.lC]}),i})(),children:[{path:"",component:I},{path:"nouvelle",component:b},{path:":id/modifier",component:b}]}];let J=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.Bz.forChild(q),l.Bz]}),i})();var B=r(296);let Q=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[B.m,J]}),i})()}}]);