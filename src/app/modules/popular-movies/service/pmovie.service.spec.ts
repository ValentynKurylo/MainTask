import { TestBed } from '@angular/core/testing';

import { PmovieService } from './pmovie.service';

describe('PmovieService', () => {
  let service: PmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
