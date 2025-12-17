import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksModule } from './tasks/tasks.module';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TasksModule, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
