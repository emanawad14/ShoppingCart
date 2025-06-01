import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from '../../services/Home/home.service';
import { IProducts } from '../../interfaces/Products/iproducts';
import { SearchPipe } from '../../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [ FormsModule , SearchPipe ,CarouselModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{

  test:string='';

  products:IProducts[]=[]
  ngOnInit(): void {
      this.getAllproduct()
  }
private readonly homeService=inject(HomeService)


getAllproduct()
{
  this.homeService.getAllProducts().subscribe(
    {
      next:(res)=>
      {
        console.log(res.data);
        this.products=res.data
      },
      error:(err)=>
      {
        console.log(err);
        

      }
    }
  )
}


customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    640: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    },
    1280: {
      items: 4
    }
  },
  nav: false
};


}
