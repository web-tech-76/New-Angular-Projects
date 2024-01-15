import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketHeaderComponent } from './cricket-header.component';

describe('CricketHeaderComponent', () => {
  let component: CricketHeaderComponent;
  let fixture: ComponentFixture<CricketHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CricketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
