import { TestBed } from '@angular/core/testing';

import { Collect } from './collect';

describe('Collect', () => {
  let service: Collect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Collect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
