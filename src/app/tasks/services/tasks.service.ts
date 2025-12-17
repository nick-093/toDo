import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks: Task[] = [];

    constructor(private http: HttpClient) {
        this.http.get<Task[]>('assets/tasks.json').subscribe(tasks => {
            this.tasks = tasks;
        });
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(task: Task) {
        this.tasks.unshift(task);
    }
}
