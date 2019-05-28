import * as testing from '@angular/core/testing';

import { PhotoService } from "../services/photo.service";

describe('PhotoService', () => {
  beforeEach(() => testing.TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoService = testing.TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
