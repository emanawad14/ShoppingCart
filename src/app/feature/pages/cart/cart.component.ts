import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

import { ICart } from '../../interfaces/cart/icart';
import { CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe , RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartDetails: ICart = {} as ICart;

   private readonly cartService=inject(CartService)

   ngOnInit(): void {
    this.getCartData();
  }
  getCartData(): void {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartDetails = res.data;
      },
    });
  }





  removeCartItem(id: string): void {
    this.cartService.removeSpecificCartItem(id).subscribe({
      next: (res) => {
        this.cartDetails = res.data;
       
        
      },
    });
  }




  updateCount(id: string, count: number): void {
    this.cartService.updateProductQuantity(id, count).subscribe({
      next: (res) => {
        this.cartDetails = res.data;
       
      },
    });
  }





  deleteAllCart() {



    // this.cartService.clearAllCarts().subscribe(
    //   {
    //      next: (res) => {
    //     this.cartDetails = res.data;
       
    //   },

    //   }
    // )
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D19C97',
      cancelButtonColor: '#D19C97',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.clearAllCarts().subscribe({
          next: (res) => {
            if (res.message == 'success') {
              this.cartDetails = {} as ICart;
               this.cartService.cartNumber.next(0);
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }

}
