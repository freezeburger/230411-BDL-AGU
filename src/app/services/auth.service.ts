import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any | null = null;

  constructor() { }

  login( credentials:{email:string, password:string}){
    // Verification
    this.user = Object.assign({},credentials);
    console.table( this.user);
  }
}
