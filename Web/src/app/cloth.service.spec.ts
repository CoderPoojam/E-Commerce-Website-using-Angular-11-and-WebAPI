import { TestBed } from '@angular/core/testing';

import { ClothService } from './cloth.service';

describe('ClothService', () => {
  let service: ClothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
