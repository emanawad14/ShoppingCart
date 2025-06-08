import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http:HttpClient) { }

  myToken=localStorage.getItem('userToken')!;
  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  addProducttoCart(id:string):Observable<any>
  {
    return this.http.post('https://ecommerce.routemisr.com/api/v1/cart' 
      ,
     {
      "productId": id,
   }
   , 
   {
    headers:
    {
      token:this.myToken
    }
   }
  
   
    )
  }



 getLoggedUserCart():Observable<any>
 {
  return this.http.get('https://ecommerce.routemisr.com/api/v1/cart' , 
     {
    headers:
    {
      token:this.myToken
    }
   }
  )
 }




  removeSpecificCartItem(id: string): Observable<any> {
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

       {
    headers:
    {
      token:this.myToken
    }
   }
    );
  }
  updateProductQuantity(id: string, newCount: number): Observable<any> {
    return this.http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, 
      {
      count: newCount,
      },
      {
         headers:
    {
      token:this.myToken
    }
   

      }
     
      



      
    );
  }
  clearAllCarts(): Observable<any> {
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart`

      ,
      {
         headers:
    {
      token:this.myToken
    }

      }
      
      
   
    );
  }




  
  
}
