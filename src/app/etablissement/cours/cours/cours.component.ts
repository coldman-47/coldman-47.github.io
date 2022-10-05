import { Component, Input, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import {
  CalendarOptions,
  defineFullCalendarElement,
  ViewApi,
} from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Classe } from '../../../core/models/classe/classe';
import { UeService } from '../../../core/services/ue/ue.service';
import { Ue } from '../../../core/models/ue/ue';
import { CoursService } from '../../../core/services/cours/cours.service';
import { Cours } from 'src/app/core/models/cours/cours';
// defineFullCalendarElement();

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.sass'],
})
export class CoursComponent implements OnInit {
  monthly = true;
  edit = false;
  cView!: ViewApi;
  selected?: Cours;
  calendarOptions?: CalendarOptions = {
    plugins: [dayGridPlugin],
    editable: true,
    initialView: 'dayGridWeek',
    locale: 'fr',
    firstDay: 1,
    showNonCurrentDates: false,
    buttonText: {
      today: "Aujourd'hui"
    },
    eventClick: (event) => {
      this.selected = <Cours>event.event.extendedProps;
      this.edit = true;
      this.display = true;
    },
    viewDidMount: (info) => (this.cView = info.view),
  };
  display = false;
  @Input() classe!: Classe;
  cours: Cours[] = [];

  constructor(private srv: CoursService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    const change = changes.classe;
    if (change.previousValue !== change.currentValue) {
      this.srv.getCours(change.currentValue._id).subscribe({
        next: (cours: any) => {
          cours = cours.map((_cours: any) => {
            _cours.start = _cours.date;
            _cours.title = _cours.matiere.label;
            _cours.editable = true;
            this.cView.calendar.addEvent(_cours);
          });
          this.calendarOptions!.events = cours;
          this.cours = cours;
        }
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
    if (btn === 'fc-timeGridWeek-button' || btn === 'fc-dayGridMonth-button') {
      this.monthly = btn === 'fc-timeGridWeek-button' ? false : true;
      let options: any = this.cView.calendar.getOption('headerToolbar');
      options.center = this.monthly ? 'timeGridWeek' : 'dayGridMonth';
      this.cView.calendar.setOption('headerToolbar', options);
    }
  }
}
