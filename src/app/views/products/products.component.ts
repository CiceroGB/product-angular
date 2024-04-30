import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { NotificationService } from 'src/app/shared/services/notification.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService,

  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  editProduct(product: Product): void {
    console.log(JSON.stringify(product));
    this.notificationService.success('Dados enviados com sucesso!');

  }

  deleteProduct(product: Product): void {
    console.log(JSON.stringify(product));
    this.notificationService.success('Dados deletados!');
  }


  handleListChange(updatedList: any[]) {
    console.log('Itens atualizados:', updatedList);
  }



}
