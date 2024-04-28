import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Input() set product(value: Product | null) {
    if (value) {
      this.updateForm(value);
    }
  }
  @Input() isEditing: boolean = false;
  @Output() saveProduct = new EventEmitter<Product>();

  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.productForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.01)]],
      date: ['', Validators.required],
      description: [''],
    });
  }

  updateForm(product: Product): void {
    const formattedProduct = {
      ...product,
      price: product.price.toString().replace('.', ','),
    };
    this.productForm.patchValue(formattedProduct);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      this.saveProduct.emit(formValue);
    }
  }
}
