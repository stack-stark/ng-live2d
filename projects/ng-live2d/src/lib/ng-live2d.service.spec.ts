import { TestBed } from '@angular/core/testing';

import { NgLive2dService } from './ng-live2d.service';

describe('NgLive2dService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLive2dService = TestBed.get(NgLive2dService);
    expect(service).toBeTruthy();
  });
});
