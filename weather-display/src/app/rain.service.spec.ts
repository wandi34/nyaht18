import { TestBed, inject } from '@angular/core/testing';

import { RainService } from './rain.service';

describe('RainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RainService]
    });
  });

  it('should be created', inject([RainService], (service: RainService) => {
    expect(service).toBeTruthy();
  }));
});
