import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { EditProductModalComponent } from '../edit-product-modal/edit-product-modal.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  private _products: Product[] = [];

  @Input() set products(value: Product[] | []) {
    if (value) {
      this._products = value;
      this.productsFiltered = value;
    }
  }

  productsFiltered: Product[] = [];
  search: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onSearchChange(): void {
    this.filter();
  }

  private filter(): void {
    if (this.search) {
      const searchString = this.search.toLowerCase();
      this.productsFiltered = this._products.filter((product) =>
        Object.values(product).some((value) =>
          value?.toString().toLowerCase().includes(searchString)
        )
      );
      return;
    }
    this.productsFiltered = this.products;
    return;
  }

  openEditModal(data: Product): void {
    const dialogRef = this.dialog.open(EditProductModalComponent, {
      width: '250px',
      data: data, // Passando dados para o modal, se necessário
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', JSON.stringify(result));
    });
  }
}
