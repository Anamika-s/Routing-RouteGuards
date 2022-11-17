import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class ProtectGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: RegisterComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return window.confirm("Are you sure you want to go to other link without submiiting");
    return false;
  } 
  
}
