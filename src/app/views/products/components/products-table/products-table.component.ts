import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})
export class ProductsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  dataSource = new MatTableDataSource<Product>();
  searchValue: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadData(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.dataSource.data = products;
    });
  }

  applyFilter(): void {
    this.dataSource.filter = this.searchValue.trim().toLowerCase();
  }

  editUser(product: Product): void {
    alert(JSON.stringify(product));
  }

  deleteUser(product: Product): void {
    alert(JSON.stringify(product));
  }
}
