import { Component, OnChanges, OnDestroy, Input, OnInit, SimpleChanges, DoCheck, AfterContentInit, ViewChild, ContentChildren, AfterContentChecked, AfterViewChecked, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  counter = 0;
  interval: any;
  
  @Input()
  channelName = '';

 // @ContentChild('projectedContent') projectedContent: any;
  @ContentChildren('projectedContent') projectedContent: any;
  @ViewChildren('childContent') childContent: any;
  

  constructor() { 
  console.log("Child Constructor is called");
  
}

  ngOnInit() {
    console.log("Child OnInit is called");
    console.log('OnInit -' + this.projectedContent);
    console.log('OnInit -' + this.childContent);
/*  
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter)
    }, 1000);
*/  
  }

  ngOnDestroy() {  //component removed from the DOM.
 //   clearInterval(this.interval);
    console.log("Child OnDestroy is called");
    
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log("Child onChanges is called");
    console.log('OnChanges - ' + this.projectedContent);
    console.log('OnInit -' + this.childContent);
  }

  ngDoCheck(){
  console.log("Child DoCheck is called");
  console.log('Docheck - ' + this.projectedContent);
  console.log('DoCHECK -' + this.childContent);

  }

  ngAfterContentInit(){
    console.log("in After Content Init");
    console.log('AfterContentInit - ' + this.projectedContent);
    console.log('After content init -' + this.childContent);
  }
  ngAfterContentChecked(): void {
    console.log('In After Content Init');
    console.log('After content checked -' + this.childContent);
    
  }

  ngAfterViewInit(): void {
    console.log('in After Content Init');
    console.log('After After view init -' + this.childContent);
  }
 
  ngAfterViewChecked(): void {
    console.log('In After view checked');
    console.log('After After view checked - '  + this.childContent);
  }

}
