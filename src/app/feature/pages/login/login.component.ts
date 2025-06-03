import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


   private readonly authsService=inject(AuthService);
    private readonly router=inject(Router);
    private readonly ToastrService=inject(ToastrService);
  
  
  
  loginForm:FormGroup=new FormGroup
  ({
    
    email:new FormControl(null , [Validators.required, Validators.email]),
    password:new FormControl(null ,[ Validators.required ,Validators.pattern(/^[A-Z]\w{7,}$/)]),
    
    
  });
  
  isLoading:boolean=false;
  isSuccess:string='';
  ErrorMsg:string='';
  
  submitForm():void
  {
    if(this.loginForm.valid)
    {
      this.isLoading=true;
      this.authsService.getLoginData(this.loginForm.value).subscribe({
        next:(res)=>{
        console.log(res);
        if(res.message === 'success')
        {
  
          this.isSuccess=res.message;
  
         
          setTimeout(() => {

          //save token
            localStorage.setItem('usertoken' ,res.token);
            // this.authsService.saveUserToke();

           
            

            //navigate to home
            this.router.navigate(['/home']);
            this.ToastrService.success(res.message,"Go To home");
            
          },  300);
             //navaguiate login
        }
        this.isLoading=false;
        },
        error:(err :HttpErrorResponse)=>
        {
          console.log(err);
         this.ErrorMsg= err.error.message
          this.isLoading=false;
  
          
        }
      })
  
    }
   
    
  }
  
  
}
