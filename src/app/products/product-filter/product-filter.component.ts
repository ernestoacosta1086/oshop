import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent {
  categories$;
  @Input() category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }


}
