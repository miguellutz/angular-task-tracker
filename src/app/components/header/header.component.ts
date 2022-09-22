import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular Task Tracker'; // recommended --> add types to properties and functions
  showAddTask: boolean = true;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  } // runs whenever object is initialized

  ngOnInit(): void { // lifecycle method
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
