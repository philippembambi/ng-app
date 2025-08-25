import { Component, EventEmitter, Output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-todo-list.html',
  styleUrl: './new-todo-list.css',
})
export class NewTodoList {
  constructor(private taskService: TaskService, private router: Router) {}
  tasks = computed(() => this.taskService.tasks());

  taskName = '';
  status = '';
  description = '';
  statuses = ['Done', 'In progress', 'Backlog'];

  onSubmit() {
    if (!this.taskName || !this.status) return;

    const newTask = {
      id: this.tasks().length + 1,
      title: this.taskName,
      status: this.status,
      description: this.description,
    };
    this.taskService.addTask(newTask);
    this.taskName = '';
    this.status = '';
    this.description = '';
    this.router.navigate(['/']);
  }
}
