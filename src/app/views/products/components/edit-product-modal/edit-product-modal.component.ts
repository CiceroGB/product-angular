import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommunicationService} from 'src/app/shared/services/comunication.service'

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css']
})
export class EditProductModalComponent implements OnInit {
  data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dialogRef: MatDialogRef<EditProductModalComponent>,
    private commService: CommunicationService
  ) {
    this.data = dialogData;
  }

  ngOnInit(): void {}

  handleSave(data: any): void {
    this.commService.emitEvent(data);
  }
}
