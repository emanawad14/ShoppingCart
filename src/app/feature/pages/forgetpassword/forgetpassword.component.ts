import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {


  private readonly AuthsService=inject(AuthService);
  private readonly ToastrService=inject(ToastrService);
  private readonly router=inject(Router);

  step:number =1;
  isLoading:boolean=false;

 EmailForgetPassword:FormGroup =new FormGroup
 ({
  email:new FormControl(null ,[Validators.required ,Validators.email])
 })

 emailforget():void{
  if(this.EmailForgetPassword.valid)
  {
    // console.log(this.EmailForgetPassword.value);
    this.isLoading=true;
    this.AuthsService.EmailSignUP(this.EmailForgetPassword.value).subscribe(
      {
        next:(res)=>
        {
          console.log(res);
          if(res.statusMsg === 'success')
          {
            this.step=2;
          }
          this.ToastrService.success(res.message , 'check phone and send the code');
          this.isLoading=false;
        }
        ,error:(err)=>
        {
          console.log(err);
          this.isLoading=false;
          

        }
      }
    )
    
  }
 }

//  ******************************************************

CodeForgetPassword:FormGroup =new FormGroup
 ({
  resetCode:new FormControl(null ,[Validators.required ,Validators.pattern(/^[0-9]{5,}$/)])
 })

 codeforget():void{
  if(this.CodeForgetPassword.valid)
  {
    // console.log(this.CodeForgetPassword.value);
    this.isLoading=true;

    this.AuthsService.CodeSignUP(this.CodeForgetPassword.value).subscribe({
      next:(res)=>
        {
          console.log(res);
          if(res.status === 'Success')
          {
            this.step=3;
            this.isLoading=false;
          
          }
          this.ToastrService.success(res.message ,'please dont forgetPassword Agin ');
        }
        ,error:(err)=>
        {
          console.log(err);
          this.isLoading=false;
          

        }
    })
    
  }
 }

//  ******************************************************


PassWordForgetPassword:FormGroup =new FormGroup
 ({

  email:new FormControl(null ,[Validators.required ,Validators.email]),
  newPassword:new FormControl(null ,[Validators.required ,Validators.pattern(/^[A-Z]\w{7,}$/)])
 })

 passwordforget():void{
  if(this.PassWordForgetPassword.valid)
  {
    // console.log(this.PassWordForgetPassword.value);
    this.isLoading=true;
    this.AuthsService.PasswordSignUP(this.PassWordForgetPassword.value).subscribe({

      next:(res)=>
        {
          console.log(res);
          
          localStorage.setItem('usertoken' ,res.token);
          this.router.navigate(['/home']);
          this.ToastrService.success(res.message ,'go to the App');
          this.isLoading=false;
        }
        ,error:(err)=>
        {
          console.log(err);
          this.isLoading=false;
          

        }

    })
    
  }
 }


}
