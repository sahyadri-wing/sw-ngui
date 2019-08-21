import { TestBed } from '@angular/core/testing';

import { SwConfirmDialogService } from './sw-confirm-dialog.service';

describe('SwConfirmDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwConfirmDialogService = TestBed.get(SwConfirmDialogService);
    expect(service).toBeTruthy();
  });
});
