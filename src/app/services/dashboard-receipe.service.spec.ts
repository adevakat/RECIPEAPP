import { TestBed } from '@angular/core/testing';

import { DashboardReceipeService } from './dashboard-receipe.service';

describe('DashboardReceipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardReceipeService = TestBed.get(DashboardReceipeService);
    expect(service).toBeTruthy();
  });
});
