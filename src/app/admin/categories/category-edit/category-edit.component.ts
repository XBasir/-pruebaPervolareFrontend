import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CategoryRestService } from '../category-rest.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  updateCategory: FormGroup;  
  @Input() data:any;
  constructor(private route: ActivatedRoute, private categoryRest: CategoryRestService, private router: Router) { }

  ngOnInit() {   
     let id = this.route.snapshot.params.id;
     this.categoryRest.editCategory(id).subscribe(
      (response) => {
        this.updateCategory.patchValue({
          'email':response.category.email
        })
      },
      (error) => console.log(error) 
    );

      console.log(this.data);

      this.updateCategory = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email])
      });    
  }

  get email() { return this.updateCategory.get('email'); }

  updateCategoryDetails(){
    let id = this.route.snapshot.params.id;
    this.categoryRest.updateCategory(this.updateCategory,id).subscribe(
      (response) => {
        console.log(response),
        this.router.navigate(['categorys'])
      },
      (error) => console.log(error),
      () => console.log('completed') 
    );
  }
}
