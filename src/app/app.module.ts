import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './views/product/product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ProductAddComponent } from './views/product-add/product-add.component';
import { ProductEditComponent } from './views/product-edit/product-edit.component';
import { ProductsComponent } from './views/products/products.component';

import { MaterialModule } from './shared/material/material.module';

import { NgxMaskModule, IConfig } from 'ngx-mask'

export const maskConfig: Partial<IConfig> = {
  validation: true,
};
// Importando o locale pt-BR
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProductsTableComponent } from './views/products/components/products-table/products-table.component';
import { TableGenericComponent } from './shared/components/table-generic/table-generic.component';
import { ProductsListComponent } from './views/products/components/products-list/products-list.component';
import { ListSortableComponent } from './shared/components/list-sortable/list-sortable.component';
import { EditProductModalComponent } from './views/products/components/edit-product-modal/edit-product-modal.component';



// Registrar o locale pt-BR
registerLocaleData(localePt);


@NgModule({
  declarations: [AppComponent, ProductComponent, ProductFormComponent, ProductAddComponent, ProductEditComponent, ProductsComponent, ProductsTableComponent, TableGenericComponent, ProductsListComponent, ListSortableComponent, EditProductModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
