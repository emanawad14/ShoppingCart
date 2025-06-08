import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/cate/category.service';
import { Icategory } from '../../interfaces/Cate/icategory';
import { DatePipe } from '@angular/common';
import { Sub } from '../../interfaces/SubCate/sub';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [DatePipe , RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent  implements OnInit{

  Categories:Icategory[]=[];
  subCategorirs:Sub[]=[]
  private readonly category=inject(CategoryService)


  ngOnInit(): void {
      this.getCategory();
      this.uubCategory()
  }
//*******************  Category *********************** */
  getCategory()
  {
    this.category.getAllCategory().subscribe(
      {
        next:(res)=>
        {
          console.log(res.data);
          this.Categories=res.data
        },
        error:(err)=>
        {
          console.log(err);
          
        }
      }
    )
  }

  //*******************  SubCategory *********************** */
  uubCategory()
  {
    this.category.getAllSubCategory().subscribe(
      {
         next:(res)=>
        {
          console.log(res.data);
          this.subCategorirs=res.data
          
        },
        error:(err)=>
        {
          console.log(err);
          
        }

      }
    )
  }

}
