import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { CalendarOptions, defineFullCalendarElement, ViewApi } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
defineFullCalendarElement();

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.sass']
})
export class CoursComponent implements OnInit {

  monthly = true;
  cView!: ViewApi;
  calendarOptions?: CalendarOptions = {
    plugins: [dayGridPlugin],
    editable: true,
    initialView: 'dayGridWeek',
    locale: 'fr',
    firstDay: 1,
    showNonCurrentDates: false,
    buttonText: {
      today: "Aujourd'hui",
      // week: 'Hebdo',
      // month: 'Mensuel',
    },
    eventClick: (event) => {
      alert()
    },
    viewDidMount: (info) => (this.cView = info.view),
  };
  display = false;
  @Input() classeId!: string;

  constructor() { }

  ngOnInit(): void {
    
  }
  
  ngDoCheck(){
    const el = document.getElementById('calendar');
    if(el){
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
