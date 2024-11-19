import { TestBed } from '@angular/core/testing';

import { DeputadoServiceService } from './deputado-service.service';

describe('DeputadoServiceService', () => {
  let service: DeputadoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeputadoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
