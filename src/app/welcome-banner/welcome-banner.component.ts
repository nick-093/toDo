import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-welcome-banner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './welcome-banner.component.html',
    styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit {
    isVisible = true;
    pendingFeatures: string[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any>('assets/resources.json').subscribe({
            next: (data) => {
                if (data && data.pendingFeatures) {
                    this.pendingFeatures = data.pendingFeatures;
                }
            },
            error: (err) => console.error('Failed to load resources', err)
        });
    }

    close() {
        this.isVisible = false;
    }
}
