import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'Iphone 12',
    price: 240000,
    description: 'New'
  }, {
    id: 2,
    name: 'Iphone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'Iphone X',
    price: 968000,
    description: '97%'
  }, {
    id: 5,
    name: 'Iphone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  findById(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }
    return undefined;
  }

  update(product: Product) {
    this.products[product.id - 1] = product;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}

