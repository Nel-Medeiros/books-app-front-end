import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDialogDataComponent } from './update-dialog-data.component';

describe('UpdateDialogDataComponent', () => {
  let component: UpdateDialogDataComponent;
  let fixture: ComponentFixture<UpdateDialogDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDialogDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDialogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
