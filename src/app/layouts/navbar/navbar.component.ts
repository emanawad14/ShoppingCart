import { Component, HostListener, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../feature/services/auth/auth.service';

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

  
}
