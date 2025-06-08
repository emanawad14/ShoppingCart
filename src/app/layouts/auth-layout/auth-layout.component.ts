import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { AuthService } from '../../feature/services/auth/auth.service';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

   private readonly http=inject(AuthService);

  hamada()
  {
    this.http.logOut()
  }

}
