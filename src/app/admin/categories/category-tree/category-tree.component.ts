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
  tree = [];

  constructor(private route: ActivatedRoute, private categoryRest: CategoryRestService, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryRest.getCategories().subscribe(
      (response) => { 
        this.categoryList = response["category"]
    
        const nest = (items, id = null, link = 'idParentCategory') =>
        items
          .filter(item => item[link] === id)
          .map(item => ({ ...item, children: nest(items, item.id) }));
    
        this.tree = nest(this.categoryList);
        console.log(this.tree)
      },
      (error) => { console.log(error) }
     );
  }
}
