import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  IsAuthenticated () : boolean
  {
     return true;
  }
  constructor() { }
}