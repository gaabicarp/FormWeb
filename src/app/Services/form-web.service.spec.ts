import { TestBed } from '@angular/core/testing';

import { FormWebService } from './form-web.service';

describe('FormWebService', () => {
  let service: FormWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
