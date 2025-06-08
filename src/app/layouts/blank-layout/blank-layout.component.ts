import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { AuthService } from '../../feature/services/auth/auth.service';

@Component({
  selector: 'app-blank-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

  private readonly http=inject(AuthService);

  hamada()
  {
    this.http.logOut()
  }
  

}
