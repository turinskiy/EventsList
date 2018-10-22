import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsable-well',
  templateUrl: `./collapsable-well.component.html`,
  styleUrls: ['./collapsable-well.component.css']
})
export class CollapsableWellComponent implements OnInit {
  visible: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleContent(){
    this.visible = !this.visible;
  }
}
