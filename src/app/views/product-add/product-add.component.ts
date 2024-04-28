import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/services/product/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  currentProduct: Product | null = null;
  isEditing = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSaveProduct(product: Product): void {
    const { id, ...productWithoutId } = product;
    this.productService.addProduct(productWithoutId).subscribe({
      next: (res) => {
        console.log('Product added', res);
        if (res.id) {
          this.router.navigate(['/product', res.id]);
        }
      },
      error: (err) => console.error('Error adding product', err),
    });
  }
}
