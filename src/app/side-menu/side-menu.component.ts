import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-side-menu',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
    @Input() isOpen = false;
    @Output() close = new EventEmitter<void>();

    menuItems = [
        { icon: '📅', label: 'Today', active: true },
        { icon: '🗓️', label: 'Upcoming', active: false },
        { icon: '📁', label: 'Projects', active: false },
        { icon: '⚙️', label: 'Settings', active: false }
    ];

    onClose() {
        this.close.emit();
    }
}
