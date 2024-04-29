import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CommunicationService} from 'src/app/shared/services/comunication.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  private eventsSubscription!: Subscription;
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService,
    private commService: CommunicationService,
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.eventsSubscription = this.commService.getEvent().subscribe(data => {
     this.editProduct(data);
    });
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
    this.notificationService.success('Dados atualizados!');
  }

  ngOnDestroy() {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
  }

}
