import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  isChild = true;
  channelName = '';

  constructor() { 
    console.log("Parent Constructor is called")
  }

  ngOnInit() {
    console.log("Parent OnInit is called")
  }

  ngOnChanges(){
    console.log("Parent onChanges is called")
  }

  ngDoCheck(){
    console.log("Parent doCheck is called");
  }

  toggleChild(){
    this.isChild = !this.isChild;
  }

}
