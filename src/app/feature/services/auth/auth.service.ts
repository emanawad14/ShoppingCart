import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private readonly http=inject (HttpClient)

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






// signoutServices():void
// {
//   localStorage.removeItem('usertoken');
//   this.userData=null;
//    this.ToastrService.info('Please, my dear, fill out the information again')

//   this.router.navigate(['/register']);

// }


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
