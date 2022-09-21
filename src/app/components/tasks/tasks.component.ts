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

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
      this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
