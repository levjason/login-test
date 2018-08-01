import { TestBed, inject } from '@angular/core/testing';

import { IsserviceService } from './isservice.service';

describe('IsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsserviceService]
    });
  });

  it('should be created', inject([IsserviceService], (service: IsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
