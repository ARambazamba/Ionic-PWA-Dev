import { TestBed } from '@angular/core/testing';

import { GeoServiceHTMLService } from './geo-service-html.service';

describe('GeoServiceHTMLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoServiceHTMLService = TestBed.get(GeoServiceHTMLService);
    expect(service).toBeTruthy();
  });
});
