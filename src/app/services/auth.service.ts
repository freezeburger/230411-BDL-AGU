/**
 * What to find here ?
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any | null = null;

  constructor() { }

  /**
   * Used to log user against API
   * @param credentials
   * @example
   *
   *  constructor( private auht:AuthService ){
   *    this.auth.login({email:'string', password:'string'} )
   *  }
   */
  login( credentials:{email:string, password:string}){
    // Verification
    this.user = Object.assign({},credentials);
    console.table( this.user);
  }
}
