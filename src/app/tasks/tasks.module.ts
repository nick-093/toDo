import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TaskListComponent,
        AddTaskComponent
    ],
    exports: [
        TaskListComponent,
        AddTaskComponent
    ]
})
export class TasksModule { }
