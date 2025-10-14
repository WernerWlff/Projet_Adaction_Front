import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Projet_Adaction_Front');

  constructor(private router: Router) {}

  // Permet de cacher le header sur la page de login
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}

