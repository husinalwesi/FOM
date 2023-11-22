import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = typeof window !== "undefined" ? !!localStorage.getItem('token') : false;//is user logged in
    if (currentUser) { return true; }// logged in so return true
    if (isPlatformBrowser(this.platformId))
      this.router.navigateByUrl(`/${localStorage.getItem('LANGUAGE') || 'en'}/error/401`);
    return false;
  }
}