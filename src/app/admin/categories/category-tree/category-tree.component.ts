import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryRestService } from '../category-rest.service';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {
  categoryList: Array<object> = [];

  constructor(private route: ActivatedRoute, private categoryRest: CategoryRestService, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryRest.getCategories().subscribe(
      (response) => { console.log(this.categoryList = response["category"]); },
      (error) => { console.log(error) }
     );
  }

  deleteCategory(id: number) {
    if(confirm("Are you sure to delete ")) {
      this.categoryRest.deleteCategory(id).subscribe(
        (response) => this.loadCategories(),
        (error) => console.log(error)
      );
    }
  }

  editCategory(id: number) {
    this.router.navigate(['categorys/edit',id]);
  }
}
