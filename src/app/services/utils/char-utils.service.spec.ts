import { TestBed } from '@angular/core/testing';

import { CharUtilsService } from './char-utils.service';

describe('CharUtilsService', () => {
  let service: CharUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should work properly', () => {
    expect(service.upperFirstChar('hello')).toEqual('Hello');
  });

});
