import { TestBed, inject } from '@angular/core/testing';

import { CommentaryService } from './commentary.service';

describe('CommentaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentaryService]
    });
  });

  it('should be created', inject([CommentaryService], (service: CommentaryService) => {
    expect(service).toBeTruthy();
  }));
});
