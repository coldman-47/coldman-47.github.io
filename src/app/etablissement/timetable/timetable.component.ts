import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import {
  CalendarOptions,
  defineFullCalendarElement,
  ViewApi,
} from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Cours } from 'src/app/core/models/cours/cours';
import { Classe } from 'src/app/core/models/classe/classe';
import { Ue } from 'src/app/core/models/ue/ue';
import { CoursService } from 'src/app/core/services/cours/cours.service';
import { UeService } from 'src/app/core/services/ue/ue.service';
import { EvaluationService } from '../../core/services/evaluation/evaluation.service';
import { EnseignantService } from '../../core/services/enseignant/enseignant.service';
defineFullCalendarElement();


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.sass'],
})
export class TimetableComponent implements OnInit {
  monthly = true;
  edit = false;
  cView!: ViewApi;
  selected?: any;
  calendarOptions?: CalendarOptions = {
    plugins: [dayGridPlugin],
    editable: true,
    initialView: 'dayGridWeek',
    locale: 'fr',
    firstDay: 1,
    buttonText: {
      today: "Aujourd'hui",
      week: 'Hebdo',
      month: 'Changer la vue',
    },
    headerToolbar: {
      center: !this.monthly ? 'dayGridWeek' : 'dayGridMonth',
    },
    eventClick: (event) => {
      this.selected = event.event.extendedProps;
      if(this.selected.seance) this._seance = this.selected;
      else this._seance = undefined;
      
      this.edit = true;
      this.choices = true;
    },
    viewDidMount: (info) => (this.cView = info.view),
  };
  display = false;
  visible = false;
  choices = false;
  showEval = false;
  showCours = false;
  choice?: string;
  @Input() classe!: Classe;
  ue: Ue[] = [];
  cours: Cours[] = [];
  evaluations: any[] = [];
  btnItems = [
    {
      icon: 'pi pi-pencil',
      command: () => (this.display = true),
      tooltipOptions: {
        tooltipLabel: 'Cours',
        tooltipPosition: 'left',
      },
    },
    {
      icon: 'pi pi-copy',
      command: () => (this.visible = true),
      tooltipOptions: {
        tooltipLabel: 'Évaluation',
        tooltipPosition: 'left',
      },
    }
  ];
  _seance?: any;
  enseignants: any[];

  constructor(
    private coursSrv: CoursService,
    private evalSrv: EvaluationService,
    private ueSrv: UeService,
    enseignantSrv: EnseignantService
  ) {
    enseignantSrv.getEnseignants().subscribe({
      next: (_enseignants: any) => this.enseignants = _enseignants.data.map((_enseignant: any) => {
        _enseignant.fullName = _enseignant.prenom + ' ' + _enseignant.nom;
        return _enseignant;
      })
    })
  }

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    const change = changes.classe;
    if (change.previousValue !== change.currentValue) {
      this.coursSrv.getCours(change.currentValue._id).subscribe({
        next: (cours: any) => {
          cours = cours.map((_cours: any) => {
            _cours.start = _cours.date;
            _cours.title = _cours.matiere.label;
            _cours.editable = true;
            _cours.color = _cours.absents.length ? 'blue' : 'green';
            this.cView.calendar.addEvent(_cours);
            return _cours;
          });
          this.calendarOptions!.events = cours;
          this.cours = cours;
        },
      });
      this.evalSrv.getEvaluations(change.currentValue._id).subscribe({
        next: (evaluations: any) => {
          evaluations = evaluations.map((_evaluation: any) => {
            _evaluation.start = _evaluation.date;
            _evaluation.title = _evaluation.matiere ? _evaluation.matiere.label : "blank";
            _evaluation.editable = true;
            _evaluation.color = 'red';
            this.cView.calendar.addEvent(_evaluation);
            return _evaluation;
          });
          this.calendarOptions!.events = evaluations;
          this.evaluations = evaluations;
        },
      });
      this.ueSrv.getUes().subscribe({
        next: (_res: any) => {
          this.ue = _res[0].ues;
        },
      });
    }
  }

  ngDoCheck() {
    const el = document.getElementById('calendar');
    if (el && !(<any>this.cView?.calendar).isRendered) {
      const calendar = new Calendar(el, this.calendarOptions);
      calendar.render();
    }
  }

  toggleView(e: any) {
    let btn = (<HTMLButtonElement>e.target).classList.value.split(' ')[0];
    if (btn === 'fc-dayGridWeek-button' || btn === 'fc-dayGridMonth-button') {
      this.monthly = btn === 'fc-dayGridWeek-button' ? true : false;
      let options: any = this.cView.calendar.getOption('headerToolbar');
      options.center =
        options.center === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth';
      console.log(options);
      this.cView.calendar.changeView(
        options.center === 'dayGridMonth' ? 'dayGridWeek' : 'dayGridMonth'
      );
    }
  }

  filterTimetableEvents(e: any){
    this.cView.calendar.removeAllEvents()
    this.cours.concat(this.evaluations).forEach(_event => {
      if(_event.enseignant === e.value) this.cView.calendar.addEvent(_event);
    });
  }
  
  resetTimetable(){
    this.cours.concat(this.evaluations).forEach(_event => this.cView.calendar.addEvent(_event));
  }
}
