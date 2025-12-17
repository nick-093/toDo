import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from '../services/tasks.service';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    constructor(public tasksService: TasksService) { }

    get tasks() {
        return this.tasksService.getTasks();
    }
}
