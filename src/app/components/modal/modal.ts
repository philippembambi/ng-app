import { Component, computed } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
constructor(public taskService: TaskService) {}
  onDelete(id: number) {
    this.taskService.removeTask(id);
  }

  @Input() taskId!: number;
}
