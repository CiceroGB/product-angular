import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/services/product/product.service';
import { Product } from '../../models/product.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  currentProduct: Product | null = null;
  isEditing = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onSaveProduct(product: Product): void {
    const { id, ...productWithoutId } = product;
    this.productService.addProduct(productWithoutId).subscribe({
      next: (res) => {
        console.log('Product added', res);
        if (res.id) {
          this.router.navigate(['/product', res.id]);
          this.notificationService.success('Dados enviados com sucesso!');
        }
      },
      error: (err) => {
        console.error('Error adding product', err);
        this.notificationService.error('Falha ao incluir produto!');
      },
    });
  }
}
