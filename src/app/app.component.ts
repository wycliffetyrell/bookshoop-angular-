import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';
import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logOut() {
    this.authService.logOut();
  }
}
