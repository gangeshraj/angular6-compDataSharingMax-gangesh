import { Component, OnInit, Input, ViewEncapsulation, 
        OnChanges, SimpleChanges,DoCheck,AfterContentInit, 
        AfterContentChecked, AfterViewInit, AfterViewChecked, 
        OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

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
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;


  constructor() {
    console.log("server-element constructor called!");
   }


  ngOnChanges(changes:SimpleChanges){
    console.log("server-element ngOnChanges called!");
    console.log("what is inside changes of type simpleChanges",changes);
  }

  ngOnInit() {
    console.log("server-element onInit called!")
    console.log("text Content : "+this.header.nativeElement.textContent);
    console.log("text Content from parent : "+this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("server-element ngDoCheck called!")
  }


  ngAfterContentInit(){
    console.log("server-element ngAfterContentInit called!")
    console.log("text Content : "+this.header.nativeElement.textContent);
    console.log("text Content from parent : "+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("server-element ngAfterContentChecked called!");
    console.log("text Content : "+this.header.nativeElement.textContent);
    console.log("text Content from parent : "+this.paragraph.nativeElement.textContent);
    
  }

  ngAfterViewChecked(){
    console.log("server-element ngAfterViewChecked is called!");
    console.log("text Content : "+this.header.nativeElement.textContent);
    console.log("text Content from parent : "+this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log("server-element ngAfterViewInit called!");
    console.log("text Content : "+this.header.nativeElement.textContent);
    console.log("text Content from parent : "+this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log("server-element ngOnDestroy called!");
  }

}
