import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Category} from '../model/category';
import {CategoryService} from "../category/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categories: Category[];
  productForm: FormGroup;

  productDetail: Product;
  index: number;

  constructor(private categoryService: CategoryService,
              private _formBuilder: FormBuilder,
              private _productService: ProductService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.index = (this._activatedRoute.snapshot.params['index']);
    this._productService.findById(this.index).subscribe(data => {
      this.productDetail = data;
    });
    this.productForm = this._formBuilder.group({
      id: new FormControl(this.productDetail.id),
      name: new FormControl(this.productDetail.name),
      price: new FormControl(this.productDetail.price),
      description: new FormControl(this.productDetail.description),
      category: new FormControl(this.productDetail.category),
    })
    this.getAllCategory().subscribe(data => {
      this.categories = data;
    }, err => {
      console.log("Lay danh sach that bai");
    }, () => {
      console.log("Lay danh sach thanh cong");
    });

  }

  update() {
    const product = this.productForm.value;
    this._productService.update(product);
    this._router.navigate(['/product/list']);
  }

  getAllCategory() {
    return this.categoryService.getAll();
  }

}
