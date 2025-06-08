import { Icategory } from './../../interfaces/Cate/icategory';
import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/cate/category.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-category-details',
  imports: [DatePipe],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {




   catigories: Icategory = {} as Icategory;

  

  private readonly _CategoriesService = inject(CategoryService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        let catId = res.get('id')!;
        this._CategoriesService.getSpecificCategories(catId).subscribe({
          next: (res) => {
            this.catigories = res.data;
          },
        });

        console.log(catId);
       
        
      },
    });
  }
}
