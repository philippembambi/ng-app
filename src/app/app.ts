import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  template: `
    <div class='container py-5'>
      <app-header></app-header>
      <div class="container mt-4">
        <router-outlet></router-outlet>
      </div>
    </div>
    `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-costa-app');
}
