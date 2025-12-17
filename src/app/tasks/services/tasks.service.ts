import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasksSubject = new BehaviorSubject<Task[]>([]);
    tasks$ = this.tasksSubject.asObservable();

    constructor() {
        const pendingTasks = this.getPendingTasks();
        this.tasksSubject.next([...pendingTasks]);
    }

    addTask(task: Task) {
        const currentTasks = this.tasksSubject.value;
        this.tasksSubject.next([task, ...currentTasks]);
        this.saveTaskToLocalStorage(task);
    }

    private getPendingTasks(): Task[] {
        const tasks = localStorage.getItem('pendingTasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    private saveTaskToLocalStorage(task: Task) {
        const tasks = this.getPendingTasks();
        tasks.unshift(task);
        localStorage.setItem('pendingTasks', JSON.stringify(tasks));
    }
}
