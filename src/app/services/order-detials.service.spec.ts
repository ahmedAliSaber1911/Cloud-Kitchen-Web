import { TestBed } from '@angular/core/testing';

import { OrderDetialsService } from './order-detials.service';

describe('OrderDetialsService', () => {
  let service: OrderDetialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDetialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
