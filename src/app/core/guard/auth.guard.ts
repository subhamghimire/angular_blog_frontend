import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}
  accessToken!: string;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // this._authService._accessToken$.subscribe((token) => {
    //   this.accessToken = token;
    //   return token;
    // });
    if (localStorage.getItem('access_token')) {
      return true;
    }

    if (this.accessToken) {
      return true;
    }
    this._router.navigate(['']);
    return false;
  }
}
