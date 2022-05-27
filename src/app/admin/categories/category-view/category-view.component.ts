import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryRestService } from '../category-rest.service';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  categoryList: Array<object> = [];
  serverErrors = [];
  registerForm: FormGroup
  constructor(private route: ActivatedRoute, private categoryRest: CategoryRestService, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.loadCategories();
      this.categoryRest.getCategory(id).subscribe(
       (response) => {
         console.log(response)
         this.registerForm.patchValue({
           'title':response.category.title,
           'code':response.category.code,
           'description':response.category.description,
           'idParentCategory':response.category.idParentCategory,
         })
       },
       (error) => console.log(error) 
     );
 
     this.registerForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10),
        Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/)]),
      'code': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10),
        Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/)]),
      'description': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(500),
        Validators.pattern(/^(?:[a-zA-Z0-9\s]+)?$/)]),
      'idParentCategory': new FormControl(null, [])
      }) 
  }

  get title() { return this.registerForm.get('title'); }
  get code() { return this.registerForm.get('code'); }
  get description() { return this.registerForm.get('description'); }
  get idParentCategory() { return this.registerForm.get('idParentCategory'); }


  loadCategories() {
    this.categoryRest.getCategories().subscribe(
      (response) => { console.log(this.categoryList = response["category"]); },
      (error) => { console.log(error) }
     );
  }
}
