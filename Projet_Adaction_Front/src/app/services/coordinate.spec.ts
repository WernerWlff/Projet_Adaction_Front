import { TestBed } from '@angular/core/testing';

import { Coordinate } from './coordinate';

describe('Coordinate', () => {
  let service: Coordinate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Coordinate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
