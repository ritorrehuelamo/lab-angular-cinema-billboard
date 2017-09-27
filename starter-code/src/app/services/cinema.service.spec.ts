/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CinemaService } from './cinema.service';

describe('CinemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemaService]
    });
  });

  it('should ...', inject([CinemaService], (service: CinemaService) => {
    expect(service).toBeTruthy();
  }));
});
