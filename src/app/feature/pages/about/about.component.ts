import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand/brand.service';
import { Ibrand } from '../../interfaces/brand/ibrand';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent  implements OnInit{
  brands:Ibrand[]=[]
  private readonly brand=inject(BrandService);
  ngOnInit(): void {
      this.getBrand();
  }

  getBrand()
  {
    this.brand.getAllProducts().subscribe(
      {
        next:(res)=>
        {
         console.log(res.data);
         this.brands=res.data
         
        },
        error:(err)=>
        {
          console.log(err);
          
        }
      }
    )
  }

}
