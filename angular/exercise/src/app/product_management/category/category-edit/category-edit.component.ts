import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categoryForm: FormGroup;
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {

  }



  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('index');
      this.getCategory(this.id);
    });
  }

  getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(category => {
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name),
      });
    });

  }

  updateCategory() {
    const category = this.categoryForm.value;
    console.log(this.id);
    this.categoryService.updateCategory(this.id, category).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

}
