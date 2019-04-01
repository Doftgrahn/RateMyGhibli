import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';

describe('FilmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmsService = TestBed.get(FilmsService);
    expect(service).toBeTruthy();
  });
});
