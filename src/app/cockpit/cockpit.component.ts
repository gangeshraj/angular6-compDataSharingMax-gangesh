import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated =new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated =new EventEmitter<{serverName:string,serverContent:string}>();

  @ViewChild('serverNameInput') nameInputFromViewChild: ElementRef;

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName:this.nameInputFromViewChild.nativeElement.value,
      serverContent:this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  }

}
