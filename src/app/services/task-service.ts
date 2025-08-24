import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  status: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<Task[]>([
    { id: 1, title: 'Faire les courses', status: 'Backlog', description: 'Acheter du lait' },
    { id: 2, title: 'Réviser Angular', status: 'Done', description: 'Lire les docs' },
    { id: 3, title: 'Envoyer un email', status: 'In progress', description: 'Email au client' },
  ]);

  addTask(task: Task) {
    this.tasks.update(tasks => [...tasks, task]);
    console.log('Task added:', task );

  }
}
