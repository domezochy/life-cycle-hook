import { Component, OnChanges, OnDestroy, Input, OnInit, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck{

  counter = 0;
  interval: any;
  @Input()
  channelName = "";
  
  constructor() { 
  console.log("Child Constructor is called");
}

  ngOnInit() {
    console.log("Child OnInit is called");
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
  }

  ngDoCheck(){
  console.log("Child DoCheck is called");

  }

}
