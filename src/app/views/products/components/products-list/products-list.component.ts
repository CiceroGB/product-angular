import { Component, OnInit , Input} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
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

  constructor() {}

  ngOnInit() { }

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

}
