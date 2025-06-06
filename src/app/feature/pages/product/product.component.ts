import { Component, inject } from '@angular/core';
import { HomeService } from '../../services/Home/home.service';
import { IProducts } from '../../interfaces/Products/iproducts';
import { SearchPipe } from '../../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-product',
  imports: [ FormsModule , SearchPipe,NgxPaginationModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
        p: number = 1;
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

}
