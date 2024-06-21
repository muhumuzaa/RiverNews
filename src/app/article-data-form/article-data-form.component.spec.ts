import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDataFormComponent } from './article-data-form.component';

describe('ArticleDataFormComponent', () => {
  let component: ArticleDataFormComponent;
  let fixture: ComponentFixture<ArticleDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
