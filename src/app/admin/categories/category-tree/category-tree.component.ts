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
  finalTree = [];

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
        for(let i = 0; i < this.tree.length; i++){
          const branch = {title: this.tree[i].title, line: 1};
          this.finalTree.push(branch);
          if(this.tree[i].children.length > 0){
            for(let j = 0; j < this.tree[i].children.length; j++){
              const branch2 = {title: this.tree[i].children[j].title, line: 2};
              this.finalTree.push(branch2);
              if(this.tree[i].children[j].children.length > 0){
                for(let k = 0; k < this.tree[i].children[j].children.length; k++){
                  const branch3 = {title: this.tree[i].children[j].children[k].title, line: 3};
                  this.finalTree.push(branch3);
                  if(this.tree[i].children[j].children[k].children.length > 0){
                    for(let l = 0; l < this.tree[i].children[j].children[k].children.length; l++){
                      const branch4 = {title: this.tree[i].children[j].children[k].children[l].title, line: 4};
                      this.finalTree.push(branch4);
                    }
                  }
                }
              }
            }
          }
        }
      },
      (error) => { console.log(error) }
     );
  }
}
