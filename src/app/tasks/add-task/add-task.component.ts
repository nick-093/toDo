import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-add-task',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
    newTask: Partial<Task> = {
        name: '',
        type: 'Work',
        status: 'To Do',
        date: ''
    };

    constructor(private tasksService: TasksService) { }

    addTask() {
        if (this.newTask.name && this.newTask.date) {
            this.tasksService.addTask({
                id: Date.now(),
                name: this.newTask.name,
                type: this.newTask.type || 'Work',
                status: (this.newTask.status as any) || 'To Do',
                date: this.newTask.date
            });

            this.clearForm();
        }
    }

    clearForm() {
        this.newTask = {
            name: '',
            type: 'Work',
            status: 'To Do',
            date: ''
        };
    }
}

