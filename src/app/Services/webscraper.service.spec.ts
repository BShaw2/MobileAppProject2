import { TestBed } from '@angular/core/testing';

import { WebscraperService } from './webscraper.service';

describe('WebscraperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebscraperService = TestBed.get(WebscraperService);
    expect(service).toBeTruthy();
  });
});
