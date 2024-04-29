import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSortableComponent } from './list-sortable.component';

describe('ListSortableComponent', () => {
  let component: ListSortableComponent;
  let fixture: ComponentFixture<ListSortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSortableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
