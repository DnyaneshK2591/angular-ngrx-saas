import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productView',
    pathMatch: 'full',
  },
  {
    path: 'productView',
    component: ProductViewComponent,
  },
  {
    path: 'cartView',
    component: CartViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
