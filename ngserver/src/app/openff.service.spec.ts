import { TestBed } from '@angular/core/testing';

import { OpenffService } from './openff.service';

describe('OpenffService', () => {
  let service: OpenffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
