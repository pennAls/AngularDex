import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  optionsOpen: boolean = false;

  constructor(private router: Router) {}

  toggleOptions() {
    this.optionsOpen = !this.optionsOpen;
  }

  redirectToSearch(): void {
    this.router.navigate(['/AngularDex/search-pokemon']);
    console.log('a');
  }

  redirectToHome(): void {
    this.router.navigate(['/AngularDex/menu']);
  }
}
