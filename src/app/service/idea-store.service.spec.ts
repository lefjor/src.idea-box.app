import { TestBed, inject } from '@angular/core/testing';

import { IdeaStoreService } from './idea-store.service';

describe('IdeaStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeaStoreService]
    });
  });

  it('should ...', inject([IdeaStoreService], (service: IdeaStoreService) => {
    expect(service).toBeTruthy();
  }));
});
