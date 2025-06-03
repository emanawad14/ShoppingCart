import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {



  private readonly authsService=inject(AuthService);
  private readonly router=inject(Router);
  private readonly ToastrService=inject(ToastrService);



RegisterForm:FormGroup=new FormGroup
({
  name:new FormControl(null, [Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
  email:new FormControl(null , [Validators.required, Validators.email]),
  password:new FormControl(null ,[ Validators.required ,Validators.pattern(/^[A-Z]\w{7,}$/)]),
  rePassword:new FormControl(null ,[Validators.required]),
  phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),

} , this.confirmData);

isLoading:boolean=false;
isSuccess:string='';
ErrorMsg:string='';

submitForm():void
{
  if(this.RegisterForm.valid)
  {
    this.isLoading=true;
    this.authsService.getregisterData(this.RegisterForm.value).subscribe({
      next:(res)=>{
      console.log(res);
      if(res.message === 'success')
      {

        this.isSuccess=res.message;

       
        setTimeout(() => {
          this.router.navigate(['/login']);
           this.ToastrService.success(res.message,"Go To Login");
          
        }, 300);
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


confirmData(group:AbstractControl)
{
 const password=group.get('password')?.value;
 const rePassword=group.get('rePassword')?.value;

return password === rePassword ?null : {mismatch:true}
}

}
