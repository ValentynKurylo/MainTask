import { TestBed } from '@angular/core/testing';

import { GenreIntercepterService } from './genre-intercepter.service';

describe('GenreIntercepterService', () => {
  let service: GenreIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
