import { Component, computed, effect, HostListener, inject, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../feature/services/auth/auth.service';
import { CartService } from '../../feature/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

   private readonly http=inject(AuthService);

  hamada()
  {
    this.http.logOut()
  }
  @Input() isLogin:boolean=true



 
  scroll: boolean = false;
  menuOpen: boolean = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scroll = window.scrollY > 0;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }



  readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);
  
  
  // isLogin = computed(() => !!this.authService.userData());
  // countCart = signal(0); // Reactive signal for cart count
  // countWhishlist= signal(0);

  // constructor() {
  //   // Effect runs when isLogin changes
  //   effect(() => {
  //     if (this.isLogin()) {
  //       console.log('User is logged in, fetching cart data...');
  //       /*********cart********* */
  //       this.cartService.cartNumber.subscribe({
  //         next: (value) => {
  //           this.countCart.set(value); // Update signal value
  //           console.log('Updated Cart Count:', value);
  //         }
  //       });

  //       this.cartService.getLoggedUserCart().subscribe({
  //         next: (res) => {
  //           this.cartService.cartNumber.next(res.numOfCartItems);
  //         }
  //       });


      
        
      
        


  //     } else {
  //       console.log('User is not logged in, skipping cart fetch.');
  //     }
  //   });
  // }
  
}
