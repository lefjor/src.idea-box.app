import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaryViewComponent } from './commentary-view.component';

describe('CommentaryViewComponent', () => {
  let component: CommentaryViewComponent;
  let fixture: ComponentFixture<CommentaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
