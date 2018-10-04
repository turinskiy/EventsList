import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr/>
  <div cla="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail [event]="event"></event-thumbnail>
    </div>
  </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
