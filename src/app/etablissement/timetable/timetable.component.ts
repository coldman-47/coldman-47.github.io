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
import { ApprenantService } from 'src/app/core/services/apprenant/apprenant.service';
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
      this.edit = true;
      this.choices = true;
    },
    viewDidMount: (info) => (this.cView = info.view),
  };
  display = false;
  visible = false;
  choices = false;
  showEval = false;
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

  constructor(
    private coursSrv: CoursService,
    private evalSrv: EvaluationService,
    private ueSrv: UeService
  ) {}

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
            _cours.color = 'blue';
            this.cView.calendar.addEvent(_cours);
          });
          this.calendarOptions!.events = cours;
          this.cours = cours;
        },
      });
      this.evalSrv.getEvaluations(change.currentValue._id).subscribe({
        next: (evaluations: any) => {
          evaluations = evaluations.map((_evaluation: any) => {
            _evaluation.start = _evaluation.date;
            _evaluation.title = _evaluation.matiere.label;
            _evaluation.editable = true;
            _evaluation.color = 'red';
            this.cView.calendar.addEvent(_evaluation);
          });
          this.calendarOptions!.events = evaluations;
          this.cours = evaluations;
        },
      });
      this.ueSrv.getUes().subscribe({
        next: (_res: any) => {
          this.ue = _res[0].ues;
          console.log(this.ue);
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
}
