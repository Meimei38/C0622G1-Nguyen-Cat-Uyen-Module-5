import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from '../model/product';
import {ActivatedRoute, Router} from "@angular/router";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  index: number = 0;

  constructor(private _productService: ProductService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.getAll(this.index);
  }

  getAll(index: number) {
    this.index = this._activatedRoute.snapshot.params['index'];
    if (isNotNullOrUndefined(this.index)) {
      this._productService.deleteProduct(this.index);
    }
    this._productService.getAll().subscribe(products => {
      this.products = products;
    });
    this._router.navigate(['product/list']);

  }


}
