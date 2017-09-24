import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: '../app/app.component.html'
})
export class AppComponent {
  pageTitle: string = 'DFCI Test Code';

  constructor(private authService: AuthService) { }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
  }
}
