import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any = null;

  constructor() {
    const userData = localStorage.getItem('loggedUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    }
  }

  getUserId(): number | null {
    return this.currentUser?.userId || null;
  }

  getUser(): any {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
    this.currentUser = null;
  }
}
