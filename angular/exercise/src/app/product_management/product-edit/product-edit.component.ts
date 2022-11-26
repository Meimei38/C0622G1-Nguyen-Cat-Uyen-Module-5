import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;

  productDetail: Product;
  index: number;

  constructor(private _formBuilder: FormBuilder,
              private _productService: ProductService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.index = (this._activatedRoute.snapshot.params['index']) + 1;
    this.productDetail = this._productService.findById(this.index);
    this.productForm = this._formBuilder.group({
      id: new FormControl(this.productDetail.id),
      name: new FormControl(this.productDetail.name),
      price: new FormControl(this.productDetail.price),
      description: new FormControl(this.productDetail.description),
    })

  }

  update() {
    const product = this.productForm.value;
    this._productService.update(product);
    this._router.navigate(['/product/list']);
  }

}
