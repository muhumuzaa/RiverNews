/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticleServiceService } from './articleService.service';

describe('Service: ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleServiceService]
    });
  });

  it('should ...', inject([ArticleServiceService], (service: ArticleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
