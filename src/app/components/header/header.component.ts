import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Task Tracker'; // recommended --> add types to properties and functions

  constructor() { } // runs whenever object is initialized

  ngOnInit(): void { // lifecycle method
  }

  toggleAddTask() {
    console.log('toggle');
  }

}
