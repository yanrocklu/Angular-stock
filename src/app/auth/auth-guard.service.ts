import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(['signin']);
    }
  }

}
