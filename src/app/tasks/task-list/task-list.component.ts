import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from '../services/tasks.service';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [CommonModule, ConfirmationModalComponent],
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    tasks$;
    showDeleteModal = false;
    taskToDeleteId: number | null = null;

    constructor(private tasksService: TasksService) {
        this.tasks$ = this.tasksService.tasks$;
    }

    confirmDelete(id: number) {
        this.taskToDeleteId = id;
        this.showDeleteModal = true;
    }

    cancelDelete() {
        this.showDeleteModal = false;
        this.taskToDeleteId = null;
    }

    proceedDelete() {
        if (this.taskToDeleteId) {
            this.tasksService.deleteTask(this.taskToDeleteId);
            this.cancelDelete();
        }
    }
}
