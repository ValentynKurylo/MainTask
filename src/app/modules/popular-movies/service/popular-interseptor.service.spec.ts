import { TestBed } from '@angular/core/testing';

import { PopularInterseptorService } from './popular-interseptor.service';

describe('PopularInterseptorService', () => {
  let service: PopularInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
