import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() handleAdd = new EventEmitter();

  addToCart(product: Product) {
    this.handleAdd.emit(product);
  }
}
