import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css']
})
export class EditProductModalComponent implements OnInit {
  @Output() onClose = new EventEmitter<any>();

  data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dialogRef: MatDialogRef<EditProductModalComponent>
  ) {
    this.data = dialogData;
  }

  ngOnInit(): void {
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Modal closed', result);
      this.onClose.emit(result);
    });
  }

  saveProductSucess(formValue: any) {
    this.dialogRef.close(formValue);
  }

}
