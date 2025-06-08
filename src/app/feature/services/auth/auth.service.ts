import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private readonly http=inject (HttpClient);
  private readonly router=inject (Router);

   userData:any=null;

   
  getLoginData(data:object):Observable<any>
  {
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , data)
  }
  getregisterData(data:object):Observable<any>
  {
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , data)
  }



  saveUserToken():void
  {
    if(localStorage.getItem('userToken')!==null)
    {
        this.userData=  jwtDecode(localStorage.getItem('userToken') !)
    }
  }






logOut()
{
  localStorage.removeItem('userToken');
  this.userData=null;
  this.router.navigate(['/login'])
}


EmailSignUP(data:object):Observable<any>
{
  return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' ,data)
}



CodeSignUP(data:object):Observable<any>
{
  return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode' ,data)
}



PasswordSignUP(data:object):Observable<any>
{
  return this.http.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword' ,data)
}



}
