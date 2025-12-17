import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks: Task[] = [
        { id: 1, name: 'Review Project Proposal', type: 'Work', status: 'To Do', date: '2024-10-24' },
        { id: 2, name: 'Gym Training', type: 'Personal', status: 'In Progress', date: '2024-10-23' },
        { id: 3, name: 'Submit Tax Report', type: 'Urgent', status: 'Completed', date: '2024-10-22' }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task) {
        this.tasks.unshift(task);
    }
}
