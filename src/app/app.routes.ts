import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotFoundComponent } from './feature/pages/not-found/not-found.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { logedGuard } from './core/guards/loged/loged.guard';

export const routes: Routes = 
[

    
    {path:'' , component:AuthLayoutComponent , canActivate:[logedGuard] , title:'Auth', children:[

        {path:'' ,redirectTo:"login" , pathMatch:'full'},
        {
            path:'login' , loadComponent:()=>import('./feature/pages/login/login.component').then((c)=>c.LoginComponent) , title:'Login'
        },
        {
            path:'register' , loadComponent:()=>import('./feature/pages/register/register.component').then((c)=>c.RegisterComponent) , title:'Register'
        },
         {
            path:'forgetpassword' , loadComponent:()=>import('./feature/pages/forgetpassword/forgetpassword.component').then((c)=>c.ForgetpasswordComponent) , title:'forgetpassword'
        }
    ]},
    {path:'' , component:BlankLayoutComponent  , canActivate:[authGuard] , children:[
        {
            path:'home' , loadComponent:()=>import('./feature/pages/home/home.component').then((c)=>c.HomeComponent) , title:'home'
        },
        {
            path:'services' , loadComponent:()=>import('./feature/pages/services/services.component').then((c)=>c.ServicesComponent) , title:'services'
        },
        {
            path:'product' , loadComponent:()=>import('./feature/pages/product/product.component').then((c)=>c.ProductComponent) , title:'product'
        },
        {
            path:'aboutus' , loadComponent:()=>import('./feature/pages/about/about.component').then((c)=>c.AboutComponent) , title:'aboutus'
        },
        {
            path:'blog' , loadComponent:()=>import('./feature/pages/blog/blog.component').then((c)=>c.BlogComponent) , title:'blog'
        },
        {
            path:'contactus' , loadComponent:()=>import('./feature/pages/contact/contact.component').then((c)=>c.ContactComponent) , title:'contactus'
        },
        {
            path:'wishlist' , loadComponent:()=>import('./feature/pages/wishlist/wishlist.component').then((c)=>c.WishlistComponent) , title:'wishlist'
        },
        {
            path:'cart' , loadComponent:()=>import('./feature/pages/cart/cart.component').then((c)=>c.CartComponent) , title:'cart'
        },
       
        
       
        












         {path:'**' , component:NotFoundComponent , title:'notFound'}
    ]}
];
