import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  products$: any[];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.fetchProducts().subscribe(data => {
      this.products$ = data;
    });
  }
  addItemToCart(product: Product) {
    {
      console.log(product);
    }
  }
}
