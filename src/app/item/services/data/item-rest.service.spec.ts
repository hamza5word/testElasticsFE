import { TestBed } from '@angular/core/testing';

import { ItemRestService } from './item-rest.service';

describe('ItemRestService', () => {
  let service: ItemRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
