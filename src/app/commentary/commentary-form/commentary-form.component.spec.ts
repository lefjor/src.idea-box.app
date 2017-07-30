import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaryFormComponent } from './commentary-form.component';

describe('CommentaryFormComponent', () => {
  let component: CommentaryFormComponent;
  let fixture: ComponentFixture<CommentaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
