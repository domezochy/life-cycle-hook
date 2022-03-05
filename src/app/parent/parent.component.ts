import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isChild = false;

  constructor() { 
    console.log("Parent Constructor is called")
  }

  ngOnInit() {
    console.log("Parent OnInit is called")
  }

  toggleChild(){
    this.isChild = !this.isChild;
  }

}
