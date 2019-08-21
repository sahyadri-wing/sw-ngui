import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwConfirmDialogComponent } from './sw-confirm-dialog.component';

describe('SwConfirmDialogComponent', () => {
  let component: SwConfirmDialogComponent;
  let fixture: ComponentFixture<SwConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
