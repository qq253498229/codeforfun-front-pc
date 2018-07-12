import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs';
import {SharedService} from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanActivateChild {


  constructor(
    private service: SharedService
  ) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.service.loading();
    return true;
  }
}
