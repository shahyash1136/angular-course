import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ name: string, content: string }>();
  newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput) {
    console.log(nameInput.value)
    console.log(this.serverContentInput)
    /* this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }

  onAddBlueprint() {
    /*  this.bluePrintCreated.emit({
       name: this.newServerName,
       content: this.newServerContent
     }) */
  }

}
