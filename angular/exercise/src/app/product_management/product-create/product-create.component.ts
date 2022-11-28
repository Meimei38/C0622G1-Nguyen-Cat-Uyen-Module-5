import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from "../service/product.service";
import { CategoryService } from '../category/category.service';
import {Category} from "../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[]
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  constructor(private _productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategory().subscribe( data => {
      this.categories = data;
    }, err => {
      console.log("Lay danh sach that bai");
    }, () => {
      console.log("Lay danh sach thanh cong");
    });
  }

  submit() {
    const product = this.productForm.value;
    this._productService.saveProduct(product);
    this.productForm.reset();
  }
  getAllCategory(){
    return this.categoryService.getAll();
  }
}
