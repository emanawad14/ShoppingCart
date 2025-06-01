import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = 
[


    {path:'auth' , component:AuthLayoutComponent , title:'Auth', children:[
        {
            path:'login' , loadComponent:()=>import('./feature/pages/login/login.component').then((c)=>c.LoginComponent) , title:'Login'
        },
        {
            path:'register' , loadComponent:()=>import('./feature/pages/register/register.component').then((c)=>c.RegisterComponent) , title:'Register'
        }
    ]},
    {path:'blank' , component:BlankLayoutComponent , children:[
        {
            path:'home' , loadComponent:()=>import('./feature/pages/home/home.component').then((c)=>c.HomeComponent) , title:'home'
        }
    ]}, 
];
