import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryIndexComponent } from './category-index/category-index.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryTreeComponent } from './category-tree/category-tree.component';

const routes: Routes = [
 // { path: 'list', component: CategoryListComponent, outlet: 'users' },
  {
    path: '', 
    component: CategoryIndexComponent, 
    children: [
      {path: 'create', component: CategoryCreateComponent},
      {path: 'edit/:id', component: CategoryEditComponent},
      {path: 'delete', component: CategoryIndexComponent},
      {path: 'tree', component: CategoryTreeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
