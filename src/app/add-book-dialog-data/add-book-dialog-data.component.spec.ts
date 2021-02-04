import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookDialogDataComponent } from './add-book-dialog-data.component';

describe('AddBookDialogDataComponent', () => {
  let component: AddBookDialogDataComponent;
  let fixture: ComponentFixture<AddBookDialogDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookDialogDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookDialogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
