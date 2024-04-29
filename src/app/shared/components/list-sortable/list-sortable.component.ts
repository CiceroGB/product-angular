import { Component, Output , EventEmitter, Input} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-sortable',
  templateUrl: './list-sortable.component.html',
  styleUrls: ['./list-sortable.component.css'],
})
export class ListSortableComponent {
  @Input() items: any[] = [];
  @Output() listChanged = new EventEmitter<any[]>();

  onDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.listChanged.emit(this.items);
  }

  objectKeys(item: object): string[] {
    return Object.keys(item);
  }
}
