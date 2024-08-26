import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate  {

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private userService: UserService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
  
  Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
  if (this.userAuthService.getToken() !== null) {
    const role = route.data['roles'] as Array<string>;

    if (role) {
      const match = this.userService.roleMatch(role);

      if (match) {
        return true;
      } else {
        this.router.navigate(['/forbidden']);
        return false;
      }
    }
  }

  this.router.navigate(['/login']);
  return false;
}
};
