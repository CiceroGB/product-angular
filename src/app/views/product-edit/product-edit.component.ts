import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../shared/services/product/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  currentProduct: Product | null = null;
  isEditing = true;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.currentProduct = product;
      });
    }
  }

  onSaveProduct(product: Product): void {
    this.productService
      .updateProduct(product)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => console.log('Product updated', res),
        error: (err) => console.error('Error updating product', err),
      });
  }
}
