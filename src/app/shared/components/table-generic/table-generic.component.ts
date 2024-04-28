import { Component, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.css']
})
export class TableGenericComponent<T> implements AfterViewInit {
  private _data: T[] = [];

  @Input() set data(value: T[]) {
    this._data = value;
    if (this.dataSource) {
      this.dataSource.data = value;
    }
  }

  @Input() displayedColumns!: string[];
  @Input() columnDefinitions!: any[];

  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();

  dataSource = new MatTableDataSource<T>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this._data;  // Make sure data is available once view is initialized
  }

  onEdit(item: T): void {
    this.edit.emit(item);
  }

  onDelete(item: T): void {
    this.delete.emit(item);
  }
}
