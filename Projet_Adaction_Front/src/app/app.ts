import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('Projet_Adaction_Front');
  user: any = null;
  currentUrl: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUserInfo();
    console.log('Utilisateur connecté :', this.user);
      this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }
  

  

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
  