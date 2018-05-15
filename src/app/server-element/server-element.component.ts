import { Component, OnInit, Input, ViewEncapsulation, 
        OnChanges, SimpleChanges,DoCheck,AfterContentInit, 
        AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation :ViewEncapsulation.Emulated //None,Native
})
export class ServerElementComponent implements OnInit,OnChanges,
DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input('elementAliasName') element:{type:string,name:string,content:string};
  @Input() name:string;

  constructor() {
    console.log("server-element constructor called!");
   }


  ngOnChanges(changes:SimpleChanges){
    console.log("server-element ngOnChanges called!");
    console.log("what is inside changes of type simpleChanges",changes);
  }

  ngOnInit() {
    console.log("server-element onInit called!")
  }

  ngDoCheck(){
    console.log("server-element ngDoCheck called!")
  }


  ngAfterContentInit(){
    console.log("server-element ngAfterContentInit called!")
  }

  ngAfterContentChecked(){
    console.log("server-element ngAfterContentChecked called!");
  }

  ngAfterViewChecked(){
    console.log("server-element ngAfterViewChecked called!");
  }

  ngAfterViewInit(){
    console.log("server-element ngAfterViewInit called!");
  }

  ngOnDestroy(){
    console.log("server-element ngOnDestroy called!");
  }

}
