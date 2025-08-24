import { Component, computed } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NewTodoList } from '../components/todo/new-todo-list/new-todo-list';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'home-app',
  imports: [CommonModule, NgFor, NewTodoList],
  templateUrl: './home-app.html',
  styleUrl: './home-app.css'
})

export class HomeApp {
  constructor(public taskService: TaskService) {}
  tasks = computed(() => this.taskService.tasks());
}
