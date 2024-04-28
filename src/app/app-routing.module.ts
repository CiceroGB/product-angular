import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './views/product/product.component';
import { ProductAddComponent } from './views/product-add/product-add.component';
import { ProductEditComponent } from './views/product-edit/product-edit.component';
import { ProductsComponent} from './views/products/products.component';

const routes: Routes = [
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
