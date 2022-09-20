import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Task } from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { } // in order to use service add it in constructor as a provider

  ngOnInit(): void { // void means function does not return anything
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
    // this.tasks = this.taskService.getTasks(); usually you want to use observables dealing with asynchronous data from server; we just bringing file in
  }

}
