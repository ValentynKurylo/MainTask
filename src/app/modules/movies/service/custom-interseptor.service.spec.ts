import { TestBed } from '@angular/core/testing';

import { CustomInterseptorService } from './custom-interseptor.service';

describe('CustomInterseptorService', () => {
  let service: CustomInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
