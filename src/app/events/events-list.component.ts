import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
  // tslint:disable-next-line:component-selector
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr/>
  <div cla="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
  </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    // this.eventService
    //   .getEvents()
    //   .subscribe(events => { this.events = events; });
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
