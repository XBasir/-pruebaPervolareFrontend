import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryIndexComponent } from './category-index/category-index.component';
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryRestService } from './category-rest.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CategoryIndexComponent, CategoryCreateComponent, CategoryEditComponent, CategoryTreeComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryRestService
  ]
})
export class CategoryModule { }
