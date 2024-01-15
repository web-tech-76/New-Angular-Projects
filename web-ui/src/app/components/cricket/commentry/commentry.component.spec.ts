import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentryComponent } from './commentry.component';

describe('CommentryComponent', () => {
  let component: CommentryComponent;
  let fixture: ComponentFixture<CommentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
